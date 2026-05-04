import { Sprout, Facebook, Instagram, Youtube } from "lucide-react";

const columns = [
  {
    title: "Productos",
    links: ["Semillas", "Fertilizantes", "Foliares", "Herbicidas", "Biológicos"],
  },
  {
    title: "Servicios",
    links: [
      "Asesoría agronómica",
      "Análisis de suelo",
      "Capacitaciones",
      "Crédito agrícola",
      "Programa Raíces",
    ],
  },
  {
    title: "Empresa",
    links: [
      "Nosotros",
      "Sucursales",
      "Trabaja con nosotros",
      "Blog técnico",
      "Contacto",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-agro-950 text-cream/70 border-t border-agro-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-agro-300 text-agro-950">
                <Sprout className="w-5 h-5" />
              </span>
              <span className="font-display text-2xl text-cream">
                Agro<span className="text-agro-300">Raíz</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Insumos, asesoría y tecnología para el campo. Cultivamos tu
              cosecha desde la raíz.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social"
                  className="w-9 h-9 rounded-full bg-agro-800 hover:bg-agro-700 flex items-center justify-center transition"
                >
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col, i) => (
            <div key={i}>
              <div className="text-xs font-bold uppercase tracking-wider text-agro-300 mb-4">
                {col.title}
              </div>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-agro-300 transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-7 border-t border-agro-800 flex flex-col md:flex-row gap-3 items-center justify-between text-xs">
          <p>© {new Date().getFullYear()} AgroRaíz, S.A. — Marca ficticia para portafolio.</p>
          <p className="opacity-70">
            Diseñado y construido con cariño desde el campo.
          </p>
        </div>
      </div>
    </footer>
  );
}
