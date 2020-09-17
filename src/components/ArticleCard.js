import React from "react";

import { Link } from "react-router-dom";

// The ArticleCard is receiving the articleData that is passsed to it in ArticleListing.js
function ArticleCard({ articleData }) {
  console.log(articleData);
  return (
    <div className="ArticleCard">
      <div className="ArticleCardImage">
        <img src={articleData.image.url} alt={articleData.image.alt} />
      </div>
      <div className="ArticleCardText">
        <h2>{articleData.title}</h2>
        <p>{articleData.publishedDate}</p>
        <p>{articleData.blurb}</p>
        <Link to={`article/${articleData.id}`}>Read More</Link>
      </div>
      {/* Create a Read More link that routes you to the /article part of the website, and /id where id id is a dynamic value that is stored in the data */}
      {/* This formatting is for string literals. It's a way to concatenate a string and a dynamic js value from the data object */}
    </div>
  );
}

export default ArticleCard;
