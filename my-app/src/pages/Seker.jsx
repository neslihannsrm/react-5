import React, { useState, useEffect } from "react";
import Axios from "axios";

import searchIcon from "../assets/search.svg";
import clockIcon from "../assets/clock.svg";

function Seker() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchBooks = async () => {
    try {
      const res = await Axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}`
      );
      setData(res.data.items || []);
      setFilterData(res.data.items?.slice(0, 4) || []);
    } catch (error) {
      console.error("Error while fetching data", error);
    }
  };

  const handleSearch = () => {
    fetchBooks();
  };

  const handleBookClick = (book) => {
    setSelectedBook(book.volumeInfo);
  };

  return (
    <main>
      <div className="search-container">
        <div>
          <img className="search-icon" src={searchIcon} alt="Search Icon" />
        </div>
        <label htmlFor="search"></label>
        <input
          className="search-field"
          type="search"
          id="search-field"
          placeholder="Search for books.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn" id="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="option-container">
        {filterData.map((item, index) => (
          <ul className="options-ul" key={index}>
            <li className="options-li" onClick={() => handleBookClick(item)}>
              <a className="options-text">
                <img className="clock-icon" src={clockIcon} alt="Clock Icon" />
                {item.volumeInfo.title}
              </a>
            </li>
          </ul>
        ))}
      </div>
      <div className="img-container">
        {selectedBook && (
          <div>
            <h2>{selectedBook.title}</h2>
            <img
              src={
                selectedBook.imageLinks?.thumbnail ||
                "https://via.placeholder.com/150"
              }
              alt={selectedBook.title}
            />
            <p>{selectedBook.description}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Seker;
