import Spline from '@splinetool/react-spline';
import { Star, Truck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 via-orange-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-16">
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold">
            New • Fresh & Fast
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Bright, bold and delicious food at your doorstep
          </h1>
          <p className="mt-4 text-lg text-orange-900/80 max-w-xl">
            SunnyBites brings a playful, vibrant twist to everyday meals. Explore a curated menu of comfort classics with a bright, citrusy vibe.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#order" className="px-5 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg shadow-orange-200 hover:bg-orange-600 transition">
              Order Now
            </a>
            <a href="#menu" className="px-5 py-3 rounded-full bg-white text-orange-700 font-semibold border border-orange-200 hover:bg-orange-50 transition">
              Browse Menu
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-500" size={18} />
              <span className="text-orange-900">4.9 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="text-orange-500" size={18} />
              <span className="text-orange-900">Fast delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-amber-600" size={18} />
              <span className="text-orange-900">Open 7am–11pm</span>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] order-1 lg:order-2">
          <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-orange-200/60 shadow-2xl">
            <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-orange-100/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
