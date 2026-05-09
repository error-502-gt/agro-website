"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, type Crop } from "../data/products";
import {
  ShoppingBag,
  Sparkles,
  Wheat,
  Coffee,
  Sprout,
  Salad,
  TreePalm,
  Apple,
  type LucideIcon,
} from "lucide-react";

const tabs: { id: Crop | "all"; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "maiz", label: "Maíz" },
  { id: "cafe", label: "Café" },
  { id: "frijol", label: "Frijol" },
  { id: "hortalizas", label: "Hortalizas" },
  { id: "cana", label: "Caña" },
  { id: "aguacate", label: "Aguacate" },
];

// Lucide icons replace the original emojis. They render at any size,
// stay crisp on retina screens, and feel more "B2B" than emoji.
const cropIcon: Record<Crop, LucideIcon> = {
  maiz: Wheat,
  cafe: Coffee,
  frijol: Sprout,
  hortalizas: Salad,
  cana: TreePalm,
  aguacate: Apple,
};

export default function Products() {
  const [active, setActive] = useState<Crop | "all">("all");
  const filtered =
    active === "all" ? products : products.filter((p) => p.crop === active);

  return (
    <section
      id="productos"
      className="relative py-16 md:py-24 lg:py-32 bg-agro-950 text-cream overflow-hidden"
    >
      {/* decorative background blobs (hidden on mobile to reduce blur cost) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none hidden md:block">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-agro-500 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-earth-500 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-12">
          <div>
            <span className="text-agro-300 text-sm font-semibold tracking-[0.2em] uppercase">
              — Productos destacados
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl">
              Lo que más rinde
              <span className="block italic text-agro-300">en cada parcela.</span>
            </h2>
          </div>
          <p className="text-cream/70 lg:max-w-md text-base sm:text-lg">
            Filtra por tu cultivo y descubre los insumos que nuestros agrónomos
            recomiendan esta temporada.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 md:mb-10 overflow-x-auto pb-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
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
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const Icon = cropIcon[p.crop];
              return (
                <motion.article
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                  className="group relative bg-gradient-to-br from-agro-800/70 to-agro-900/70 backdrop-blur p-3 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border border-agro-700/60 hover:border-agro-400 transition-all sm:hover:-translate-y-1 hover:shadow-2xl flex flex-col"
                >
                  {p.badge && (
                    <span className="absolute top-3 right-3 sm:top-5 sm:right-5 inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-earth-400 text-earth-950 text-[9px] sm:text-xs font-bold z-10">
                      <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span className="hidden sm:inline">{p.badge}</span>
                    </span>
                  )}

                  {/* Icon area — gradient tile with a soft inner glow */}
                  <div className="aspect-[4/3] sm:aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-agro-600 via-agro-700 to-agro-800 mb-3 sm:mb-5 flex items-center justify-center shadow-inner relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cream/5 to-cream/15" />
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-agro-300/10 blur-2xl" />
                    <Icon
                      className="relative z-10 w-9 h-9 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-cream/95 group-hover:scale-110 transition-transform duration-500"
                      strokeWidth={1.4}
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-agro-300 mb-1.5 sm:mb-2">
                    <span>{p.type}</span>
                    <span className="opacity-50 hidden sm:inline">·</span>
                    <span className="text-cream/60 hidden sm:inline">
                      {p.brand}
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-xl lg:text-2xl text-cream leading-snug mb-1.5 sm:mb-2">
                    {p.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-cream/65 leading-relaxed mb-4 sm:mb-5 line-clamp-2 sm:line-clamp-none">
                    {p.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-3 sm:pt-4 border-t border-agro-700/60 gap-2">
                    <div className="min-w-0">
                      <div className="font-display text-lg sm:text-2xl text-agro-300">
                        Q{p.price}
                      </div>
                      <div className="text-[10px] sm:text-xs text-cream/50 leading-tight truncate">
                        por {p.unit}
                      </div>
                    </div>
                    <button
                      aria-label={`Cotizar ${p.name}`}
                      className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-agro-300 text-agro-950 flex items-center justify-center hover:bg-cream transition group-hover:scale-110"
                    >
                      <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
