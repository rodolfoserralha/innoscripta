import { INewsApi, IGuardianApi, INews } from "./route.interface";

export const decorateNews = (
  news: INewsApi[] | IGuardianApi[],
  source: "guardianapi" | "newsapi"
) => {
  let decoratedNews: INews[] = [];

  if (source === "newsapi") {
    decoratedNews = news.map((newsItem) => {
      const newsApiItem = newsItem as INewsApi;

      return {
        title: newsApiItem.title,
        description: newsApiItem.content,
        url: newsApiItem.url,
        date: newsApiItem.publishedAt,
      };
    });
  }

  if (source === "guardianapi") {
    decoratedNews = news.map((newsItem) => {
      const guardianApiItem = newsItem as IGuardianApi;

      return {
        title: guardianApiItem.webTitle,
        description: guardianApiItem.webTitle,
        url: guardianApiItem.webUrl,
        date: guardianApiItem.webPublicationDate,
      };
    });
  }

  return decoratedNews;
};
