import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = ({ searchQuery, handleUserSearchInput, onSearchSubmit }) => {
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
          value={searchQuery}
          onChange={handleUserSearchInput}
          name="search"
          placeholder="Search the latest news..."
        />
        <button className="nav-search-button" onClick={onSearchSubmit} aria-label="search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </header>
  );
};

export default Header;
