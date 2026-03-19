import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import DetailedServices from './components/DetailedServices';
import ProductShowcase from './components/ProductShowcase';
import PromoBanner from './components/PromoBanner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <DetailedServices />
        <ProductShowcase />
        <PromoBanner />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
