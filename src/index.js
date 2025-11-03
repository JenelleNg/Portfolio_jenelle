import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";


function Header() {
  return (
    <header style={{color:"orange", fontSize:48, textTransform:"uppercase"}}>
      <h1>Bananas Wi Pizza Co.</h1>
    </header>
  );
};

function Pizza(pizza) {
  return (
    <div>
      <img src={pizza.image} alt={pizza.name} width="400" />
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      <Pizza
        name="Focaccia"
        ingredients="bread with Italian olive oil and rosemary"
        image="/pizzas/focaccia.jpg"
      />

      <Pizza
        name="Margherita"
        ingredients="tomatoes, mozzarella cheese, basil, and olive oil"
        image="/pizzas/margherita.jpg"
      />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = hour >= 10 && hour < 22;

  return (
    <footer className="footer">
      {open ? "We’re currently open" : "Sorry we’re closed"}
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu/>

      {/* <Pizza
        name="Focaccia"
        ingredients="Bread with Italian olive oil and rosemary"
        image="/pizzas/focaccia.jpg"
      />

      <Pizza
        name="Margherita"
        ingredients="tomatoes, mozzarella cheese, basil, and olive oil"
        image="/pizzas/margherita.jpg"
      />*/}

      <Pizza
        name="Funghi"
        ingredients="tomato, mozzarella, mushrooms, and basil"
        image="/pizzas/funghi.jpg"
      />

      <Pizza
        name="prosciutto"
        ingredients="tomato, mozzarella cheese, prosciutto, arugula and balsamic glaze"
        image="/pizzas/prosciutto.jpg"
      />

      <Pizza
        name="Salamino"
        ingredients="tomato, mozzarella, and pepperoni"
        image="/pizzas/salamino.jpg"
      />

      <Pizza
        name="Spinaci"
        ingredients="spinach, and various cheeses like mozzarella, Parmesan, or ricotta"
        image="/pizzas/spinaci.jpg"
      />

      <Footer/>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);