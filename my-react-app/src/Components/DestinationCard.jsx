
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './DestinationCard.css'; 

function DestinationCard({ imageUrl, title, price, description }) {
  return (
    <Card style={{ width: '18rem', minHeight: '26rem' }} className="m-3 shadow-sm">
      <Card.Img
        variant="top"
        src={imageUrl}
        style={{ height: '240px', objectFit: 'cover' }}
        alt={title}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </div>
        <div className="d-flex justify-content-end">
          <Button variant="dark" size="sm">Book Now</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default DestinationCard;
