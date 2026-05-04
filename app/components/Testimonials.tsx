"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Después de tres ciclos con AgroRaíz mi rendimiento de café subió 22%. La asesoría agronómica vale más que el precio del insumo.",
    name: "Don Eulalio Marroquín",
    farm: "Finca La Esperanza · Huehuetenango",
    initials: "EM",
  },
  {
    quote:
      "El crédito por cosecha me salvó la temporada pasada. Cumplieron lo prometido y el ingeniero pasó cada quince días a revisar el cultivo.",
    name: "Doña Mercedes Tzul",
    farm: "Cooperativa Maíz del Valle · Quiché",
    initials: "MT",
  },
  {
    quote:
      "Probamos el foliar Hass Especial en una hectárea de prueba. El amarre de fruto fue notable, ya lo aplicamos en toda la plantación.",
    name: "Ing. Roberto Contreras",
    farm: "Aguacatera San Isidro · Sololá",
    initials: "RC",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-agro-50 to-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-agro-600 text-sm font-semibold tracking-[0.2em] uppercase"
          >
            — Lo que dicen del campo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl text-agro-950"
          >
            Voces que cosechan
            <span className="italic text-agro-700"> con nosotros.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 rounded-3xl bg-cream border border-agro-200 hover:border-agro-400 hover:shadow-xl transition-all"
            >
              <Quote className="w-10 h-10 text-agro-300 mb-4" />
              <p className="text-agro-900 leading-relaxed font-display text-lg italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-7 pt-6 border-t border-agro-200 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-agro-600 to-agro-800 text-cream font-display text-lg flex items-center justify-center">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-agro-950">{t.name}</div>
                  <div className="text-xs text-agro-700/70">{t.farm}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
