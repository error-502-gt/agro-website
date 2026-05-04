"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, cropEmoji, type Crop } from "../data/products";
import { ShoppingBag, Sparkles } from "lucide-react";

const tabs: { id: Crop | "all"; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "maiz", label: "Maíz" },
  { id: "cafe", label: "Café" },
  { id: "frijol", label: "Frijol" },
  { id: "hortalizas", label: "Hortalizas" },
  { id: "cana", label: "Caña" },
  { id: "aguacate", label: "Aguacate" },
];

export default function Products() {
  const [active, setActive] = useState<Crop | "all">("all");
  const filtered =
    active === "all" ? products : products.filter((p) => p.crop === active);

  return (
    <section
      id="productos"
      className="relative py-24 lg:py-32 bg-agro-950 text-cream overflow-hidden"
    >
      {/* decorative background blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-agro-500 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-earth-500 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="text-agro-300 text-sm font-semibold tracking-[0.2em] uppercase">
              — Productos destacados
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl">
              Lo que más rinde
              <span className="block italic text-agro-300">en cada parcela.</span>
            </h2>
          </div>
          <p className="text-cream/70 lg:max-w-md text-lg">
            Filtra por tu cultivo y descubre los insumos que nuestros agrónomos
            recomiendan esta temporada.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition whitespace-nowrap ${
                active === t.id
                  ? "bg-agro-300 text-agro-950 shadow-lg"
                  : "bg-agro-800/60 text-cream/80 hover:bg-agro-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className="group relative bg-gradient-to-br from-agro-800/70 to-agro-900/70 backdrop-blur p-6 lg:p-7 rounded-3xl border border-agro-700/60 hover:border-agro-400 transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                {p.badge && (
                  <span className="absolute top-5 right-5 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-earth-400 text-earth-950 text-xs font-bold z-10">
                    <Sparkles className="w-3 h-3" />
                    {p.badge}
                  </span>
                )}

                <div className="aspect-square rounded-2xl bg-gradient-to-br from-agro-600 to-agro-700 mb-5 flex items-center justify-center text-7xl shadow-inner">
                  {cropEmoji[p.crop]}
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-agro-300 mb-2">
                  <span>{p.type}</span>
                  <span className="opacity-50">·</span>
                  <span className="text-cream/60">{p.brand}</span>
                </div>

                <h3 className="font-display text-xl lg:text-2xl text-cream leading-snug mb-2">
                  {p.name}
                </h3>

                <p className="text-sm text-cream/65 leading-relaxed mb-5">
                  {p.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-agro-700/60">
                  <div>
                    <div className="font-display text-2xl text-agro-300">
                      Q{p.price}
                    </div>
                    <div className="text-xs text-cream/50">por {p.unit}</div>
                  </div>
                  <button
                    aria-label={`Cotizar ${p.name}`}
                    className="w-11 h-11 rounded-full bg-agro-300 text-agro-950 flex items-center justify-center hover:bg-cream transition group-hover:scale-110"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
