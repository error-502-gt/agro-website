"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronDown, Leaf } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Capture video duration once metadata is loaded
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onMeta = () => {
      if (v.duration && Number.isFinite(v.duration)) setDuration(v.duration);
    };
    if (v.readyState >= 1) onMeta();
    v.addEventListener("loadedmetadata", onMeta);
    return () => v.removeEventListener("loadedmetadata", onMeta);
  }, []);

  // Drive video.currentTime from scroll position — frame scrubbing
  useEffect(() => {
    if (!duration) return;
    let raf = 0;
    const seek = (progress: number) => {
      const v = videoRef.current;
      if (!v) return;
      const target = Math.max(0, Math.min(progress, 1)) * duration;
      // Avoid redundant seeks (browser throttles them anyway)
      if (Math.abs(v.currentTime - target) > 0.03) {
        v.currentTime = target;
      }
    };
    const unsub = scrollYProgress.on("change", (p) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => seek(p));
    });
    seek(scrollYProgress.get());
    return () => {
      unsub();
      cancelAnimationFrame(raf);
    };
  }, [duration, scrollYProgress]);

  // Title fades and lifts as we scroll past the first ~half of the section
  const titleY = useTransform(scrollYProgress, [0.8, 1], ["0%", "-25%"]);
  const titleOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative h-[250vh] bg-agro-950"
    >
      {/* Sticky stage — keeps the video pinned to viewport while we scroll
          through the section's full 250vh, so currentTime maps to scroll. */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* VIDEO BACKGROUND — currentTime driven by scroll */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/corn-scrub.mp4" type="video/mp4" />
        </video>

        {/* Vignette / dark gradient for text legibility */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none bg-gradient-to-b from-agro-950/55 via-agro-950/15 to-agro-950/85"
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-agro-950/40 via-transparent to-agro-950/40"
        />

        {/* Title overlay */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/15 backdrop-blur-md border border-cream/30 text-cream text-xs lg:text-sm font-medium tracking-[0.2em] uppercase mb-6 shadow-lg"
          >
            <Leaf className="w-3.5 h-3.5" />
            Agroservicios desde 2001
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.05] max-w-5xl"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.55)" }}
          >
            Cultivamos tu cosecha
            <span className="block italic font-normal text-agro-200 mt-2">
              desde la raíz
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-7 max-w-2xl text-cream/95 text-base md:text-lg lg:text-xl font-light leading-relaxed"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
          >
            Insumos certificados, semillas mejoradas, fertilizantes y asesoría
            técnica para que cada parcela rinda lo que merece.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#productos"
              className="px-7 py-3.5 rounded-full bg-agro-600 hover:bg-agro-700 text-cream font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              Ver productos
            </a>
            <a
              href="#contacto"
              className="px-7 py-3.5 rounded-full bg-cream/10 backdrop-blur border-2 border-cream/70 text-cream font-semibold hover:bg-cream/25 transition-all"
            >
              Hablar con un agrónomo
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/85 flex flex-col items-center gap-1.5"
        >
          <span
            className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
          >
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
