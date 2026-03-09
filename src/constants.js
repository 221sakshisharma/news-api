
export const FETCH_NEWS_PROMPT = `Search for the LATEST and most TRENDING AI news from the past 7 days ({dateRange}),
with STRONG PRIORITY for news from the last 24-48 hours.

Focus EXCLUSIVELY on these TRENDING topics:
- NEW MODEL LAUNCHES and MAJOR UPDATES
- LATEST MODEL FEATURES and CAPABILITIES (new reasoning modes, tool use, vision, voice, extended context, etc.)
- BENCHMARK RESULTS and PERFORMANCE IMPROVEMENTS (new SOTA scores, speed improvements, cost reductions)
- BREAKING AI BREAKTHROUGHS (novel architectures, training techniques, scaling laws)
- NEW GENERATIVE AI FEATURES (video generation updates, image models, audio/music AI, code generation improvements)
- LATEST MULTIMODAL CAPABILITIES (vision-language models, audio-visual AI, any-to-any models)
- NEW AI TOOL RELEASES and FEATURE LAUNCHES (ChatGPT updates, Claude features, API improvements, developer tools)
- TRENDING OPEN SOURCE RELEASES (new model weights, frameworks, libraries with significant impact)
- AI AGENT BREAKTHROUGHS (autonomous agents, agentic workflows, new frameworks)

CRITICAL RECENCY: Prioritize news from the LAST 24-48 HOURS.
Look for "announced today", "just launched", "breaking", "new release".

EXCLUDE:
- Corporate news, funding rounds, hiring, regulations
- General tech news, opinion pieces, tutorials
`

export const MERGE_NEWS_PROMPT = `
You are an AI news editor.

You will receive summaries from multiple AI news articles.
Some articles may describe the same event.

Your tasks:
1. Identify which summaries refer to the same news event.
2. Merge overlapping information into one clean story.
3. Remove duplicate facts.
4. Keep only important information.

Rules:
- Do not repeat the same story twice.
- Ignore category pages or non-article pages.
- Combine information from multiple sources when relevant.

Return ONLY valid JSON in this format:

[
  {
    "title": "short headline",
    "summary": "merged summary",
    "sources": ["url1","url2"],
    "publishedDate": "YYYY-MM-DD"
  }
]

Do not include markdown.
Do not include explanations.
Only return JSON.
`;


export const SUMMARIZE_PROMPT = `
You are a news summarization assistant.

Input:
- Article title
- Raw text extracted from the webpage

The raw text may contain noise such as ads, navigation links, repeated text, or unrelated content.

Instructions:
1. Use the title to understand the topic.
2. Filter out irrelevant or noisy text.
3. Identify the key information in the article.
4. Write a concise factual summary.

Output requirements:
- Clear and informative
- No speculation
- Only include information supported by the text
`;