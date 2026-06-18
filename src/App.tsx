import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import { CartContext, initialState } from "./context/CartContext";
import { useReducer } from "react";
import { cartReducer } from "./Reducer/cartReducer";
import Cart from "./pages/Cart";

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:item" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CartContext.Provider>
  );
}

export default App;
