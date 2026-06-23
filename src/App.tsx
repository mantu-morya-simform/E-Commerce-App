import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import { CartContext, initialState } from "./context/CartContext";
import { useReducer, useRef } from "react";
import { cartReducer } from "./Reducer/cartReducer";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const searchRef = useRef<HTMLInputElement>(null);
  const handleFocusSearch = () => {
    window.scrollTo(0, 0);
    searchRef.current?.focus();
  };

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col">
          <Navbar searchRef={searchRef} />
          <div className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:item" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer handleFocusSearch={handleFocusSearch} />
        </div>
      </ErrorBoundary>
    </CartContext.Provider>
  );
}

export default App;
