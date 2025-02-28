import { NextResponse } from "next/server";
import axios from "axios";
import { decorateNews } from "./news.decorator";

const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";
const GUARDIAN_API_URL = "https://content.guardianapis.com/search";

const APIS = {
  newsapi: {
    key: process.env.NEWS_API_KEY,
    url: NEWS_API_URL,
  },
  guardianapi: {
    key: process.env.GUARDIAN_API_KEY,
    url: GUARDIAN_API_URL,
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get("country") || "us";
  const category = searchParams.get("category") || "";
  const source =
    (searchParams.get("source") as "guardianapi" | "newsapi") || "newsapi";
  const q = searchParams.get("q") || "";
  const apiKey = APIS[source].key;
  const url = APIS[source].url;

  try {
    const params: any = {
      apiKey,
      "api-key": apiKey,
      country,
      category,
      q,
      "from-date": searchParams.get("from"),
    };

    const paramsWithoutEmptyValues = Object.fromEntries(
      Object.entries(params).filter(([_key, value]) => value !== "")
    );

    const response = await axios.get(url, {
      params: paramsWithoutEmptyValues,
    });

    const decoratedData = decorateNews(
      response?.data.articles || response.data?.response?.results,
      source
    );

    return NextResponse.json(decoratedData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data from NewsAPI" },
      { status: 500 }
    );
  }
}
