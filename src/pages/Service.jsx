import React from "react";
import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    { title: "Tourist Visa", desc: "Family holidays aur tourism ke liye complete documentation support.", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "Business Visa", desc: "Meetings aur conferences ke liye invitation & financial guidance.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "Student Visa", desc: "SOP, university shortlisting aur visa file preparation.", img: "https://plus.unsplash.com/premium_photo-1661412968858-94c2675c3370?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Schengen Visa", desc: "Europe multi-country trips with ODMV biometric support.", img: "https://plus.unsplash.com/premium_photo-1723478557824-5d9b58da31af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" },
    { title: "UK Visa", desc: "Visitor & family visit visas with biometric assistance.", img: "https://plus.unsplash.com/premium_photo-1694475331421-40cf7f468690?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VUslMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" },
    { title: "Other Countries", desc: "Canada, USA, Australia etc. (on request).", img: "https://images.unsplash.com/photo-1737971661846-55518e6e1355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fENvdW50cmllcyUyMGltYWdlfGVufDB8fDB8fHww" },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Visa Services</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">Har type ke visa ke liye expert guidance aur complete support</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <img src={service.img} alt={service.title} className="w-full h-56 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};