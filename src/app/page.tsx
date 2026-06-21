import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { getFeaturedProducts } from "@/data/products";
import { Category } from "@/lib/types";

const categories: Category[] = [
  "calleras",
  "cinturones",
  "camisetas",
  "gafas",
  "tacticos",
  "accesorios",
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <HeroBanner />

      {/* Categorías */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Categorías</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat} category={cat} />
          ))}
        </div>
      </section>

      {/* Productos destacados */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Productos destacados
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Banner CTA */}
      <section className="bg-[#111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para tu próximo WOD?
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            Equípate con lo mejor. Productos LIVE4WOD diseñados por y para
            atletas de CrossFit.
          </p>
          <a
            href="/productos"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Ver todo el catálogo
          </a>
        </div>
      </section>
    </>
  );
}
