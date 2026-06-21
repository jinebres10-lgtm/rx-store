"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export default function CarritoPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-20 h-20 mx-auto mb-6 text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Tu carrito está vacío
        </h1>
        <p className="text-gray-500 mb-8">
          Agrega productos desde nuestro catálogo
        </p>
        <Link
          href="/productos"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Tu carrito</h1>

      <div className="space-y-4 mb-8">
        {items.map((item) => (
          <div
            key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
            className="flex gap-6 bg-white border border-gray-100 rounded-xl p-6"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
              <img
                src={item.product.images[0]}
                alt={item.product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <Link
                href={`/productos/${item.product.slug}`}
                className="font-semibold text-gray-900 hover:text-red-600 transition-colors"
              >
                {item.product.name}
              </Link>
              <div className="text-sm text-gray-500 mt-1 space-x-3">
                {item.selectedSize && <span>Talla: {item.selectedSize}</span>}
                {item.selectedColor && <span>Color: {item.selectedColor}</span>}
              </div>
              <p className="text-lg font-bold text-gray-900 mt-2">
                {formatPrice(item.product.price * item.quantity)}
              </p>

              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() =>
                    updateQuantity(
                      item.product.id,
                      item.quantity - 1,
                      item.selectedSize,
                      item.selectedColor
                    )
                  }
                  className="w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="font-medium">{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(
                      item.product.id,
                      item.quantity + 1,
                      item.selectedSize,
                      item.selectedColor
                    )
                  }
                  className="w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
                <button
                  onClick={() =>
                    removeItem(
                      item.product.id,
                      item.selectedSize,
                      item.selectedColor
                    )
                  }
                  className="ml-4 text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white border border-gray-100 rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(subtotal)}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Envío calculado en el checkout
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/checkout"
            className="flex-1 bg-red-600 hover:bg-red-700 text-white text-center font-semibold py-3 rounded-lg transition-colors"
          >
            Ir a pagar
          </Link>
          <Link
            href="/productos"
            className="flex-1 border border-gray-200 text-gray-700 hover:bg-gray-50 text-center font-semibold py-3 rounded-lg transition-colors"
          >
            Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  );
}
