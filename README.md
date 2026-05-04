# AgroRaíz

Sitio para portafolio de un agroservicio ficticio. Hero con efecto parallax (Framer Motion + SVG ilustradas a medida), productos filtrables por cultivo y paleta inspirada en el campo.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (parallax + microanimaciones)
- Lucide Icons

## Empezar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

- `app/page.tsx` — composición del home
- `app/components/Hero.tsx` — parallax con SVG plants ilustradas a medida (corn stalks, monstera y banana leaf)
- `app/components/Products.tsx` — grid filtrable por cultivo
- `app/data/products.ts` — catálogo (ficticio)
- `tailwind.config.ts` — paleta `agro` (verdes campo) y `earth` (tonos tierra/cosecha)

> Marcas, precios y testimonios son ficticios. Proyecto creado con fines de portafolio.
