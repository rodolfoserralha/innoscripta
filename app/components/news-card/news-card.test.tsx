import { render, screen } from "@testing-library/react";
import NewsCard from "./news-card";

describe("NewsCard", () => {
  it("should render correctly", () => {
    render(
      <NewsCard index={2} title="test" description="testing" url="test" />
    );

    expect(screen.getByText("testing")).toBeInTheDocument();
  });
});
