import React from "react";
// Component Imports
import ArticleCard from "../components/ArticleCard";
// Data Imports
import Data from "../components/data";

function ArticleListing() {
  // props = properties = sends data through the flow of the components
  return (
    //   Section and header tags are best practices for code readability
    <main>
      <header>
        <h1>Articles</h1>
      </header>

      {/* Data.map(element, iterator) is a function that acts like an enhanced for loop. It parses through each element in the iterable type */}
      {/* For every article, generate article card */}
      {Data.map((article, i) => (
        //   During this map, an ArticleCard is generated, and the key and articleData are passed to that ArticleCard
        <ArticleCard key={i} articleData={article} />
      ))}
    </main>
  );
}

export default ArticleListing;
