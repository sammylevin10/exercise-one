import React from "react";

import { Link } from "react-router-dom";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// The ArticleCard is receiving the articleData that is passsed to it in ArticleListing.js
function ArticleCard({ articleData }) {
  const date = new Date(articleData.publishedDate);
  const dayOfWeek = date.getDay();
  const month = date.getMonth();
  const calendarDate = date.getDate();
  const year = date.getFullYear();

  return (
    <div className="ArticleCard">
      <div className="ArticleCardImage">
        <img src={articleData.image.url} alt={articleData.image.alt} />
      </div>
      <div className="ArticleCardText">
        <h2>{articleData.title}</h2>
        {/* Form a date string using a string literal that references both a Date() object and two const arrays that we defined above. */}
        {/* The Date() object stores information as array indeces because storing them as English strings would be language biased */}
        <p>{`${days[dayOfWeek]}, ${months[month]} ${calendarDate} ${year}`}</p>
        <p>{articleData.blurb}</p>
        <Link to={`article/${articleData.id}`}>Read More</Link>
      </div>
      {/* Create a Read More link that routes you to the /article part of the website, and /id where id id is a dynamic value that is stored in the data */}
      {/* This formatting is for string literals. It's a way to concatenate a string and a dynamic js value from the data object */}
    </div>
  );
}

export default ArticleCard;
