/*import React from 'react';
import BackgroundCarousel from '../Components/BackgroundCarrousel';
import SearchForm from '../Components/SearchForm';

import './Home.css';

function Home() {
  return (
    <div className="body">
      {/* Carousel with overlay text and search form *//*}
      <div className="carousel-container">
        <BackgroundCarousel />

        <div className="carousel-overlay-text">
          <h2>Your journey starts here.<br />Book your flight.</h2>
        </div>
       </div>
        <div className="search-form-wrapper">
          <SearchForm />
        </div>
      

      {/* Section heading *//*}
      <div className="section-heading">
        DISCOVER OUR POPULAR DESTINATIONS
      </div>
    </div>
  );
}

export default Home;*/
import React from 'react';
import BackgroundCarousel from '../Components/BackgroundCarrousel';
import SearchForm from '../Components/SearchForm';
import './Home.css';

function Home() {
  return (
    <div className="body">
      {/* Carousel and overlay text */}
      <div className="carousel-container">
        <BackgroundCarousel />

        <div className="carousel-overlay-text">
          <h2>Your journey starts here.<br />Book your flight.</h2>
        </div>
      </div>

      {/* Search form (NOT inside carousel) */}
      <div className="search-form-wrapper">
        <SearchForm />
      </div>

      {/* Section heading */}
      <div className="section-heading">
        DISCOVER OUR POPULAR DESTINATIONS
      </div>
    </div>
  );
}

export default Home;

