"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronDown, Leaf } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [duration, setDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Setup the off-screen <video>: load metadata, force-mute via JS (iOS),
  // try to start playback. The video is positioned off-screen so the
  // browser cannot paint any native play/cast overlays on top of the page.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const onMeta = () => {
      if (v.duration && Number.isFinite(v.duration)) setDuration(v.duration);
    };
    if (v.readyState >= 1) onMeta();
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("loadeddata", onMeta);
    v.play().catch(() => {});
    return () => {
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("loadeddata", onMeta);
    };
  }, []);

  // RAF loop: pin currentTime to scroll position AND draw the current
  // video frame onto a <canvas> that the user actually sees. The canvas
  // is just pixels — no native browser controls can attach to it.
  useEffect(() => {
    if (!duration) return;
    const v = videoRef.current;
    const c = canvasRef.current;
    if (!v || !c) return;
    const ctx = c.getContext("2d", { alpha: false });
    if (!ctx) return;

    let raf = 0;
    const tick = () => {
      const progress = scrollYProgress.get();
      const target = Math.max(0, Math.min(progress, 1)) * duration;
      if (Math.abs(v.currentTime - target) > 0.04) {
        v.currentTime = target;
      }
      // Match canvas bitmap to video native size on first frame.
      const vw = v.videoWidth;
      const vh = v.videoHeight;
      if (vw > 0 && (c.width !== vw || c.height !== vh)) {
        c.width = vw;
        c.height = vh;
      }
      if (vw > 0) {
        try {
          ctx.drawImage(v, 0, 0, c.width, c.height);
        } catch {
          // ignore; first frames may not yet be ready
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, scrollYProgress]);

  // Three slides cross-fade across the scroll: promise → process → results.
  // Each band overlaps slightly so transitions feel like a soft hand-off.
  const cueOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // SLIDE 1 — visible 0 → 0.30, fades out 0.25 → 0.32, lifts up gently
  const s1Opacity = useTransform(
    scrollYProgress,
    [0, 0.22, 0.32],
    [1, 1, 0]
  );
  const s1Y = useTransform(scrollYProgress, [0, 0.32], ["0%", "-12%"]);

  // SLIDE 2 — fades in 0.30 → 0.38, holds 0.38 → 0.58, fades out 0.58 → 0.66
  const s2Opacity = useTransform(
    scrollYProgress,
    [0.28, 0.38, 0.58, 0.66],
    [0, 1, 1, 0]
  );
  const s2Y = useTransform(scrollYProgress, [0.28, 0.66], ["12%", "-12%"]);

  // SLIDE 3 — fades in 0.62 → 0.72, holds 0.72 → 0.90, fades out 0.90 → 1.0
  const s3Opacity = useTransform(
    scrollYProgress,
    [0.62, 0.72, 0.9, 1],
    [0, 1, 1, 0]
  );
  const s3Y = useTransform(scrollYProgress, [0.62, 1], ["12%", "-12%"]);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative h-[170vh] md:h-[250vh] bg-agro-950"
    >
      {/* Sticky stage — keeps the video pinned to viewport while we scroll
          through the section, so currentTime maps to scroll position. */}
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* Poster as base layer — guarantees something visible on iOS Safari
            even before the video can be decoded / autoplay is blocked. */}
        <img
          src="/corn-poster.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Off-screen <video> — provides decoded frames for the canvas.
            Hidden via clip + tiny size + opacity so iOS Safari cannot draw
            its play / cast / fullscreen overlays where the user can see them. */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          controls={false}
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
          disablePictureInPicture
          disableRemotePlayback
          x-webkit-airplay="deny"
          tabIndex={-1}
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            opacity: 0,
            pointerEvents: "none",
            top: 0,
            left: 0,
            clipPath: "inset(50%)",
          }}
        >
          <source src="/corn-scrub.mp4" type="video/mp4" />
        </video>

        {/* Visible canvas — renders the video frames as plain pixels.
            No native player UI can attach to a <canvas>. */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          style={{ objectFit: "cover" }}
        />

        {/* Vignette / dark gradient for text legibility */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none bg-gradient-to-b from-agro-950/55 via-agro-950/20 to-agro-950/85"
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-agro-950/40 via-transparent to-agro-950/40"
        />

        {/* SLIDE 1 — Promesa (con CTAs, animación de entrada inicial) */}
        <motion.div
          style={{ opacity: s1Opacity, y: s1Y }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 md:px-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/15 backdrop-blur-md border border-cream/30 text-cream text-[10px] sm:text-xs lg:text-sm font-medium tracking-[0.2em] uppercase mb-4 sm:mb-6 shadow-lg"
          >
            <Leaf className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            Agroservicios desde 2001
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-[2.4rem] sm:text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.1] sm:leading-[1.05] max-w-5xl"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.55)" }}
          >
            Cultivamos tu cosecha
            <span className="block italic font-normal text-agro-200 mt-1 sm:mt-2">
              desde la raíz
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-5 sm:mt-7 max-w-2xl text-cream/95 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
          >
            Insumos certificados, semillas mejoradas y asesoría técnica para
            que cada parcela rinda lo que merece.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-7 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-xs sm:max-w-none mx-auto sm:w-auto"
          >
            <a
              href="#productos"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-agro-600 hover:bg-agro-700 text-cream font-semibold shadow-xl hover:shadow-2xl sm:hover:-translate-y-0.5 transition-all text-center"
            >
              Ver productos
            </a>
            <a
              href="#contacto"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-cream/10 backdrop-blur border-2 border-cream/70 text-cream font-semibold hover:bg-cream/25 transition-all text-center"
            >
              Hablar con un agrónomo
            </a>
          </motion.div>
        </motion.div>

        {/* SLIDE 2 — Proceso */}
        <motion.div
          style={{ opacity: s2Opacity, y: s2Y }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 md:px-6"
        >
          <span
            className="text-agro-200 text-[10px] sm:text-xs lg:text-sm font-semibold tracking-[0.3em] uppercase mb-4 sm:mb-6"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
          >
            — De la semilla al surco
          </span>
          <h2
            className="font-display text-[2.4rem] sm:text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.1] sm:leading-[1.05] max-w-5xl"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.55)" }}
          >
            En cada etapa,
            <span className="block italic font-normal text-agro-200 mt-1 sm:mt-2">
              contigo en el campo.
            </span>
          </h2>
          <p
            className="mt-5 sm:mt-7 max-w-2xl text-cream/95 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
          >
            Análisis de suelo, plan de fertilización y manejo integrado de
            plagas — respaldados por agrónomos certificados.
          </p>
        </motion.div>

        {/* SLIDE 3 — Resultados */}
        <motion.div
          style={{ opacity: s3Opacity, y: s3Y }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 md:px-6"
        >
          <span
            className="text-agro-200 text-[10px] sm:text-xs lg:text-sm font-semibold tracking-[0.3em] uppercase mb-4 sm:mb-6"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
          >
            — Resultados que se cosechan
          </span>
          <h2
            className="font-display text-[2.4rem] sm:text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.1] sm:leading-[1.05] max-w-5xl"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.55)" }}
          >
            Más rendimiento.
            <span className="block italic font-normal text-agro-200 mt-1 sm:mt-2">
              Más cosecha asegurada.
            </span>
          </h2>
          <p
            className="mt-5 sm:mt-7 max-w-2xl text-cream/95 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
          >
            Más de 5,200 productores ya forman parte de nuestra red en 14
            sucursales del país.
          </p>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2 text-cream/85 flex flex-col items-center gap-1.5"
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
