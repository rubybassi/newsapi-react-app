import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="nav">
      <img
        className="nav-logo"
        src="https://img01.bt.co.uk/s/assets/191120/images/logo/logo-2018.svg"
        alt="bt logo"
      />
      <form className="nav-search">
        <input
          className="nav-search-input"
          type="text"
          name="search"
          placeholder="Search latest news.."
        />
        <button className="nav-search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </header>
  );
};

export default Header;
