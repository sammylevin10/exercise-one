import React from "react";

// The ArticleCard is receiving the articleData that is passsed to it in ArticleListing.js
function ArticleCard({ articleData }) {
  console.log(articleData);
  return (
    <div>
      <h2>{articleData.title}</h2>
    </div>
  );
}

export default ArticleCard;
