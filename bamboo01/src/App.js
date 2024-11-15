import './App.css';
import { View } from 'react-native'
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
      <Header style={styles.header}/>
      <main className="App-main">
        <div style={styles.main}/>
        <View style={styles.divider}/>
        <h1>Calientes</h1>
        <View style={styles.divider}/>
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
  main: {
    height: '70px',
    width: '100%'
  },
  cardList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  divider: {
    borderBottomColor: 'rgba(0, 0, 0, .5)',
    borderBottomWidth: '5px',
    width:'80%',
    borderStyle: 'dashed'
  }
};

export default App;
