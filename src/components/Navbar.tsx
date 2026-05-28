import { useContext } from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="border-b bg-gray-900 fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left Side */}
        <div className="flex items-center gap-15 text-gray-100">
          <NavLink to="/">
            <img
              src="/Resources/Xiaomi_logo.svg"
              alt="Xiaomi Logo"
              className="w-10"
            />
          </NavLink>

          <NavLink
            to="/products/phones"
            className="text-sm hover:text-orange-500"
          >
            Phones
          </NavLink>

          <NavLink
            to="/products/tablets"
            className="text-sm hover:text-orange-500"
          >
            Tablets
          </NavLink>

          <NavLink
            to="/products/smart-tv-home"
            className="text-sm hover:text-orange-500"
          >
            TV & Smart Home
          </NavLink>

          <NavLink
            to="/products/smart-watch-audio"
            className="text-sm hover:text-orange-500"
          >
            Smart Watch & Audio
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-15 text-gray-100">
          <NavLink
            to="cart"
            className="text-2xl cursor-pointer hover:text-orange-500"
          >
            <div className="relative inline-block">
              <FiShoppingCart />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {cart.length}
              </span>
            </div>
          </NavLink>

          <NavLink
            to="Profile"
            className="text-2xl cursor-pointer hover:text-orange-500"
          >
            <FiUser />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
