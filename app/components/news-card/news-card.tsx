import { INewsCard } from "./news-card.props";

const NewsCard = ({ index, title, description, url }: INewsCard) => {
  return (
    <div key={index} className="shadow p-4 rounded-lg bg-white">
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="mt-2">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 inline-block"
      >
        Read more
      </a>
    </div>
  );
};

export default NewsCard;
