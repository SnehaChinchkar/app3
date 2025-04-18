import React from "react";

export default function TopBlog({ articles }) {
  return (
    <div className="w-full px-4 max-w-4xl">
      <h2 className="text-2xl font-bold mb-4 text-white">Top Blog Posts</h2>
      <div className="space-y-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="p-4 border border-gray-700 rounded shadow-sm bg-gray-800 transition hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white">{article.title}</h3>
            <p className="text-gray-300">{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
