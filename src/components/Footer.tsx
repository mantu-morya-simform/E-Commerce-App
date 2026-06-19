import { CiGlobe } from "react-icons/ci";
import {} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Footer = ({ handleFocusSearch }: { handleFocusSearch: () => void }) => {
  return (
    <footer className="border-b bg-gray-900 align-baseline">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 ">
        {/* left Side */}
        <div className="flex items-center gap-5 text-gray-100">
          <NavLink to="/">
            <img
              src="/Resources/Xiaomi_logo.svg"
              alt="Xiaomi Logo"
              className="w-6 md:w-9"
            />
          </NavLink>
          <p className="text-[12px] md:text-md cursor-pointer hover:text-orange-500">
            Copyright © Xiaomi. All Rights Reserved
          </p>
        </div>

        {/* right Side */}
        <div className="hidden md:flex items-center gap-5 text-gray-100">
          <button
            onClick={handleFocusSearch}
            className="text-md cursor-pointer hover:text-orange-500"
            aria-label="Focus on search"
          >
            Focus on search
          </button>

          <p className="text-md cursor-pointer hover:text-orange-500">
            India / English
          </p>
          <CiGlobe
            size={25}
            className=" hover:text-orange-500 hover:cursor-pointer"
          />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
