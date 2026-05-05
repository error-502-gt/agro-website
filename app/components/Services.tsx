"use client";

import { motion } from "framer-motion";
import {
  Microscope,
  Truck,
  GraduationCap,
  HandCoins,
  Sprout,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    icon: Microscope,
    title: "Análisis de suelos",
    desc: "Diagnóstico químico y físico para construir tu plan de nutrición a la medida.",
    tag: "Laboratorio",
  },
  {
    icon: Sprout,
    title: "Asesoría agronómica",
    desc: "Visita a finca, plan de manejo y monitoreo de plagas con ingenieros certificados.",
    tag: "En finca",
  },
  {
    icon: Truck,
    title: "Entrega a finca",
    desc: "Logística propia con cobertura nacional, sin costo en pedidos desde Q1,500.",
    tag: "Logística",
  },
  {
    icon: GraduationCap,
    title: "Capacitación técnica",
    desc: "Talleres mensuales gratuitos en cada sucursal con expertos del rubro.",
    tag: "Educación",
  },
  {
    icon: HandCoins,
    title: "Crédito agrícola",
    desc: "Financiamiento por cosecha con tasas preferenciales para socios del programa.",
    tag: "Financiamiento",
  },
  {
    icon: HeartHandshake,
    title: "Programa Raíces",
    desc: "Beneficios y descuentos exclusivos para nuestros productores fieles.",
    tag: "Fidelidad",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-16 md:py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-10 mb-10 md:mb-16">
          <div className="lg:col-span-2">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-agro-600 text-sm font-semibold tracking-[0.2em] uppercase"
            >
              — Más que una venta
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl text-agro-950"
            >
              Servicios pensados para
              <span className="italic text-agro-700"> el productor.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-agro-900/70 text-lg lg:pt-12"
          >
            No solo vendemos insumos: te acompañamos en cada etapa del cultivo,
            desde el análisis del suelo hasta la cosecha.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-agro-50 to-cream border border-agro-200 hover:border-agro-700 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-5 sm:mb-6 gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-agro-700 group-hover:bg-agro-800 flex items-center justify-center text-cream transition flex-shrink-0">
                  <s.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-agro-600 bg-agro-100 px-3 py-1 rounded-full">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-display text-2xl text-agro-950 mb-3">
                {s.title}
              </h3>
              <p className="text-agro-900/70 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
