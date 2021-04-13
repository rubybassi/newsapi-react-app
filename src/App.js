import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import ArticleList from "./components/articles/ArticleList";

function App() {
  return (
    <>
      <Header />
      <div className="main-wrapper">
       <ArticleList />
       <ArticleList />
       <ArticleList />
       <ArticleList />
       <ArticleList />
       <ArticleList />
       <ArticleList />
       <ArticleList />
       <ArticleList />
       <ArticleList />
      </div>
    </>
  );
}

export default App;
