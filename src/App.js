import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ArticleList from "./components/articles/ArticleList";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [inputErrorMessage, setInputErrorMessage] = useState("");

  const URL = `https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=popularity`;

  // set newsapi key in http header as recommended
  const fetchParams = {
    headers: {
      Authorization: "3e8fcdeadac74b35b8e9ef95298042b7",
    },
  };

  // asynchronous fetcher and setter; checks if payload response is correct type and not empty before setting state
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(URL, fetchParams);
      const payload = await response.json();
      if (payload && Array.isArray(payload.articles)) {
        setArticles(payload.articles.splice(0, 10)); // stores first 10 news articles
        setIsLoading(false);
        setSearchQuery("");
      } else throw new Error("payload is empty or not an array"); // logs custom error object if payload is empty or !array
    } catch (error) {
      console.log(error.message);
      setErrorMessage("Sorry there has been an error fetching your articles.");
      setIsLoading(false);
    }
  };

  // gets and sets user search value
  const handleUserSearchInput = (e) => setSearchQuery(e.target.value.toLowerCase());

  // calls fetchdata api on button click if searchQuery is not empty
  const onSearchSubmit = (e) => {
    e.preventDefault();
    setInputErrorMessage("");
    if (searchQuery === "") {
      setInputErrorMessage("Please type in your article search criteria");
    } else {
      fetchData();
    }
  };

  return (
    <>
      <Header
        searchQuery={searchQuery}
        handleUserSearchInput={handleUserSearchInput}
        onSearchSubmit={onSearchSubmit}
        />
        {inputErrorMessage && <p className="input-error">{inputErrorMessage}</p>}
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
