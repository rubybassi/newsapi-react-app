import React from "react";
import "./article.css";

const ArticleList = ({ title, author, description, url, imageUrl }) => {
  return (
    <div className="card-item-wrapper">
      <img src={imageUrl} alt={title} />
      <div className="card-item-content">
        <h3>{title}</h3>
        <h4>By {author}</h4>
        <p>{description}</p>
        <a href={url} className="card-link">
          Read article
        </a>
      </div>
    </div>
  );
};

export default ArticleList;
