import NewsCard from "@components/news-card";
import SelectInput from "@components/select-input";
import axios from "axios";
import { useEffect, useState } from "react";

const FiltersContainer = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [language, setLanguage] = useState<string>("en");
  const [authors, setAuthors] = useState<{ id: string; name: string }[]>([]);
  const [author, setAuthor] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<string>("");

  const fetchNewsApi = async () => {
    setLoading(true);

    try {
      const response = await axios.get("/api/newsapi", {
        params: {
          q: searchTerm,
          from: date,
          to: date,
          apiKey: process.env.NEWS_API_KEY,
          language,
        },
      });

      setNews(response.data.news);
      setAuthors(response.data.authors);
    } catch (error) {
      setError("Failed to fetch data from News");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsApi();
  }, [language]);

  const handleClick = async () => {
    await fetchNewsApi();
  };

  const cleanFilters = () => {
    setSearchTerm("");
    setAuthor("");
    setDate("");
    setLanguage("en");
  };

  return (
    <div className="flex flex-col justify-between mt-4 mb-4 gap-2">
      <input
        type="text"
        placeholder="Search by keyword"
        className="border p-2 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <SelectInput
        value={language}
        setter={setLanguage}
        options={[
          { id: "en", name: "English" },
          { id: "de", name: "Germany" },
          { id: "pt", name: "Portuguese" },
        ]}
      />

      <SelectInput
        value={author}
        setter={setAuthor}
        options={authors}
        defaultOption="All Authors"
        testId="author-select"
      />

      <input
        type="date"
        className="border p-2 rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button
        onClick={handleClick}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Search
      </button>

      <button
        onClick={cleanFilters}
        className="bg-white text-darkBlue p-2 rounded border border-darkBlue"
      >
        Clear filters
      </button>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news
            ?.filter((n) => {
              return author ? n.author === author : true;
            })
            .map((nw, index) => (
              <NewsCard key={index} {...nw} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersContainer;
