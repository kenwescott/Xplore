import './Book.css';
import SearchForm from '../Components/SearchForm';
import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import DestinationCard from '../Components/DestinationCard';

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

const DATA = [
  {
    id: 1,
    title: 'Enjoy studying English',
    tags: [
      {
        id: 'tag1',
        title: 'English',
        slug: 'english',
      },
      {
        id: 'tag2',
        title: 'For kids',
        slug: 'kids',
      },
    ],
  },
  {
    id: 2,
    title: 'Parlons français',
    tags: [
      {
        id: 'tag3',
        title: 'French',
        slug: 'french',
      },
      { id: 'tag2', title: 'Kids', slug: 'kids' },
    ],
  },
  {
    id: 3,
    title: 'Intermediate English',
    tags: [
      {
        id: 'tag1',
        title: 'English',
        slug: 'english',
      },
      {
        id: 'tag4',
        title: 'Adults',
        slug: 'adults',
      },
    ],
  },
  {
    id: 4,
    title: 'How to study French',
    tags: [
      {
        id: 'tag3',
        title: 'French',
        slug: 'french',
      },
      {
        id: 'tag4',
        title: 'Adults',
        slug: 'adults',
      },
    ],
  },
]


function Book() {
    const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 2;

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

  

    const [filterTags, setFilterTags] = useState([])

    //The filtered destination list
  const filteredDestinations = destinations.filter((node) =>
    filterTags.length > 0
      ? filterTags.every((filterTag) =>
          node.tags.map((tag) => tag.slug).includes(filterTag)
        )
      : destinations
  )

  //Sets which tags to filtr by
   const filterHandler = (event) => {
    if (event.target.checked) {
      setFilterTags([...filterTags, event.target.value])
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== event.target.value)
      )
    }
  }

  //Takes parts of the filtered list to show
  const visibleCards = filteredDestinations.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="body">
    {/* Search form*/}
      <div className="search-form-wrapper">
        <SearchForm />
      </div>
      <Container fluid>
        <Row>
            <Col sm={4}>
            <ul>
                <li><label htmlFor="english">
                    <input
                    type="checkbox"
                    onChange={filterHandler}
                    value="english"
                    id="english"
                    />
                    <span>English</span>
                </label></li>
                
                </ul>
            </Col>
            <Col xl={8}>
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
      
            </Col>
        </Row>
      </Container>

      </div>
  )
    }


export default Book;