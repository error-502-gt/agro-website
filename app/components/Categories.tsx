"use client";

import { motion } from "framer-motion";

const categories = [
  {
    id: "maiz",
    name: "Maíz",
    emoji: "🌽",
    count: "32 productos",
    desc: "Híbridos, fertilizantes y herbicidas para granos básicos.",
  },
  {
    id: "cafe",
    name: "Café",
    emoji: "☕",
    count: "28 productos",
    desc: "Foliares, fungicidas y nutrición especializada.",
  },
  {
    id: "frijol",
    name: "Frijol",
    emoji: "🫘",
    count: "19 productos",
    desc: "Semilla certificada e inoculantes biológicos.",
  },
  {
    id: "hortalizas",
    name: "Hortalizas",
    emoji: "🥬",
    count: "41 productos",
    desc: "Sustratos, bandejas y manejo integrado de plagas.",
  },
  {
    id: "cana",
    name: "Caña de azúcar",
    emoji: "🎋",
    count: "14 productos",
    desc: "Madurantes, urea y nutrición de gran escala.",
  },
  {
    id: "aguacate",
    name: "Aguacate",
    emoji: "🥑",
    count: "22 productos",
    desc: "Foliares premium y manejo fitosanitario del fruto.",
  },
];

export default function Categories() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-cream via-agro-50 to-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-agro-600 text-sm font-semibold tracking-[0.2em] uppercase"
          >
            — Soluciones por cultivo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl text-agro-950"
          >
            Cada siembra tiene
            <span className="italic text-agro-700"> su receta.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-agro-900/70 text-lg"
          >
            Encuentra el insumo correcto según el cultivo que estás trabajando.
            Categorías diseñadas con nuestros agrónomos.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
          {categories.map((c, i) => (
            <motion.a
              key={c.id}
              href="#productos"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative p-5 sm:p-7 lg:p-8 rounded-3xl bg-cream border border-agro-200 hover:border-agro-500 hover:bg-gradient-to-br hover:from-agro-700 hover:to-agro-800 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl"
            >
              <div className="absolute -top-8 -right-8 text-8xl sm:text-9xl opacity-10 group-hover:opacity-25 group-hover:scale-110 transition-all duration-700 select-none">
                {c.emoji}
              </div>
              <div className="relative">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{c.emoji}</div>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-agro-950 group-hover:text-cream transition-colors">
                  {c.name}
                </h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-agro-800/70 group-hover:text-cream/85 transition-colors leading-relaxed">
                  {c.desc}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-agro-600 group-hover:text-agro-200 transition-colors">
                    {c.count}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-agro-100 group-hover:bg-cream flex items-center justify-center text-agro-700 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
