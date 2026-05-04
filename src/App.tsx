import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import DetailedServices from './components/DetailedServices';
import ProductShowcase from './components/ProductShowcase';
import VideoSection from './components/VideoSection';
import PromoBanner from './components/PromoBanner';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { SEO } from './components/SEO';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <DetailedServices />
        <VideoSection />
        <ProductShowcase />
        <PromoBanner />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
