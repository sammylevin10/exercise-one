import React from "react";

import ArticleCard from "../components/ArticleCard";

function ArticleListing() {
  return (
    //   Section and header tags are best practices for code readability
    <section>
      <header>
        <h1>Articles</h1>
        <ArticleCard />
      </header>
    </section>
  );
}

export default ArticleListing;
