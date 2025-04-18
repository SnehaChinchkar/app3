import React from "react";
import MainSection from "../components/MainSection";
import TopBlog from "../components/TopBlog";

function News() {
  const dummyArticles = [
    {
      title: "Understanding React Hooks",
      summary: "An in-depth look at React Hooks and how they can be used to manage state and side effects in functional components.",
    },
    {
      title: "A Guide to Tailwind CSS",
      summary: "Learn how to use Tailwind CSS to create beautiful, responsive designs quickly and efficiently.",
    },
    {
      title: "JavaScript ES6 Features",
      summary: "Explore the new features introduced in ES6 and how they can improve your JavaScript code.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="flex flex-col gap-8 items-center sm:items-start py-10 px-4">
        
        <MainSection />
        <TopBlog articles={dummyArticles} />
      </main>
    </div>
  );
}

export default News;
