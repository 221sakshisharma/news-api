import { openAiClient } from "../ai.js";
import { SUMMARIZE_PROMPT } from "../constants.js";

const summarize = async (title, text) => {
    const response = await openAiClient.chat.completions.create({
        model: "openai/gpt-4o-mini",
        temperature: 0.1,
        messages: [
            {
                role: "system",
                content: SUMMARIZE_PROMPT
            },
            {
                role: "user",
                content: `Title: ${title}\n\nArticle Text:\n${text}`
            }
        ],
    });

    return response.choices[0].message.content.trim();
}

export default summarize;