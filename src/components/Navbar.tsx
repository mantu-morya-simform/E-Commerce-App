import { useState } from "react";
import { FiShoppingCart, FiMenu, FiX, FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useCart } from "../hook/useCart";

const navItems = [
  { name: "Phones", path: "/products/phones" },
  { name: "Tablets", path: "/products/tablets" },
  { name: "TV & Smart Home", path: "/products/smart-tv-home" },
  { name: "Watch & Audio", path: "/products/smart-watch-audio" },
];

const Navbar = ({
  searchRef,
}: {
  searchRef: React.RefObject<HTMLInputElement | null>;
}) => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/95 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* logo */}
        <NavLink to="/" className="flex-shrink-0">
          <img
            src="/Resources/Xiaomi_logo.svg"
            alt="Xiaomi"
            className="w-10 hover:scale-105 transition"
          />
        </NavLink>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-200 hover:text-orange-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* right side */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden md:flex items-center bg-gray-800 rounded-full px-3 py-2">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              ref={searchRef}
              className="bg-transparent outline-none text-sm text-white placeholder-gray-400 w-32 lg:w-48"
            />
          </div>

          <NavLink
            to="/cart"
            className="relative text-2xl text-gray-100 hover:text-orange-500 transition"
          >
            <FiShoppingCart />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-orange-500 text-[10px] text-white font-semibold">
                {cart.length}
              </span>
            )}
          </NavLink>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-white"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-gray-900 border-t border-gray-800 px-4 py-5 flex flex-col gap-4">
          <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              id="site-search-mobile"
              data-search="site-search"
              aria-label="Search products"
              className="bg-transparent outline-none text-white w-full"
            />
          </div>

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-200 hover:text-orange-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
