import { fetchAINews } from "../services/exa.service.js";

export const getAINews = async (req, res) => {
  try {

    const limit = req.query.limit || 10;

    const news = await fetchAINews(Number(limit));

    res.json({
      success: true,
      count: news.length,
      news
    });

  } catch (error) {

    console.error("Error fetching AI news:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch AI news",
    });
  }
};