import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ArticleList from "./components/articles/ArticleList";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const URL = "https://newsapi.org/v2/everything?q=shoes&sortBy=popularity";

  const fetchParams = {
    headers: {
      Authorization: "3e8fcdeadac74b35b8e9ef95298042b7",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(URL, fetchParams);
        const payload = await response.json();
        if (payload && Array.isArray(payload.articles)) {
          setArticles(payload.articles.splice(0, 10) || []);
          setIsLoading(false);
        } else throw new Error("payload is empty or not an array");
      } catch (error) {
        console.log(error.message);
        setErrorMessage(
          "Sorry there has been an error fetching your articles."
        );
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main className="main-wrapper">
        {isLoading ? (
          <h1>Fecthing articles...</h1>
        ) : (
          <>
            {errorMessage && <h1>{errorMessage}</h1>}
            {articles.length > 0
              ? articles.map((article, index) => (
                  <ArticleList
                    key={index}
                    title={article.title}
                    author={article.author}
                    description={article.description}
                    url={article.url}
                    imageUrl={article?.urlToImage}
                  />
                ))
              : null}
          </>
        )}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
