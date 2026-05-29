import { useState } from "react";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useCart } from "../hook/useCart";

const Navbar = () => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-gray-900 fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        <NavLink to="/">
          <img
            src="/Resources/Xiaomi_logo.svg"
            alt="Xiaomi Logo"
            className="w-10"
          />
        </NavLink>

        <div className="hidden md:flex items-center gap-8 text-gray-100">
          <NavLink
            to="/products/phones"
            className="text-sm hover:text-orange-500 transition"
          >
            Phones
          </NavLink>

          <NavLink
            to="/products/tablets"
            className="text-sm hover:text-orange-500 transition"
          >
            Tablets
          </NavLink>

          <NavLink
            to="/products/smart-tv-home"
            className="text-sm hover:text-orange-500 transition"
          >
            TV & Smart Home
          </NavLink>

          <NavLink
            to="/products/smart-watch-audio"
            className="text-sm hover:text-orange-500 transition"
          >
            Smart Watch & Audio
          </NavLink>
        </div>

        <div className="flex items-center gap-5 text-gray-100">
          <NavLink
            to="/cart"
            className="text-2xl hover:text-orange-500 transition"
          >
            <div className="relative inline-block flex justify-center align-middle">
              <FiShoppingCart />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {cart.length}
              </span>
            </div>
          </NavLink>

          <NavLink
            to="/profile"
            className="text-2xl hover:text-orange-500 transition"
          >
            <FiUser />
          </NavLink>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-gray-800 text-gray-100 px-4 py-4 flex flex-col gap-4">
          <NavLink
            to="/products/phones"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-500"
          >
            Phones
          </NavLink>

          <NavLink
            to="/products/tablets"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-500"
          >
            Tablets
          </NavLink>

          <NavLink
            to="/products/smart-tv-home"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-500"
          >
            TV & Smart Home
          </NavLink>

          <NavLink
            to="/products/smart-watch-audio"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-500"
          >
            Smart Watch & Audio
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
