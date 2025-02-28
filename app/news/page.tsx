"use client";

import FiltersAndNews from "@containers/filters-and-news";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center mt-4">News Aggregator</h1>
      <FiltersAndNews />
    </div>
  );
}
