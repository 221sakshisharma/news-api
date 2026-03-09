import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: "GET",
}))

app.use(helmet());
app.use(express.json());

import { getAINews } from "./controllers/news.controller.js";

app.get("/ai-news", getAINews);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});