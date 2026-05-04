"use client";

import { motion } from "framer-motion";
import { Award, Users, Package, MapPin } from "lucide-react";

const stats = [
  { icon: Award, value: "+25", label: "años cultivando confianza" },
  { icon: Users, value: "+5,200", label: "agricultores en nuestra red" },
  { icon: Package, value: "+120", label: "productos certificados" },
  { icon: MapPin, value: "14", label: "sucursales en el país" },
];

export default function About() {
  return (
    <section id="nosotros" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-agro-600 text-sm font-semibold tracking-[0.2em] uppercase"
            >
              — Nosotros
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl text-agro-950 leading-tight"
            >
              Sembrar bien empieza con
              <span className="italic text-agro-700"> los aliados correctos.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-agro-900/75 text-lg leading-relaxed"
            >
              En AgroRaíz acompañamos al productor desde la preparación del suelo
              hasta la postcosecha. Trabajamos con marcas líderes y agrónomos
              certificados para que cada quetzal invertido se traduzca en kilos
              cosechados.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contacto"
                className="px-6 py-3 rounded-full bg-agro-700 text-cream font-semibold hover:bg-agro-800 transition shadow-md"
              >
                Conocer más
              </a>
              <a
                href="#servicios"
                className="px-6 py-3 rounded-full border-2 border-agro-700 text-agro-900 font-semibold hover:bg-agro-50 transition"
              >
                Nuestros servicios
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-7 lg:p-8 rounded-3xl bg-gradient-to-br from-agro-50 to-cream border border-agro-200 hover:border-agro-400 hover:-translate-y-1 transition group shadow-sm hover:shadow-xl"
              >
                <s.icon className="w-9 h-9 text-agro-600 mb-5 group-hover:scale-110 transition" />
                <div className="font-display text-4xl lg:text-5xl text-agro-900">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-agro-800/70 font-medium leading-snug">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
