export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: Category;
  subcategory: string;
  brand: string;
  images: string[];
  sizes?: string[];
  colors?: ProductColor[];
  inStock: boolean;
  featured?: boolean;
  tags?: string[];
}

export interface ProductColor {
  name: string;
  hex: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export type Category =
  | "calleras"
  | "cinturones"
  | "camisetas"
  | "gafas"
  | "tacticos"
  | "accesorios";

export const CATEGORY_LABELS: Record<Category, string> = {
  calleras: "Calleras",
  cinturones: "Cinturones",
  camisetas: "Camisetas",
  gafas: "Gafas",
  tacticos: "Tácticos",
  accesorios: "Accesorios",
};

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  calleras: "Protección y agarre para tus WODs",
  cinturones: "Soporte lumbar para levantamientos pesados",
  camisetas: "Algodón, Oversize y DryFit",
  gafas: "Performance y estilo para entrenar",
  tacticos: "Morrales, chalecos y canguros",
  accesorios: "Balacas, parches, tobilleras y más",
};

export interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  department: string;
  notes?: string;
}
