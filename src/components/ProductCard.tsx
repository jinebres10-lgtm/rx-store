"use client";

import Link from "next/link";
import { Product } from "@/lib/types";
import { formatPrice } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        {product.images[0] ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-sm font-semibold text-gray-400 text-center px-4">
              {product.name}
            </span>
          </div>
        )}
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            SALE
          </span>
        )}
        {product.featured && !product.originalPrice && (
          <span className="absolute top-3 left-3 bg-[#111] text-white text-xs font-bold px-2 py-1 rounded-full">
            DESTACADO
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">
          {product.brand}
        </p>
        <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        {product.colors && product.colors.length > 0 && (
          <div className="mt-3 flex gap-1.5">
            {product.colors.slice(0, 5).map((color) => (
              <span
                key={color.name}
                className="w-4 h-4 rounded-full border border-gray-200"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 5 && (
              <span className="text-xs text-gray-400 self-center">
                +{product.colors.length - 5}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
