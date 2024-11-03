import products from "./products.json";
import "./App.css";
import Product from "./Components/product";
import Cart from "./Components/cart";

function App() {
  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
