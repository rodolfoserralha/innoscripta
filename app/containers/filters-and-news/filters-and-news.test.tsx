import React, { act } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import FiltersContainer from "./filters-and-news";
import axios from "axios";

jest.mock("axios");

describe("FiltersContainer", () => {
  it("fetches and displays news articles", async () => {
    const mockNewsResponse = {
      data: {
        news: [
          {
            title: "Test Article",
            description: "Description of Test Article",
            url: "http://example.com/test-article",
            publishedAt: "2023-01-01T12:00:00Z",
            source: { name: "Test Source" },
            author: "author1",
          },
        ],
        authors: [
          { id: "author1", name: "Author One" },
          { id: "author2", name: "Author Two" },
        ],
      },
    };

    (axios.get as jest.Mock).mockResolvedValueOnce(mockNewsResponse);

    render(<FiltersContainer />);

    const searchInput = screen.getByPlaceholderText("Search by keyword");

    act(() => {
      fireEvent.change(searchInput, { target: { value: "Test" } });
    });

    const languageSelect = screen.getByDisplayValue("English");

    act(() => {
      fireEvent.change(languageSelect, { target: { value: "de" } });
    });

    const searchButton = screen.getByText("Search");

    act(() => {
      fireEvent.click(searchButton);
    });

    await waitFor(() => {
      expect(screen.getByText("Test Article")).toBeInTheDocument();
    });

    expect(screen.getByText("Author One")).toBeInTheDocument();
    expect(screen.getByText("Author Two")).toBeInTheDocument();
  });

  it("handles errors from the API", async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error("API Error"));

    render(<FiltersContainer />);

    const searchButton = screen.getByText("Search");

    act(() => {
      fireEvent.click(searchButton);
    });

    await waitFor(() => {
      expect(
        screen.getByText("Failed to fetch data from News")
      ).toBeInTheDocument();
    });
  });

  it("clears filters when clear filters button is clicked", async () => {
    const mockNewsResponse = {
      data: {
        news: [
          {
            title: "Test Article",
            description: "Description of Test Article",
            url: "http://example.com/test-article",
            publishedAt: "2023-01-01T12:00:00Z",
            source: { name: "Test Source" },
            author: "author1",
          },
        ],
        authors: [
          { id: "author1", name: "Author One" },
          { id: "author2", name: "Author Two" },
        ],
      },
    };

    (axios.get as jest.Mock).mockResolvedValueOnce(mockNewsResponse);

    render(<FiltersContainer />);

    const searchInput = screen.getByPlaceholderText("Search by keyword");

    act(() => {
      fireEvent.change(searchInput, { target: { value: "Test" } });
    });

    const clearButton = screen.getByText("Clear filters");

    act(() => {
      fireEvent.click(clearButton);
    });

    expect(searchInput).toHaveValue("");
  });
});
