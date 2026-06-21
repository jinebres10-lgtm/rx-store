import { Product } from "@/lib/types";

export const products: Product[] = [
  // ── CALLERAS ──
  {
    id: "calleras-ursus-001",
    slug: "calleras-ursus",
    name: "Calleras Ursus",
    description:
      "Calleras de alto rendimiento con doble capa de protección y agarre superior. Diseñadas para gimnasia, pull-ups, muscle-ups y bar work. Sistema de cierre con velcro ajustable. Incluyen bolsa de malla LIVE4WOD.",
    price: 150000,
    category: "calleras",
    subcategory: "Ursus",
    brand: "LIVE4WOD",
    images: [
      "/images/calleras-ursus-turquesa.jpg",
      "/images/calleras-ursus-verde.jpg",
      "/images/calleras-ursus-morado.jpg",
      "/images/calleras-ursus-kit-verde.jpg",
      "/images/calleras-ursus-kit-turquesa.jpg",
      "/images/calleras-ursus-kit-rosa-blanco.jpg",
      "/images/calleras-ursus-kit-morado.jpg",
      "/images/calleras-ursus-kit-negro.jpg",
      "/images/calleras-ursus-kit-pink.jpg",
      "/images/calleras-ursus-kit-blanco-negro.jpg",
      "/images/calleras-ursus-kit-negro-rosa.jpg",
      "/images/calleras-ursus-kit-blanco-turquesa.jpg",
      "/images/calleras-ursus-kit-negro-blanco.jpg",
      "/images/calleras-ursus-kit-negro-turquesa.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Turquesa", hex: "#2dd4bf" },
      { name: "Verde", hex: "#166534" },
      { name: "Morado", hex: "#9333ea" },
      { name: "Rosa", hex: "#ec4899" },
      { name: "Blanco", hex: "#f5f5f5" },
      { name: "Negro", hex: "#1a1a1a" },
    ],
    inStock: true,
    featured: true,
    tags: ["calleras", "grips", "gimnasia", "pull-ups"],
  },
  {
    id: "calleras-legacy-002",
    slug: "calleras-legacy",
    name: "Calleras Legacy",
    description:
      "Calleras clásicas de cuero premium con diseño ergonómico. Máxima durabilidad y comodidad para sesiones intensas de CrossFit.",
    price: 150000,
    category: "calleras",
    subcategory: "Legacy",
    brand: "LIVE4WOD",
    images: [],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Naranja", hex: "#f97316" },
    ],
    inStock: true,
    tags: ["calleras", "grips", "cuero", "legacy"],
  },
  {
    id: "calleras-spider-003",
    slug: "calleras-spider",
    name: "Calleras Spider",
    description:
      "Calleras con diseño Spider para máximo agarre en barra. Protección reforzada en palmas con material antideslizante.",
    price: 130000,
    category: "calleras",
    subcategory: "Spider",
    brand: "LIVE4WOD",
    images: [],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Rojo", hex: "#dc2626" },
    ],
    inStock: true,
    tags: ["calleras", "grips", "spider"],
  },
  {
    id: "calleras-fibra-004",
    slug: "calleras-fibra",
    name: "Calleras Fibra",
    description:
      "Calleras ultraligeras de fibra sintética. Ideales para quienes buscan mínimo grosor con máxima protección.",
    price: 80000,
    category: "calleras",
    subcategory: "Fibra",
    brand: "LIVE4WOD",
    images: [],
    sizes: ["S", "M", "L"],
    inStock: true,
    tags: ["calleras", "grips", "fibra", "ligeras"],
  },
  {
    id: "calleras-carbono-005",
    slug: "calleras-fibra-de-carbono",
    name: "Calleras Fibra de Carbono",
    description:
      "Calleras premium de fibra de carbono. La tecnología más avanzada en protección para CrossFit. Ultraligeras y extremadamente resistentes.",
    price: 86000,
    category: "calleras",
    subcategory: "Fibra de Carbono",
    brand: "LIVE4WOD",
    images: [],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Gris", hex: "#6b7280" },
    ],
    inStock: true,
    tags: ["calleras", "grips", "carbono", "premium"],
  },

  // ── CINTURONES ──
  {
    id: "cinturon-parche-006",
    slug: "cinturon-con-parche",
    name: "Cinturón con Parche",
    description:
      "Cinturón de levantamiento con parche intercambiable. Soporte lumbar de alta densidad con cierre de palanca para máxima seguridad en squats, deadlifts y clean & jerk.",
    price: 118000,
    category: "cinturones",
    subcategory: "Con Parche",
    brand: "LIVE4WOD",
    images: [],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Morado", hex: "#7c3aed" },
      { name: "Gris", hex: "#6b7280" },
      { name: "Rosa", hex: "#ec4899" },
    ],
    inStock: true,
    featured: true,
    tags: ["cinturón", "levantamiento", "parche", "lumbar"],
  },
  {
    id: "cinturon-marquilla-007",
    slug: "cinturon-marquilla-3d",
    name: "Cinturón Marquilla 3D",
    description:
      "Cinturón premium con marquilla 3D en relieve. Edición especial con diseño exclusivo LIVE4WOD. Soporte lumbar profesional.",
    price: 110000,
    category: "cinturones",
    subcategory: "Marquilla 3D",
    brand: "LIVE4WOD",
    images: [],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Multicolor", hex: "#8b5cf6" },
    ],
    inStock: true,
    tags: ["cinturón", "levantamiento", "3d", "premium"],
  },

  // ── CAMISETAS ──
  {
    id: "camiseta-algodon-008",
    slug: "camiseta-algodon-hombre",
    name: "Camiseta Algodón Hombre",
    description:
      "Camiseta de algodón 100% premium. Corte regular, cómoda para entrenar o uso casual. Estampados exclusivos LIVE4WOD.",
    price: 60000,
    category: "camisetas",
    subcategory: "Algodón",
    brand: "LIVE4WOD",
    images: [],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Café", hex: "#92400e" },
      { name: "Oliva", hex: "#65a30d" },
      { name: "Rojo", hex: "#b91c1c" },
      { name: "Blanco", hex: "#f5f5f5" },
      { name: "Arena", hex: "#d4a574" },
      { name: "Verde", hex: "#15803d" },
      { name: "Azul", hex: "#1d4ed8" },
    ],
    inStock: true,
    tags: ["camiseta", "algodón", "hombre", "casual"],
  },
  {
    id: "camiseta-oversize-009",
    slug: "camiseta-oversize-hombre",
    name: "Camiseta Oversize Hombre",
    description:
      "Camiseta oversize con corte holgado y moderno. Algodón grueso premium, ideal para entrenar o streetwear. Diseños exclusivos LIVE4WOD.",
    price: 75000,
    category: "camisetas",
    subcategory: "Oversize",
    brand: "LIVE4WOD",
    images: [],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Café", hex: "#92400e" },
      { name: "Arena", hex: "#d4a574" },
    ],
    inStock: true,
    tags: ["camiseta", "oversize", "hombre", "streetwear"],
  },
  {
    id: "camiseta-dryfit-010",
    slug: "camiseta-dryfit-hombre",
    name: "Camiseta DryFit Hombre",
    description:
      "Camiseta técnica DryFit de alto rendimiento. Tela que absorbe el sudor y seca rápido. Perfecta para WODs intensos.",
    price: 46000,
    category: "camisetas",
    subcategory: "DryFit",
    brand: "LIVE4WOD",
    images: [],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Blanco", hex: "#f5f5f5" },
      { name: "Gris", hex: "#6b7280" },
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Rosa", hex: "#ec4899" },
    ],
    inStock: true,
    tags: ["camiseta", "dryfit", "performance", "hombre"],
  },
  {
    id: "camiseta-mujer-011",
    slug: "camiseta-mujer",
    name: "Camiseta Mujer",
    description:
      "Camiseta para mujer con corte femenino y telas premium. Diseños exclusivos LIVE4WOD para entrenar con estilo.",
    price: 55000,
    category: "camisetas",
    subcategory: "Mujer",
    brand: "LIVE4WOD",
    images: [],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Blanco", hex: "#f5f5f5" },
      { name: "Rosa", hex: "#ec4899" },
    ],
    inStock: true,
    tags: ["camiseta", "mujer", "femenino"],
  },
  {
    id: "shorts-024",
    slug: "shorts-entrenamiento",
    name: "Shorts de Entrenamiento",
    description:
      "Shorts de entrenamiento con tela ligera y resistente. Cintura elástica con cordón ajustable. Diseño funcional con bolsillos laterales.",
    price: 55000,
    category: "camisetas",
    subcategory: "Shorts",
    brand: "LIVE4WOD",
    images: ["/images/shorts-uva.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Uva", hex: "#7e22ce" },
      { name: "Negro", hex: "#1a1a1a" },
    ],
    inStock: true,
    tags: ["shorts", "pantaloneta", "entrenamiento"],
  },

  // ── GAFAS ──
  {
    id: "gafas-performance-012",
    slug: "gafas-performance",
    name: "Gafas Performance",
    description:
      "Gafas deportivas de alto rendimiento con protección UV400. Lentes polarizadas intercambiables. Diseñadas para entrenamiento outdoor.",
    price: 119000,
    category: "gafas",
    subcategory: "Performance",
    brand: "LIVE4WOD",
    images: [],
    colors: [
      { name: "Negro/Rojo", hex: "#dc2626" },
      { name: "Negro/Azul", hex: "#2563eb" },
      { name: "Negro/Verde", hex: "#16a34a" },
    ],
    inStock: true,
    featured: true,
    tags: ["gafas", "deportivas", "UV400", "polarizadas"],
  },
  {
    id: "gafas-style-013",
    slug: "gafas-style",
    name: "Gafas Style",
    description:
      "Gafas de estilo casual-deportivo con protección UV. Diseño moderno para uso diario y entrenamiento.",
    price: 105000,
    category: "gafas",
    subcategory: "Style",
    brand: "LIVE4WOD",
    images: [],
    colors: [
      { name: "Transparente", hex: "#e5e7eb" },
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Azul", hex: "#3b82f6" },
    ],
    inStock: true,
    tags: ["gafas", "estilo", "casual", "UV"],
  },

  // ── TÁCTICOS ──
  {
    id: "canguro-014",
    slug: "canguro-tactico",
    name: "Canguro Táctico",
    description:
      "Canguro táctico con múltiples compartimentos. Tela resistente al agua, ideal para llevar tus esenciales al box.",
    price: 65000,
    category: "tacticos",
    subcategory: "Canguros",
    brand: "LIVE4WOD",
    images: [],
    colors: [
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Azul", hex: "#1e40af" },
      { name: "Rosa", hex: "#ec4899" },
    ],
    inStock: true,
    tags: ["canguro", "táctico", "bolso"],
  },
  {
    id: "chaleco-015",
    slug: "chaleco-tactico",
    name: "Chaleco Táctico",
    description:
      "Chaleco táctico estilo militar con compartimentos MOLLE. Ideal para entrenamientos con peso adicional o uso táctico.",
    price: 65000,
    category: "tacticos",
    subcategory: "Chalecos",
    brand: "LIVE4WOD",
    images: [],
    colors: [
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Verde Militar", hex: "#4d7c0f" },
    ],
    inStock: true,
    tags: ["chaleco", "táctico", "peso", "militar"],
  },
  {
    id: "morral-1-016",
    slug: "morral-1-0",
    name: "Morral 1.0",
    description:
      "Morral compacto LIVE4WOD para llevar lo esencial al box. Compartimento para zapatos, bolsillo para botella y organizador interno.",
    price: 97000,
    category: "tacticos",
    subcategory: "Morrales",
    brand: "LIVE4WOD",
    images: ["/images/morrales-turquesa-lila.jpg"],
    colors: [
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Turquesa", hex: "#2dd4bf" },
      { name: "Lila", hex: "#c084fc" },
    ],
    inStock: true,
    tags: ["morral", "backpack", "gym bag"],
  },
  {
    id: "morral-3-017",
    slug: "morral-3-0",
    name: "Morral 3.0",
    description:
      "Morral mediano de 45 litros con compartimento para portátil, bolsillo para zapatos mojados y múltiples organizadores. Tela impermeable y sistema MOLLE.",
    price: 150000,
    category: "tacticos",
    subcategory: "Morrales",
    brand: "LIVE4WOD",
    images: [
      "/images/morrales-turquesa-lila.jpg",
      "/images/morrales-rosa.jpg",
    ],
    colors: [
      { name: "Rosa", hex: "#ec4899" },
      { name: "Turquesa", hex: "#2dd4bf" },
      { name: "Lila", hex: "#c084fc" },
      { name: "Negro", hex: "#1a1a1a" },
    ],
    inStock: true,
    featured: true,
    tags: ["morral", "backpack", "gym bag", "45 litros"],
  },
  {
    id: "morral-4-018",
    slug: "morral-4-0",
    name: "Morral 4.0",
    description:
      "El morral más completo de LIVE4WOD. Gran capacidad con compartimentos especializados para todo tu equipo de CrossFit. Tela militar resistente al agua y sistema MOLLE.",
    price: 200000,
    category: "tacticos",
    subcategory: "Morrales",
    brand: "LIVE4WOD",
    images: ["/images/morrales-rosa.jpg"],
    colors: [
      { name: "Rosa", hex: "#ec4899" },
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Verde Neón", hex: "#84cc16" },
    ],
    inStock: true,
    featured: true,
    tags: ["morral", "backpack", "gym bag", "premium"],
  },

  // ── ACCESORIOS ──
  {
    id: "speed-rope-022",
    slug: "speed-rope",
    name: "Speed Rope",
    description:
      "Lazo de velocidad profesional en aluminio con rodamientos de alta precisión. Cable de acero recubierto, llave allen y tornillos de repuesto incluidos. Ideal para double-unders.",
    price: 85000,
    category: "accesorios",
    subcategory: "Speed Rope",
    brand: "LIVE4WOD",
    images: [
      "/images/speed-rope-plata.jpg",
      "/images/speed-rope-negro.jpg",
      "/images/speed-rope-rojo.jpg",
      "/images/speed-rope-azul-claro.jpg",
      "/images/speed-rope-verde.jpg",
      "/images/speed-rope-fucsia.jpg",
      "/images/speed-rope-rosa-claro.jpg",
      "/images/speed-rope-morado.jpg",
      "/images/speed-rope-azul.jpg",
      "/images/speed-rope-verde-oscuro.jpg",
    ],
    colors: [
      { name: "Plata", hex: "#a8a29e" },
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Rojo", hex: "#dc2626" },
      { name: "Azul Claro", hex: "#67e8f9" },
      { name: "Verde", hex: "#84cc16" },
      { name: "Fucsia", hex: "#d946ef" },
      { name: "Rosa", hex: "#f9a8d4" },
      { name: "Morado", hex: "#7c3aed" },
      { name: "Azul", hex: "#2563eb" },
      { name: "Verde Oscuro", hex: "#166534" },
    ],
    inStock: true,
    featured: true,
    tags: ["lazo", "speed rope", "double-unders", "saltar"],
  },
  {
    id: "wrist-wraps-023",
    slug: "wrist-wraps",
    name: "Wrist Wraps",
    description:
      "Muñequeras de soporte para levantamiento de pesas. Diseños exclusivos LIVE4WOD con cierre de velcro ajustable y loop para el pulgar.",
    price: 45000,
    category: "accesorios",
    subcategory: "Wrist Wraps",
    brand: "LIVE4WOD",
    images: ["/images/wrist-wraps-neon.jpg", "/images/wrist-wraps-lift.jpg"],
    colors: [
      { name: "CrossFit Neón", hex: "#bef264" },
      { name: "Lift Heavy", hex: "#f5f5f5" },
      { name: "Rayos", hex: "#ec4899" },
    ],
    inStock: true,
    tags: ["muñequeras", "wrist wraps", "soporte", "levantamiento"],
  },
  {
    id: "tobilleras-021",
    slug: "tobilleras",
    name: "Tobilleras",
    description:
      "Tobilleras de soporte con logo LV4W para proteger tus tobillos durante rope climbs, box jumps y movimientos de alto impacto.",
    price: 30000,
    category: "accesorios",
    subcategory: "Tobilleras",
    brand: "LIVE4WOD",
    images: ["/images/tobilleras-naranja-rojo.jpg"],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Naranja/Blanco", hex: "#f97316" },
      { name: "Rojo/Blanco", hex: "#dc2626" },
    ],
    inStock: true,
    tags: ["tobillera", "soporte", "protección"],
  },
  {
    id: "balaca-019",
    slug: "balacas",
    name: "Balacas",
    description:
      "Balacas deportivas con diseños exclusivos. Absorben el sudor y mantienen tu cabello en su lugar durante los WODs más intensos.",
    price: 20000,
    category: "accesorios",
    subcategory: "Balacas",
    brand: "LIVE4WOD",
    images: [],
    colors: [
      { name: "Rosa", hex: "#ec4899" },
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Multicolor", hex: "#8b5cf6" },
    ],
    inStock: true,
    tags: ["balaca", "headband", "sudor"],
  },
  {
    id: "parches-020",
    slug: "parches-crossfit",
    name: "Parches CrossFit",
    description:
      "Parches bordados con diseños de CrossFit para personalizar tu morral, chaleco o cinturón. Variedad de diseños temáticos.",
    price: 18000,
    category: "accesorios",
    subcategory: "Parches",
    brand: "LIVE4WOD",
    images: [],
    inStock: true,
    tags: ["parche", "bordado", "personalización"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug && p.images.length > 0);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category && p.images.length > 0);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured && p.images.length > 0);
}

export function getVisibleProducts(): Product[] {
  return products.filter((p) => p.images.length > 0);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
