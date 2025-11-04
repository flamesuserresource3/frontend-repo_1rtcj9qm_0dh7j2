import { useState } from 'react';
import { Utensils, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-orange-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-md">
            <Utensils size={18} />
          </span>
          <span className="font-semibold text-lg tracking-tight text-orange-700">SunnyBites</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-sm font-medium text-orange-800 hover:text-orange-600">Menu</a>
          <a href="#features" className="text-sm font-medium text-orange-800 hover:text-orange-600">Why Us</a>
          <a href="#contact" className="text-sm font-medium text-orange-800 hover:text-orange-600">Contact</a>
          <a href="#order" className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold shadow hover:bg-orange-600 transition">Order Now</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md text-orange-700 hover:bg-orange-100">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-orange-200 bg-white/80">
          <div className="px-4 py-3 space-y-2">
            <a onClick={() => setOpen(false)} href="#menu" className="block text-orange-800">Menu</a>
            <a onClick={() => setOpen(false)} href="#features" className="block text-orange-800">Why Us</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block text-orange-800">Contact</a>
            <a onClick={() => setOpen(false)} href="#order" className="inline-block px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold shadow">Order Now</a>
          </div>
        </div>
      )}
    </header>
  );
}
