import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-orange-50 to-white border-t border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-orange-700 font-extrabold text-xl">SunnyBites</h3>
          <p className="mt-2 text-orange-900/80">Playful plates, bright flavors, and feel-good meals delivered fast.</p>
        </div>
        <div>
          <h4 className="text-orange-700 font-semibold">Visit</h4>
          <p className="mt-2 flex items-start gap-2 text-orange-900/80">
            <MapPin className="text-orange-500 shrink-0" size={18} />
            123 Citrus Ave, Sunshine City
          </p>
        </div>
        <div>
          <h4 className="text-orange-700 font-semibold">Contact</h4>
          <p className="mt-2 flex items-center gap-2 text-orange-900/80"><Phone className="text-orange-500" size={18} /> (555) 123-4567</p>
          <p className="mt-1 flex items-center gap-2 text-orange-900/80"><Mail className="text-orange-500" size={18} /> hello@sunnybites.app</p>
        </div>
        <div>
          <h4 className="text-orange-700 font-semibold">Hours</h4>
          <p className="mt-2 text-orange-900/80">Mon–Sun: 7:00 AM – 11:00 PM</p>
          <a href="#order" className="mt-4 inline-block px-4 py-2 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition">Order Now</a>
        </div>
      </div>
      <div className="border-t border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-orange-900/70 flex items-center justify-between">
          <span>© {new Date().getFullYear()} SunnyBites</span>
          <span>Made with sunshine and oranges</span>
        </div>
      </div>
    </footer>
  );
}
