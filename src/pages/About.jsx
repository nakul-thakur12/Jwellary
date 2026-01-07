import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors overflow-hidden">

      {/* INTRO */}
      <section className="py-16 sm:py-20 text-center px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2
          border border-amber-400 text-amber-600 dark:text-amber-400
          tracking-widest uppercase text-xs sm:text-sm rounded-full"
        >
          Since 1971
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
        >
          Baijnath Jewellers
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl font-medium">
            More Than Jewellery. It’s a Legacy.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl
          max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
        >
          For over five decades, Baijnath Jewellers has been part of
          India’s most precious moments — weddings, festivals,
          celebrations, and family milestones.
        </motion.p>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
            A Journey That Began With Trust
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
            Founded in <strong>1971</strong>, Baijnath Jewellers began as a
            humble family establishment with one simple belief —
            jewellery is not just gold, it is trust.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
            What started as a small workshop soon became a name families
            relied upon for purity, honesty, and timeless craftsmanship.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Today, under the guidance of <strong>Mayur Soni</strong>,
            Baijnath Jewellers continues this legacy — blending traditional
            artistry with modern designs.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src="https://penbodisplay.com/wp-content/uploads/2025/04/luxury-jewellery-store-display-cabinet.jpeg"
          alt="Baijnath Jewellers Store"
          className="rounded-2xl sm:rounded-3xl shadow-2xl h-72 sm:h-80 md:h-96 w-full object-cover"
        />
      </section>

      {/* COLLECTION */}
      <section className="bg-amber-50 dark:bg-gray-800 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 text-gray-900 dark:text-white">
            Crafted For Every Generation
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-12 sm:mb-16">
            From everyday elegance to grand bridal collections,
            Baijnath Jewellers designs jewellery that complements
            every age and occasion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {[
              "https://cdn.galeriemagazine.com/wp-content/uploads/2025/04/chanel_3-copy.jpg",
              "https://thumbs.dreamstime.com/b/elegant-modern-luxury-jewelry-store-interior-featuring-polished-wood-cabinetry-sleek-display-cases-soft-lighting-illuminating-375775786.jpg",
              "https://penbodisplay.com/wp-content/uploads/2025/04/luxury-jewellery-store-display-cabinet.jpeg",
            ].map((img, i) => (
              <motion.img
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                src={img}
                alt="Jewellery Collection"
                className="rounded-xl sm:rounded-2xl shadow-2xl h-64 sm:h-72 md:h-80 w-full object-cover"
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROMISE */}
      <section className="py-12 sm:py-16 text-center px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-bold text-gray-900 dark:text-white mb-6 sm:mb-8"
        >
          Our Promise Since 1971
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl
          max-w-2xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          100% BIS Hallmarked Gold.
          <br />
          Honest pricing & transparent processes.
          <br />
          Jewellery that becomes part of your family’s legacy.
        </motion.p>
      </section>
    </div>
  );
}
