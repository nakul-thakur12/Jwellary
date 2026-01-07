import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendToWhatsApp = () => {
    if (!name || !phone) {
      alert("Please fill Name and Phone");
      return;
    }
    const text = `Contact Inquiry*%0AName: ${name}%0APhone: ${phone}%0AMessage: ${
      message || "No message"
    }`;
    window.open(`https://wa.me/917869904400?text=${text}`, "_blank");
  };

  return (
    <div className="bg-[#fafafa] dark:bg-gray-900 transition-colors overflow-hidden">

      {/* INTRO */}
      <section className="py-28 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Let’s Talk Jewellery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Visit us, call us, or message us on WhatsApp — we’re always happy to
          help you find the perfect piece.
        </motion.p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 pb-32 grid md:grid-cols-2 gap-16">

        {/* LEFT – STORE INFO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Visit Our Store
          </h2>

          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <p>
              <strong>📞 Phone / WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/917869904400"
                className="text-amber-600 dark:text-amber-400 font-semibold hover:underline"
              >
                78699 04400
              </a>
            </p>

            <p>
              <strong>📍 Address:</strong>
              <br />
              Main Market, Your City,
              <br />
              State – PIN Code
            </p>

            <p>
              <strong>✉️ Email:</strong> info@eternalgold.com
            </p>
          </div>

          {/* MAP */}
          <div className="mt-10 rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
            <iframe
              src="https://www.google.com/maps?q=Indore&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </motion.div>

        {/* RIGHT – FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Send Us a Message
          </h2>

          <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-md border border-gray-200 dark:border-gray-700">
            <input
              type="text"
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 mb-6 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

            <input
              type="tel"
              placeholder="Your Phone *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 mb-6 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 mb-8 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>

            <button
              onClick={sendToWhatsApp}
              className="w-full bg-green-500 text-white py-4 rounded-xl text-xl hover:bg-green-600 transition"
            >
              Send on WhatsApp
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
