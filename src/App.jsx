import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-orange-900">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        {/* Decorative wave divider */}
        <div id="order" className="relative">
          <svg className="w-full h-16 text-orange-50" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
            <path fill="currentColor" d="M0,32L60,26.7C120,21,240,11,360,21.3C480,32,600,64,720,69.3C840,75,960,53,1080,42.7C1200,32,1320,32,1380,32L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
          </svg>
          <section className="py-14 bg-gradient-to-b from-orange-50 to-yellow-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-700">Ready for something sunny?</h3>
              <p className="mt-2 text-orange-900/80 max-w-2xl mx-auto">Order now and get your first delivery free. Bright flavors, quick service, zero hassle.</p>
              <a href="#" className="mt-6 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg hover:opacity-95 transition">Get Free Delivery</a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
