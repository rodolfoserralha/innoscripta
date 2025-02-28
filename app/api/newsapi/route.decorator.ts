interface INews {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: {
    name: string;
  };
  author?: string;
}

interface Author {
  id: string;
  name: string;
}

interface DecoratedNews {
  news: INews[];
  authors: Author[];
}

export const decorateNewsApi = (news: INews[]): DecoratedNews => {
  const { decoratedNews, authors } = news.reduce<{
    decoratedNews: INews[];
    authors: Author[];
  }>(
    (acc, n) => {
      acc.decoratedNews.push({
        author: n.author,
        title: n.title,
        description: n.description,
        url: n.url,
        publishedAt: n.publishedAt,
        source: {
          name: n.source.name,
        },
      });

      if (n.author) {
        acc.authors.push({
          id: n.author,
          name: n.author,
        });
      }

      return acc;
    },
    { decoratedNews: [], authors: [] }
  );

  const uniqueAuthors = Array.from(
    new Map(authors.map((author) => [author.name, author])).values()
  );

  return {
    news: decoratedNews,
    authors: uniqueAuthors,
  };
};
