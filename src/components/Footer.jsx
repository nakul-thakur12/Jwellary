import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-4">
            Baijnath Jewellers
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Timeless elegance in every piece.
            <br />
            Crafting memories in gold for generations.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Quick Links
          </h4>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-amber-600 dark:hover:text-amber-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-600 dark:hover:text-amber-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-amber-600 dark:hover:text-amber-400 transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-600 dark:hover:text-amber-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Contact Info
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            Phone / WhatsApp:{" "}
            <a
              href="https://wa.me/917869904400"
              className="font-medium hover:text-amber-600 dark:hover:text-amber-400 transition"
            >
              78699 04400
            </a>
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Email: info@eternalgold.com
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Main Market, Your City
          </p>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Follow Us
          </h4>
          <div className="flex space-x-4">

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="p-3 rounded-full bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              hover:bg-[#1877F2] hover:text-white
              transition"
            >
              <Facebook className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="p-3 rounded-full bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              hover:bg-pink-600 hover:text-white
              transition"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917869904400"
              aria-label="WhatsApp"
              className="p-3 rounded-full bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              hover:bg-green-500 hover:text-white
              transition"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © Baijnath Jewellers. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
