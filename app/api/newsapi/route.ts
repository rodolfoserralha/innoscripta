import { NextResponse } from "next/server";
import axios from "axios";
import { decorateNewsApi } from "./route.decorator";

const NEWS_API_URL = "https://newsapi.org/v2/everything";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "latest news";
  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const sortBy = searchParams.get("sortBy") || "publishedAt";
  const language = searchParams.get("language") || "en";
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API key is missing." }, { status: 400 });
  }

  try {
    const params: Record<string, any> = {
      apiKey,
      q,
      from,
      to,
      pageSize: 49,
      sortBy,
      language,
    };

    const paramsWithoutEmptyValues = Object.fromEntries(
      Object.entries(params).filter(([_key, value]) => value !== "")
    );

    const response = await axios.get(NEWS_API_URL, {
      params: paramsWithoutEmptyValues,
    });

    return NextResponse.json(decorateNewsApi(response.data.articles));
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data from NewsAPI" },
      { status: 500 }
    );
  }
}
