import Exa from "exa-js";
import { FETCH_NEWS_PROMPT } from "../constants.js";
import deduplicateNews from "../utils/deduplicate.js";
import summarize from "../utils/summarize.js";

const exa = new Exa(process.env.EXA_API_KEY);

export const fetchAINews = async (limit) => {

  const today = new Date();
  const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

  const startDate = sevenDaysAgo.toISOString().split("T")[0];
  const endDate = today.toISOString().split("T")[0];

  const results = await exa.search(
    FETCH_NEWS_PROMPT.replace("{dateRange}", `${startDate} to ${endDate}`), {
      numResults: 20,
    }
  );

  const articles = await Promise.all(
    results.results.map(async (r) => ({
      id: r.id,
      title: r.title,
      url: r.url,
      publishedDate: r.publishedDate,
      author: r.author,
      text: await summarize(r.title, r.text)
    }))
  );

  const uniqueNews = await deduplicateNews(articles);
  return uniqueNews;
};