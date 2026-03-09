import { openAiClient } from "../ai.js";
import { MERGE_NEWS_PROMPT } from "../constants.js";

const deduplicateNews = async (articles) => {

  const input = articles
    .map((a, i) => `
Article ${i + 1}
Title: ${a.title}
URL: ${a.url}
Summary: ${a.text}
publishedDate: ${a.publishedDate}
`)
    .join("\n");

  const response = await openAiClient.chat.completions.create({
  model: "openai/gpt-4o-mini",
  temperature: 0.1,
  messages: [
    { role: "system", content: MERGE_NEWS_PROMPT },
    { role: "user", content: input }
  ],
});

const mergedNews = JSON.parse(response.choices[0].message.content);

return mergedNews;
};

export default deduplicateNews;