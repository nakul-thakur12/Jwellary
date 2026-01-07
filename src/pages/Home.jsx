import { Link } from "react-router-dom";
import { useState } from "react";
import { Star } from "lucide-react";
 import { motion } from "framer-motion";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
 

  const sendToWhatsApp = () => {
    if (!name || !phone) {
      alert("Please fill Name and Phone");
      return;
    }
    const text = `Inquiry*%0AName: ${name}%0APhone: ${phone}%0AMessage: ${
      message || "No message"
    }`;
    window.open(`https://wa.me/917869904400?text=${text}`, "_blank");
  };

  const featuredItems = [
    {
      img: "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?w=500&auto=compress&cs=tinysrgb",
      title: "Gold Necklace",
      desc: "Elegant handcrafted gold necklace for special occasions.",
    },
    {
      img: "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?w=500&auto=compress&cs=tinysrgb",
      title: "Diamond Ring",
      desc: "Premium ring with modern design & perfect finish.",
    },
    {
      img: "https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?w=500&auto=compress&cs=tinysrgb",
      title: "Bridal Set",
      desc: "Heavy bridal jewellery crafted for weddings.",
    },
    {
      img: "https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?w=500&auto=compress&cs=tinysrgb",
      title: "Gold Bangles",
      desc: "Traditional bangles with timeless appeal.",
    },
    {
      img: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?w=500&auto=compress&cs=tinysrgb",
      title: "Earrings",
      desc: "Lightweight earrings for daily & festive wear.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKM7a11rQShdtH4TPGMRq26ZNlSt8KbKuJ4Q&s",
      title: "Mangalsutra",
      desc: "Classic mangalsutra with modern elegance.",
    },
  ];

  const testimonials = [
    { name: "Priya Sharma", review: "Beautiful designs & pure gold." },
    { name: "Rajesh Kumar", review: "Very trusted jewellery shop." },
    { name: "Anjali Patel", review: "Loved my mangalsutra ❤️" },
    { name: "Vikram Singh", review: "Great quality & fair pricing." },
    { name: "Neha Gupta", review: "Perfect bridal collection!" },
    { name: "Amit Desai", review: "Excellent service & staff." },
  ];

  return (
    <div className="bg-[#fafafa] dark:bg-gray-900 transition-colors">

      {/* HERO */}
   
<section
  className="relative h-screen flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage:
      "url(https://penbodisplay.com/wp-content/uploads/2025/04/luxury-jewellery-store-display-cabinet.jpeg)",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/65"></div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative text-center text-white px-6 max-w-5xl"
  >
    {/* Since badge */}
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="inline-block mb-6 px-6 py-2 border border-amber-400 text-amber-300 tracking-widest uppercase text-sm rounded-full"
    >
      Since 1971
    </motion.p>

    {/* Brand name */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.9 }}
      className="text-5xl md:text-7xl font-bold mb-6"
    >
      Baijnath Jewellers
    </motion.h1>

    {/* Tagline */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.9 }}
      className="text-xl md:text-2xl mb-12 text-gray-200"
    >
      Celebrating purity, craftsmanship & timeless elegance for generations
    </motion.p>

    {/* CTA */}
    {/* <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <Link
        to="/shop"
        className="bg-amber-600 px-12 py-4 rounded-lg text-xl md:text-2xl hover:bg-amber-700 transition shadow-lg"
      >
        Explore Collection
      </Link>
    </motion.div> */}
  </motion.div>
</section>


      {/* FEATURED COLLECTION */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-14 dark:text-white">
          Featured Collection
        </h2>

        <div className="flex gap-8 animate-scroll-left w-max px-10">
          {[...featuredItems, ...featuredItems].map((item, i) => (
            <div
              key={i}
              className="min-w-[260px] bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-52 object-cover"
              />

              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block bg-amber-600 text-white px-10 py-4 rounded-lg text-xl hover:bg-amber-700"
          >
            Explore More →
          </Link>
        </div>
      </section>
{/* WEAR JEWELLERY BY OCCASION */}
<section className="py-24 bg-white dark:bg-gray-800">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="max-w-7xl mx-auto px-6"
  >
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Jewellery for Every Occasion
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        A perfect companion for your most special moments
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        {
          title: "Wedding",
          img: "https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg",
        },
        {
          title: "Festive",
          img: "https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg",
        },
        {
          title: "Daily Wear",
          img: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg",
        },
        {
          title: "Gifting",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEypz_A2_CNUkVkWyrlC3gfjWHylbGIuWCwA&s",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10 }}
          className="group relative rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            src={`${item.img}?w=600&auto=compress`}
            alt={item.title}
            className="h-[320px] w-full object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <h3 className="w-full text-center text-white text-2xl font-semibold py-6">
              {item.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>
{/* NEW ARRIVALS */}
<section className="py-16 bg-[#f7f7f7] dark:bg-gray-900">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="max-w-7xl mx-auto px-6"
  >
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        New Arrivals
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Discover our latest jewellery designs
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {featuredItems.slice(0, 4).map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
        >
          <img
            src={item.img}
            alt={item.title}
            className="h-[280px] w-full object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="font-semibold text-lg dark:text-white">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="text-center mt-14">
      <Link
        to="/shop"
        className="inline-block bg-amber-600 text-white px-12 py-4 rounded-lg text-xl hover:bg-amber-700 transition"
      >
        View All New Arrivals →
      </Link>
    </div>
  </motion.div>
</section>

{/* JEWELLERY EXPERT INQUIRY */}
<section className=" bg-[#f7f7f7] dark:bg-slate-900">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="max-w-5xl mx-auto px-6"
  >
    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        Talk to Our Jewellery Expert
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Need help choosing the perfect piece? We’re just a message away.
      </p>
    </div>

    {/* Card */}
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-10 md:p-14">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Name */}
        <input
          className="w-full p-5 rounded-xl border border-gray-300 dark:border-gray-600
          bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white
          focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Your Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Phone */}
        <input
          className="w-full p-5 rounded-xl border border-gray-300 dark:border-gray-600
          bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white
          focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Phone Number *"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* Message */}
        <textarea
          rows="4"
          className="md:col-span-2 w-full p-5 rounded-xl border border-gray-300 dark:border-gray-600
          bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white
          focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Tell us what you’re looking for (optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* CTA */}
        <div className="md:col-span-2 text-center mt-4">
          <button
            onClick={sendToWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white
            px-14 py-4 rounded-xl text-xl font-semibold transition shadow-lg"
          >
            Chat on WhatsApp
          </button>

          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Our jewellery expert will personally assist you
          </p>
        </div>
      </div>
    </div>
  </motion.div>
</section>


      {/* TESTIMONIALS */}
      <section className="py-5 bg-gray-100 dark:bg-gray-900 overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-14 dark:text-white">
          Customer Reviews
        </h2>

        <div className="flex gap-8 animate-scroll-left w-max px-10">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="min-w-[280px] bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 text-center"
            >
              <img
                src={`https://i.pravatar.cc/80?img=${i + 10}`}
                loading="lazy"
                alt={t.name}
                className="w-14 h-14 rounded-full mx-auto mb-4"
              />

              <h4 className="font-semibold text-base dark:text-white">
                {t.name}
              </h4>

              <div className="flex justify-center my-2">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t.review}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
