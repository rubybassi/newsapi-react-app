import React from "react";
import "./article.css";

const ArticleList = ({ title, author, description, url, imageUrl }) => {

  // returns new string and appends elipsis when description is more than 150 characters; 
  const truncateDescription = (text) =>
    text.length > 150 ? `${text.substring(0, 150)}...` : text;

  return (
    <div className="card-item-wrapper">
      <a href={url} className="card-link" target="_blank" rel="noopener noreferrer">
        <img src={imageUrl || "https://picsum.photos/200/300" } alt={title} />
        <div className="card-item-content">
          <h3>{title}</h3>
          {author ? <h4>By {author}</h4> : null}
          <p>{truncateDescription(description)}</p>
        </div>
      </a>
    </div>
  );
};

export default ArticleList;
