import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Caarousel.css"; // Import your custom CSS file for styling

function Caarousel({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search query here, e.g., send it to a backend API
    onSearch(searchQuery);
  };

  return (
    <div className="carousel-container">
      <Carousel showThumbs={false} showStatus={false}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1623945359666-8f855090ee81?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVyZ2VyfHx8fHx8MTY5NTA5MjUzMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
            alt="Image 1"
            style={{ height: "1000px" }}
          />
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80"
            alt="Image 2"
            style={{ height: "1000px" }}
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
            alt="Image 3"
            style={{ height: "1000px" }}
          />
        </div>
      </Carousel>
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Caarousel;
