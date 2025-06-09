import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Home from './Pages/Home';
import Payment from './Pages/Payment';
import Book from './Pages/Book';
import PaymentComplete from './Pages/PaymentComplete';

function App() {
  return (
    <Router>
      <NavigationBar /> {/* Sticky navbar on top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentComplete" element={<PaymentComplete />} />
      </Routes>
    </Router>
  );
}

export default App;
