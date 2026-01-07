import React from "react";
import { motion } from "framer-motion";

export const Blog = () => {
 const posts = [
    { title: "Schengen Visa 2026: Latest Requirements", intro: "Europe travel ke naye rules aur documents.", img: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "UK Visa Refusal: Common Mistakes", intro: "Bhopal applicants ke top refusal reasons.", img: "https://images.unsplash.com/photo-1598710868982-98556cbc2631?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVrJTIwdHJhdmVsfGVufDB8fDB8fHww"},
    { title: "ODMV Biometric Process Explained", intro: "Step-by-step guide for France & UK biometrics.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Visa Guides & Updates</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">Latest rules, tips aur practical guides</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800"
            >
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-8">
                <p className="text-sm text-slate-500 mb-2">{post.date}</p>
                <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">{post.intro}</p>
                <span className="text-blue-600 font-semibold cursor-pointer">Read More →</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};