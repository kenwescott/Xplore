import DestinationCard from '../Components/DestinationCard';
import React, { useState } from 'react';
import BackgroundCarousel from '../Components/BackgroundCarrousel';
import SearchForm from '../Components/SearchForm';
import './Home.css';

const destinations = [
  {
    title: 'Paris',
    price: 'From $250',
    description: 'Experience the city of lights and love.',
    imageUrl: '/images/paris.jpg',
  },
  {
    title: 'Tokyo',
    price: 'From $600',
    description: 'Explore the blend of tradition and technology.',
    imageUrl: '/images/tokyo.jpg',
  },
  {
    title: 'Nairobi',
    price: 'From $350',
    description: 'Discover wildlife and vibrant city life.',
    imageUrl: '/images/nairobi.jpg',
  },
  {
    title: 'New York',
    price: 'From $450',
    description: 'The city that never sleeps.',
    imageUrl: '/images/newyork.jpg',
  },
  {
    title: 'Cape Town',
    price: 'From $400',
    description: 'Mountains, beaches, and wine country.',
    imageUrl: '/images/capetown.jpg',
  },
  {
    title: 'Bangkok',
    price: 'From $320',
    description: 'A vibrant city with rich culture.',
    imageUrl: '/images/bangkok.jpg',
  },
];

function Home() {
    const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;

  const handleNext = () => {
    const nextIndex = startIndex + cardsPerPage;
    if (nextIndex < destinations.length) {
      setStartIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = startIndex - cardsPerPage;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };

  const visibleCards = destinations.slice(startIndex, startIndex + cardsPerPage);
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
      <div className="destination-carousel-wrapper">
        <button className="nav-button" onClick={handlePrev} disabled={startIndex === 0}>
          &#8592;
        </button>

        <div className="destination-grid">
          {visibleCards.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>

        <button
          className="nav-button"
          onClick={handleNext}
          disabled={startIndex + cardsPerPage >= destinations.length}
        >
          &#8594;
        </button>
      </div>


    </div>
  );
}

export default Home;

