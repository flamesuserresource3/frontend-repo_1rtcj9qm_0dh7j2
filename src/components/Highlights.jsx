import { Flame, Salad, Coffee, IceCream, Star } from 'lucide-react';

const items = [
  {
    icon: Flame,
    title: 'Spiced Orange Bowls',
    desc: 'Zesty grains, roasted veggies, and citrus glaze.',
    badge: 'Best Seller',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: Salad,
    title: 'Sunshine Salads',
    desc: 'Crisp greens with tangy mandarin and seeds.',
    badge: 'Fresh',
    color: 'from-yellow-400 to-orange-400'
  },
  {
    icon: Coffee,
    title: 'Golden Lattes',
    desc: 'Creamy turmeric spice with honey foam.',
    badge: 'New',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: IceCream,
    title: 'Citrus Swirl',
    desc: 'Vanilla soft serve with orange zest ripple.',
    badge: 'Sweet',
    color: 'from-yellow-500 to-orange-600'
  }
];

export default function Highlights() {
  return (
    <section id="menu" className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-700">Menu Highlights</h2>
            <p className="mt-2 text-orange-900/80 max-w-2xl">
              Bright, playful plates designed to spark joy. Crafted daily with local, seasonal ingredients.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-yellow-700">
            <Star className="fill-yellow-400 text-yellow-400" size={18} />
            <Star className="fill-yellow-400 text-yellow-400" size={18} />
            <Star className="fill-yellow-400 text-yellow-400" size={18} />
            <Star className="fill-yellow-400 text-yellow-400" size={18} />
            <Star className="fill-yellow-400 text-yellow-400" size={18} />
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc, badge, color }) => (
            <article key={title} className="group relative overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm hover:shadow-lg transition">
              <div className={`absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-br ${color} opacity-20 group-hover:opacity-30 blur-2xl`} />
              <div className="p-5">
                <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
                  {badge}
                </span>
                <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-200 to-orange-200 text-orange-700">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-bold text-lg text-orange-800">{title}</h3>
                <p className="mt-1 text-sm text-orange-900/80">{desc}</p>
                <button className="mt-4 w-full px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow hover:opacity-95 transition">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
