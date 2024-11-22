import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import Home from './pages/Home';
import Cart from './pages/Cart';
import ApiPrueba from './pages/ApiPrueba';

const cardData = [
  { id: 1, title: "Café", description: "Cafe americano clásico", image: "http://localhost:8080/cafe.jpg" },
  { id: 2, title: "Latte", description: "Cafe latte", image: "http://localhost:8080/latte.jpg" },
  { id: 3, title: "Bubble Tea", description: "Té verde con tapioca", image: "http://localhost:8080/bubble_tea.jpg" }
];

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="App-main">
            <Routes>
              <Route path="/" element={<Home cardData={cardData} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/apiprueba' element={<ApiPrueba />}/>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
