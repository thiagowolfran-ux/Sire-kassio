import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://drive.google.com/thumbnail?id=1EiBxpxJDOsTVCxaUE31eDjINeHi1K8bl&sz=w1000",
  "https://drive.google.com/thumbnail?id=1cO88hnvSfOrhAyaWsOe9Ul7mWi0pvpA3&sz=w1000",
  "https://drive.google.com/thumbnail?id=1z-ZoFt24nbs_LUEGnMqKnandk72mAzOJ&sz=w1000",
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000); // 6 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Nossa Empresa
          </h2>
          <p className="text-lg text-gray-600">
            Conheça um pouco mais sobre nossa estrutura e nosso dia a dia.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Galeria de fotos ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="text-navy" size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Próxima foto"
          >
            <ChevronRight className="text-navy" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-cyan w-6"
                    : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Ir para a foto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
