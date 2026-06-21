"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="bg-[#111] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter">
              RX<span className="text-red-500">STORE</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/productos"
              className="text-sm font-medium hover:text-red-400 transition-colors"
            >
              Productos
            </Link>
            <Link
              href="/productos?category=calleras"
              className="text-sm font-medium hover:text-red-400 transition-colors"
            >
              Calleras
            </Link>
            <Link
              href="/productos?category=ropa"
              className="text-sm font-medium hover:text-red-400 transition-colors"
            >
              Ropa
            </Link>
            <Link
              href="/productos?category=tacticos"
              className="text-sm font-medium hover:text-red-400 transition-colors"
            >
              Tácticos
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Abrir carrito"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <Link
              href="/productos"
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Ver productos"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
