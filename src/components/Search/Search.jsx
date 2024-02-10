import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

const Search = ({ setWeatherDetails }) => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setWeatherDetails(null);
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {

      const isValidInput = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(search.trim());

    if (!isValidInput) {
      alert("Please enter a valid city name");
      return;
    }

      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: { q: search },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setWeatherDetails(response.data);
        })
        .catch(function (error) {
          alert("Please enter a valid city name");
        });
    }
  };

  return (
    <div className="search-section">
      <div className="search-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search for a city"
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Search;
