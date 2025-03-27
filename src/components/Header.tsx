import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { X, Menu } from "lucide-react"; // Icons for mobile menu

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    document.body.classList.toggle("overflow-hidden", !isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 to-black p-4 italic text-sky-500 shadow-md">
      <nav className="container mx-auto flex justify-between px-6 lg:px-20">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          Fashion<span className="italic text-white">Shop</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          <Menu />
        </button>

        {/* Desktop Menu (Hidden on mobile) */}

        <ul className="hidden space-x-8 text-lg font-medium lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1 text-white"
                  : "transition-all duration-200 hover:text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1 text-white"
                  : "transition-all duration-200 hover:text-white"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1 text-white"
                  : "transition-all duration-200 hover:text-white"
              }
            >
              Product
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1 text-white"
                  : "transition-all duration-200 hover:text-white"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu (Hidden by default) */}
        <div
          className={`fixed inset-0 z-50 transform bg-transparent bg-opacity-80 backdrop-blur-sm transition-transform duration-300 ease-in-out lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full w-2/3 flex-col bg-sky-500 p-6 text-white shadow-xl">
            {/* Close Button */}
            <button className="mb-6 self-end text-3xl" onClick={toggleMenu}>
              <X />
            </button>

            {/* Mobile Menu List */}
            <ul className="flex flex-col space-y-6 text-xl font-semibold">
              {["Home", "About", "Product", "Contact"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    onClick={toggleMenu} // Close menu on link click
                    className={({ isActive }) =>
                      isActive
                        ? "border-l-4 border-white pl-3 text-white"
                        : "transition-all duration-200 hover:text-white"
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
