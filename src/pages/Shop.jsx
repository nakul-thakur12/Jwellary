import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    name: "Rings",
    images: [
      "https://cdn11.bigcommerce.com/s-33pnonmh/images/stencil/500x500/attribute_rule_images/307764_source_1648449017.jpg",
      "https://i.etsystatic.com/5966562/r/il/62d022/1254331911/il_570xN.1254331911_c5tb.jpg",
      "https://www.caratlane.com/blog/wp-content/uploads/2024/08/1A-58.jpg?w=600",
      "https://m.media-amazon.com/images/I/51LH04JjpzL._AC_UY500_.jpg",
      "https://m.media-amazon.com/images/I/61XQb61sSdL._AC_UY500_.jpg",
    ],
  },
  {
    name: "Har / Necklace",
    images: [
      "https://dreamjwell.com/cdn/shop/products/DSC_4609.jpg?v=1656500262&width=600",
      "https://www.meenajewelers.com/thumbFull/images/19_Indian_Bridal_necklace_22K_StBr6348.jpg",
      "https://m.media-amazon.com/images/I/71+uQp15tkL._AC_UY500_.jpg",
      "https://i.ebayimg.com/images/g/JCUAAOSw77xhSrcQ/s-l500.png",
      "https://i.ytimg.com/vi/SDjgPSYyxQg/hq720.jpg",
    ],
  },
  {
    name: "Bracelets",
    images: [
      "https://m.media-amazon.com/images/I/71yrkD1uPuL._AC_UY500_.jpg",
      "https://m.media-amazon.com/images/I/717pfXVlKmL._AC_UY500_.jpg",
      "https://mygemma.com/cdn/shop/articles/Copy_of_myGemma_Blog_Featured_Image-19.png?v=1695140989",
      "https://www.fred.com/on/demandware.static/-/Sites-fredInternationalWebsite-Library/default/dwd98b21b6/images/PLP-MOB/BRACELET-M.jpg",
      "https://dejaun.com/cdn/shop/articles/unnamed_26.jpg?v=1729607808",
    ],
  },
  {
    name: "Mangalsutra",
    images: [
      "https://www.caratlane.com/blog/wp-content/uploads/2023/12/1B-35.jpg?w=600",
      "https://i.pinimg.com/736x/86/3c/bb/863cbb8cdee2289a3796f826537a88ba.jpg",
      "https://southindiajewels.com/wp/wp-content/uploads/2017/03/mangalsutra-pendant-designs-in-gold-5.jpg",
      "https://i.ytimg.com/vi/ePTLPQ3rN70/hq720.jpg",
      "https://i.ytimg.com/vi/SDjgPSYyxQg/hq720.jpg",
    ],
  },
  {
    name: "Earrings",
    images: [
      "https://m.media-amazon.com/images/I/61ZO5OEp+WL._AC_UY500_.jpg",
      "https://i.etsystatic.com/16782526/r/il/235dd3/4418795329/il_570xN.4418795329_n7r2.jpg",
      "https://m.media-amazon.com/images/I/71I-BFGZHVL._AC_UY500_.jpg",
      "https://www.caratlane.com/blog/wp-content/uploads/2025/04/small-gold-earrings-for-women.jpg",
      "https://m.media-amazon.com/images/I/618hJUCvsBL._AC_UY500_.jpg",
    ],
  },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="py-20 bg-[#fafafa] dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Our Jewellery Collection
        </motion.h1>

        {/* CATEGORY TABS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-14">
          {categories.map((cat) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={cat.name}
              onClick={() => setSelectedCategory(cat)}
              className={`py-4 px-6 rounded-xl font-semibold transition
                ${
                  selectedCategory.name === cat.name
                    ? "bg-amber-600 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        {/* CATEGORY TITLE */}
        <motion.h2
          key={selectedCategory.name}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-gray-900 dark:text-white"
        >
          {selectedCategory.name}
        </motion.h2>

        {/* PRODUCTS GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10"
          >
            {selectedCategory.images.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={img}
                  loading="lazy"
                  alt={`${selectedCategory.name} ${i + 1}`}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {selectedCategory.name} Design {i + 1}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Price as per current gold rate
                  </p>
                  <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition">
                    Inquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
