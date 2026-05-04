"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const contacts = [
    {
      icon: MapPin,
      title: "Casa matriz",
      text: "5a Calle 8-25 Zona 1, Quetzaltenango, Guatemala",
    },
    {
      icon: Phone,
      title: "Llámanos",
      text: "+502 7765-2200 · WhatsApp +502 5544-1133",
    },
    {
      icon: Mail,
      title: "Escríbenos",
      text: "hola@agroraiz.gt · ventas@agroraiz.gt",
    },
    {
      icon: Clock,
      title: "Horario",
      text: "Lun – Sáb · 7:00 a.m. a 6:00 p.m.",
    },
  ];

  return (
    <section
      id="contacto"
      className="relative py-24 lg:py-32 bg-agro-950 text-cream overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-earth-500 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-agro-500 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <span className="text-agro-300 text-sm font-semibold tracking-[0.2em] uppercase">
              — Contáctanos
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl">
              Hablemos de tu
              <span className="block italic text-agro-300">
                próxima cosecha.
              </span>
            </h2>
            <p className="mt-6 text-cream/70 text-lg leading-relaxed max-w-md">
              Cuéntanos qué cultivas y un agrónomo te contactará en menos de 24
              horas con una propuesta personalizada.
            </p>

            <div className="mt-10 space-y-5">
              {contacts.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-agro-800 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-agro-300" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-agro-300 font-semibold mb-1">
                      {c.title}
                    </div>
                    <div className="text-cream/85">{c.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.form
            onSubmit={handle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-agro-800/60 to-agro-900/60 backdrop-blur p-8 lg:p-10 rounded-3xl border border-agro-700/60"
          >
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nombre" name="name" placeholder="Tu nombre" />
                <Field label="Teléfono" name="phone" placeholder="+502 ..." />
              </div>
              <Field
                label="Correo electrónico"
                name="email"
                type="email"
                placeholder="tu@correo.com"
              />
              <div>
                <label
                  htmlFor="crop"
                  className="block text-xs font-semibold uppercase tracking-wider text-agro-300 mb-2"
                >
                  ¿Qué cultivas?
                </label>
                <select
                  id="crop"
                  name="crop"
                  className="w-full px-4 py-3.5 rounded-xl bg-agro-950/50 border border-agro-700 text-cream focus:border-agro-300 focus:outline-none transition"
                >
                  <option>Maíz</option>
                  <option>Café</option>
                  <option>Frijol</option>
                  <option>Hortalizas</option>
                  <option>Caña</option>
                  <option>Aguacate</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-agro-300 mb-2"
                >
                  Cuéntanos más
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Hectáreas, variedad, problema o producto que buscas..."
                  className="w-full px-4 py-3.5 rounded-xl bg-agro-950/50 border border-agro-700 text-cream placeholder:text-cream/40 focus:border-agro-300 focus:outline-none transition resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-agro-300 text-agro-950 font-bold hover:bg-cream transition disabled:opacity-70"
              >
                {submitted ? (
                  "¡Mensaje enviado!"
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Enviar solicitud
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold uppercase tracking-wider text-agro-300 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3.5 rounded-xl bg-agro-950/50 border border-agro-700 text-cream placeholder:text-cream/40 focus:border-agro-300 focus:outline-none transition"
      />
    </div>
  );
}
