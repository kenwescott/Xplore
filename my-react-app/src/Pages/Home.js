
import { Container } from 'react-bootstrap';
import BackgroundCarousel from '../Components/BackgroundCarousel'; // adjust path if needed

function Home() {
  return (
    <div>
      <BackgroundCarousel />
      
      <Container className="text-center mt-5" style={{ position: 'relative', zIndex: 3 }}>
        <h1 style={{ color: 'white' }}>Welcome to Xplore</h1>
        <p style={{ color: 'white' }}>Start your journey here.</p>
      </Container>
    </div>
  );
}

export default Home;
