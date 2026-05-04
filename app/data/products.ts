export type Crop =
  | "maiz"
  | "cafe"
  | "frijol"
  | "hortalizas"
  | "cana"
  | "aguacate";

export type Product = {
  id: string;
  name: string;
  type: string;
  brand: string;
  crop: Crop;
  price: number;
  unit: string;
  description: string;
  badge?: string;
};

export const cropEmoji: Record<Crop, string> = {
  maiz: "🌽",
  cafe: "☕",
  frijol: "🫘",
  hortalizas: "🥬",
  cana: "🎋",
  aguacate: "🥑",
};

export const cropName: Record<Crop, string> = {
  maiz: "Maíz",
  cafe: "Café",
  frijol: "Frijol",
  hortalizas: "Hortalizas",
  cana: "Caña",
  aguacate: "Aguacate",
};

export const products: Product[] = [
  // ============ MAÍZ ============
  {
    id: "m1",
    name: "Semilla Híbrida MX-7088",
    type: "Semilla",
    brand: "AgroNova",
    crop: "maiz",
    price: 285,
    unit: "20 lb",
    description: "Híbrido tropical de alto rendimiento, tolerante a roya y mancha de asfalto.",
    badge: "Más vendido",
  },
  {
    id: "m2",
    name: "Triple 15 Granulado",
    type: "Fertilizante",
    brand: "TerraPlus",
    crop: "maiz",
    price: 425,
    unit: "qq",
    description: "NPK balanceado para fertilización de fondo en granos básicos.",
  },
  {
    id: "m3",
    name: "Atrazina 90 WG",
    type: "Herbicida",
    brand: "VerdeMax",
    crop: "maiz",
    price: 320,
    unit: "1 kg",
    description: "Control selectivo de malezas de hoja ancha en preemergencia.",
  },

  // ============ CAFÉ ============
  {
    id: "c1",
    name: "Foliar Cafetalero Plus",
    type: "Foliar",
    brand: "AgroNova",
    crop: "cafe",
    price: 180,
    unit: "1 L",
    description: "Microelementos quelatados para floración y amarre de grano.",
    badge: "Recomendado",
  },
  {
    id: "c2",
    name: "18-46-0 Granulado",
    type: "Fertilizante",
    brand: "TerraPlus",
    crop: "cafe",
    price: 510,
    unit: "qq",
    description: "DAP para vigor radicular y formación de grano.",
  },
  {
    id: "c3",
    name: "Caldo Bordelés Premium",
    type: "Fungicida",
    brand: "VerdeMax",
    crop: "cafe",
    price: 245,
    unit: "1 kg",
    description: "Control preventivo de roya del cafeto y antracnosis.",
  },

  // ============ FRIJOL ============
  {
    id: "f1",
    name: "Semilla ICTA Ligero",
    type: "Semilla",
    brand: "SemillaSur",
    crop: "frijol",
    price: 95,
    unit: "5 lb",
    description: "Variedad nacional, ciclo corto y alto rendimiento bajo estrés hídrico.",
  },
  {
    id: "f2",
    name: "Inoculante Rhizobium",
    type: "Biológico",
    brand: "BioRaíz",
    crop: "frijol",
    price: 75,
    unit: "200 g",
    description: "Bacterias fijadoras de nitrógeno para leguminosas.",
  },
  {
    id: "f3",
    name: "Foliar Frijolero",
    type: "Foliar",
    brand: "AgroNova",
    crop: "frijol",
    price: 165,
    unit: "1 L",
    description: "Bioestimulante con boro y molibdeno para llenado de vaina.",
    badge: "Nuevo",
  },

  // ============ HORTALIZAS ============
  {
    id: "h1",
    name: "Sustrato Premium 50L",
    type: "Sustrato",
    brand: "TerraPlus",
    crop: "hortalizas",
    price: 145,
    unit: "saco 50 L",
    description: "Mezcla esterilizada con turba y perlita para germinación.",
  },
  {
    id: "h2",
    name: "Bandeja 200 cavidades",
    type: "Insumo",
    brand: "AgroPlast",
    crop: "hortalizas",
    price: 38,
    unit: "unidad",
    description: "Bandeja reutilizable de poliestireno para almácigo.",
  },
  {
    id: "h3",
    name: "Bacillus thuringiensis",
    type: "Insecticida",
    brand: "BioRaíz",
    crop: "hortalizas",
    price: 195,
    unit: "500 g",
    description: "Control biológico de lepidópteros en cultivo de hoja.",
    badge: "Orgánico",
  },

  // ============ CAÑA ============
  {
    id: "ca1",
    name: "Madurante CC-401",
    type: "Madurante",
    brand: "VerdeMax",
    crop: "cana",
    price: 380,
    unit: "1 L",
    description: "Acelera la maduración y eleva concentración de sacarosa.",
  },
  {
    id: "ca2",
    name: "Urea 46%",
    type: "Fertilizante",
    brand: "TerraPlus",
    crop: "cana",
    price: 395,
    unit: "qq",
    description: "Nitrógeno de alta concentración para macollaje.",
  },

  // ============ AGUACATE ============
  {
    id: "a1",
    name: "Foliar Hass Especial",
    type: "Foliar",
    brand: "AgroNova",
    crop: "aguacate",
    price: 220,
    unit: "1 L",
    description: "Calcio, magnesio y zinc para amarre de fruto y firmeza.",
    badge: "Premium",
  },
  {
    id: "a2",
    name: "Fungicida Cobre 50",
    type: "Fungicida",
    brand: "VerdeMax",
    crop: "aguacate",
    price: 285,
    unit: "1 kg",
    description: "Preventivo contra antracnosis y mancha negra del fruto.",
  },
];
