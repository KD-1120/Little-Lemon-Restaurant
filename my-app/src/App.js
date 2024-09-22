import './App.css';
import NavigationBar from './components/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Home from './pages/home';
import Reservations from './pages/reservations';
import OrderPage from './pages/order';

function App() {
  return (
    <Router>
      <NavigationBar />
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations/>} />
        <Route path="/order" element={<OrderPage/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
