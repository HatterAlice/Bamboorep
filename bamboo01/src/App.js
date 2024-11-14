import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

const cardData = [
  { id: 1, title: "Café", description: "Cafe americano clásico", image: "http://localhost:8080/cafe.jpg"},
  { id: 2, title: "Latte", description: "Cafe latte", image: "http://localhost:8080/latte.jpg"},
  { id: 3, title: "Bubble Tea", description: "Té verde con tapioca", image: "http://localhost:8080/bubble_tea.jpg"}
];



function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
       <h1>Card List </h1>
       <div className='card-list' style={styles.cardList}>
       {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
        {/*Cards con botones para agregar o quitar del carrito, interactivo*/}
        {/* Afecta al icono de carrito de compras */}
       </div>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  cardList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default App;
