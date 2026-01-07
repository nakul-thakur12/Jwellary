import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-bold text-amber-600 dark:text-amber-400"
          >
           B Jewellers
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-amber-600 dark:hover:text-amber-400">
              Home
            </Link>
            <Link to="/about" className="hover:text-amber-600 dark:hover:text-amber-400">
              About
            </Link>
            <Link to="/shop" className="hover:text-amber-600 dark:hover:text-amber-400">
              Shop
            </Link>
            <Link to="/contact" className="hover:text-amber-600 dark:hover:text-amber-400">
              Contact
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block text-lg hover:text-amber-600 dark:hover:text-amber-400"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block text-lg hover:text-amber-600 dark:hover:text-amber-400"
            >
              About
            </Link>
            <Link
              to="/shop"
              onClick={() => setMenuOpen(false)}
              className="block text-lg hover:text-amber-600 dark:hover:text-amber-400"
            >
              Shop
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-lg hover:text-amber-600 dark:hover:text-amber-400"
            >
              Contact
            </Link>

            {/* Mobile Dark Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-3 mt-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? (
                <>
                  <Sun className="text-yellow-400" /> Light Mode
                </>
              ) : (
                <>
                  <Moon /> Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
