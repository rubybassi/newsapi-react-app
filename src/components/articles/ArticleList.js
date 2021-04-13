import React from 'react';
import './article.css';

const ArticleList = () => {
  return (
    <div className="card-item-wrapper">
        <img
          src="https://techcrunch.com/wp-content/uploads/2021/04/Son-Nguyen-founder-and-CEO-of-Dat-Bike-landscape-min.jpg?w=560"
          alt=""
        />
      <div className="card-item-content">
        <h3>Vietnamese electric motorbike startup Dat Bike raises $2.6M led by Jungle Ventures</h3>
        <h4>By Catherine Shu</h4>
        <p>Dat Bike, a Vietnamese startup with ambitions to become the top electric motorbike company in Southeast Asia, has raised $2.6 million in pre-Series A funding led by Jungle Ventures. Made in Vietnam with mostly domestic parts, Dat Bike’s selling point is its a…</p>
        <a
        href="https://techcrunch.com/2021/04/12/vietnamese-electric-motorbike-startup-dat-bike-raises-2-6m-led-by-jungle-ventures/"
          className="card-link"
        >
          Read article
        </a>
      </div>
    </div>
  )
}

export default ArticleList;
