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
          <img src="https://source.unsplash.com/random/300x300/?burger" alt="Image 1" style={{  height: '1000px' }}  />
        </div>
        <div>
          <img src="https://source.unsplash.com/random/300x300/?paneer" alt="Image 2"style={{  height: '1000px' }} />
        </div>
        <div>
          <img src="https://source.unsplash.com/random/300x300/?biryani" alt="Image 3" style={{  height: '1000px' }}/>
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
