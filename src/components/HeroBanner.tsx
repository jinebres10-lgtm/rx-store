import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative bg-[#111] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, #dc2626 0%, transparent 50%), radial-gradient(circle at 75% 50%, #991b1b 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Equipamiento CrossFit Premium
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Entrena como
            <br />
            <span className="text-red-500">campeón</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-lg">
            Calleras, cinturones, ropa técnica y accesorios LIVE4WOD. Todo lo
            que necesitas para dar el 100% en cada WOD.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/productos"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Ver catálogo
            </Link>
            <Link
              href="/productos?category=calleras"
              className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Calleras
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
