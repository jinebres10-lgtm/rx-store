import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-black tracking-tighter text-white">
              RX<span className="text-red-500">STORE</span>
            </span>
            <p className="mt-3 text-sm">
              Tu tienda de equipamiento CrossFit. Productos LIVE4WOD de alta
              calidad para atletas que dan todo en cada WOD.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Categorías</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/productos?category=calleras"
                  className="hover:text-white transition-colors"
                >
                  Calleras
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?category=cinturones"
                  className="hover:text-white transition-colors"
                >
                  Cinturones
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?category=ropa"
                  className="hover:text-white transition-colors"
                >
                  Ropa
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?category=gafas"
                  className="hover:text-white transition-colors"
                >
                  Gafas
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?category=tacticos"
                  className="hover:text-white transition-colors"
                >
                  Tácticos
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?category=accesorios"
                  className="hover:text-white transition-colors"
                >
                  Accesorios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>WhatsApp: +57 XXX XXX XXXX</li>
              <li>Email: contacto@rxstore.com</li>
              <li>Instagram: @rxstore.co</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} RX Store. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
