import React from "react";

import { useParams } from "react-router-dom";

import Data from "../components/data";

import { days, months } from "../components/dateValues";

function Article() {
  let { id } = useParams();

  // Using .find() function to parse through the entire Data array, only when the article's id is equal to the id in the params
  const articleData = Data.find((article) => article.id === id);
  if (!articleData) return null;

  const date = new Date(articleData.publishedDate);
  const dayOfWeek = date.getDay();
  const month = date.getMonth();
  const calendarDate = date.getDate();
  const year = date.getFullYear();

  return (
    <section className="Article">
      <header
        className="ArticleHeaderWrapper"
        style={{ backgroundImage: `url('${articleData.image.url}')` }}
      >
        <div className="ArticleHeader">
          <h1>{articleData.title}</h1>
          <p>{`${days[dayOfWeek]}, ${months[month]} ${calendarDate}, ${year}`}</p>
          <p className="ArticleHeaderBlurb">{articleData.blurb}</p>
        </div>
      </header>

      <article className="ArticleBody">
        {/* articleText is an object inside articleData */}
        {/* Loop through the articleText and return a p element for each "data" key in articleText */}
        {articleData.articleText.map((article, i) => {
          // This switch statement checks each type inside article, and creates an element according to the type with data as its contents
          switch (article.type) {
            case "p":
              return <p key={i}>{article.data}</p>;
            case "h1":
              return <h1 key={i}>{article.data}</h1>;
            case "h2":
              return <h3 key={i}>{article.data}</h3>;
            default:
              return null;
          }
        })}
      </article>
    </section>
  );
}

export default Article;
