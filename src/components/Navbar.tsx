import { FiShoppingCart, FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left Side */}
        <div className="flex items-center gap-6">
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
        <div className="flex items-center gap-10">
          <NavLink
            to="cart"
            className="text-2xl cursor-pointer hover:text-orange-500"
          >
            <FiShoppingCart />
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
