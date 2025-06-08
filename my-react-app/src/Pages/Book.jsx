import { useParams, useLocation } from 'react-router-dom';

function Book() {
  const { destination } = useParams();
  const location = useLocation();
  const { title, price, description, imageUrl } = location.state || {};

  return (
    <div className="container py-5">
      <h1 className="mb-3">Book your trip to {title || destination}</h1>
      {imageUrl && (
        <img src={imageUrl} alt={title} style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem' }} />
      )}
      <p><strong>Price:</strong> {price}</p>
      <p>{description}</p>
      {/* Add a booking form here if needed */}
    </div>
  );
}

export default Book;
