import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data.js";

function Header() {
  return (
    <header style={{ color: "orange", fontSize: 48, textTransform: "uppercase" }}>
      <h1>Bananas Wi Pizza Co.</h1>
    </header>
  );
}

function Pizza({ name, ingredients, image, price, soldOut }) {
  const [favourite, setFavourite] = React.useState(false);

  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <div className="pizza-bottom"></div>
      <span className='board'>{soldOut ? "SOLD OUT" : `$${price}`}</span>

      <button 
        className={`btn-fav ${favourite ? 'active' : ''}`} 
        onClick={() => setFavourite(!favourite)}>
        {favourite ? "💖" : "♡"} Favourite
      </button>
    </li>
  );
}

function Menu(isOpen) {
  const [search, setSearch] = React.useState('');

  const filteredPizzas = pizzaData.filter(pizza =>
    pizza.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {isOpen && <p style={{ fontSize: 24 }}>Authentic Italian Cuisine</p>}
      <input
         type="text"
         placeholder="Search pizza..."
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         style={{ padding: '0.8rem', fontSize: '1.4rem', marginBottom: '2rem' }}
       />
        {filteredPizzas.map((pizza) => (
          <Pizza 
             key={pizza.name} 
             name={pizza.name}
             ingredients={pizza.ingredients}
             image={pizza.photoName}
             price={pizza.price}
             soldOut={pizza.soldOut} />
        ))}
    </div>
  );
}

function Footer({ isOpen }) {
  return (
    <footer style={{ marginTop: 20 }}>
      {isOpen ? (
        <div className="footer">
          <p>We're currently open</p><br></br>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>Sorry, we're closed</p>
      )}
    </footer>
  );
}

function App() {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour < 22;

  return (
    <div className="container">
      <Header isOpen={isOpen} />
      <Menu />
      <Footer isOpen={isOpen} />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);