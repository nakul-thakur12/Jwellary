import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors overflow-hidden">

      {/* INTRO */}
      <section className="py-20 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-6 py-2 border border-amber-400
          text-amber-600 dark:text-amber-400 tracking-widest uppercase text-sm rounded-full"
        >
          Since 1971
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Baijnath Jewellers
          <br /> More Than Jewellery. It’s a Legacy.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
        >
          For over five decades, Baijnath Jewellers has been part of
          India’s most precious moments — weddings, festivals,
          celebrations, and family milestones.
        </motion.p>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            A Journey That Began With Trust
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            Founded in <strong>1971</strong>,
            Baijnath Jewellers began as a humble family establishment with
            one simple belief — jewellery is not just gold, it is trust.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            What started as a small workshop soon became a name families
            relied upon for purity, honesty, and timeless craftsmanship.
            Every piece was crafted with care, transparency, and pride.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Today, under the guidance of <strong>Mayur Soni</strong>,
            Baijnath Jewellers continues this legacy — blending traditional
            artistry with modern designs, while staying true to the values
            it was built on.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src="https://penbodisplay.com/wp-content/uploads/2025/04/luxury-jewellery-store-display-cabinet.jpeg"
          alt="Baijnath Jewellers Store"
          className="rounded-3xl shadow-2xl h-96 w-full object-cover"
        />
      </section>

      {/* COLLECTION PHILOSOPHY */}
      <section className="bg-amber-50 dark:bg-gray-800 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
            Crafted For Every Generation
          </h2>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-16">
            From everyday elegance to grand bridal collections,
            Baijnath Jewellers designs jewellery that complements
            every age, every occasion, and every story.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              "https://cdn.galeriemagazine.com/wp-content/uploads/2025/04/chanel_3-copy.jpg",
              "https://thumbs.dreamstime.com/b/elegant-modern-luxury-jewelry-store-interior-featuring-polished-wood-cabinetry-sleek-display-cases-soft-lighting-illuminating-375775786.jpg",
              "https://penbodisplay.com/wp-content/uploads/2025/04/luxury-jewellery-store-display-cabinet.jpeg",
            ].map((img, i) => (
              <motion.img
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                src={img}
                alt="Jewellery Collection"
                className="rounded-2xl shadow-2xl h-80 w-full object-cover"
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROMISE */}
      <section className="py-12 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Our Promise Since 1971
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300"
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
