import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[140px] py-2">
          {/* Logo */}
          <div className="flex items-center gap-2 relative h-[120px] min-w-[150px]">
            {!isLogoLoaded && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-md"></div>
            )}
            <img 
              src="https://drive.google.com/thumbnail?id=10x77eXiYm89tPvDwK25eh8PtI2bJgHsP&sz=w1000" 
              alt="Logo Filtros D'Agua" 
              className={`h-[120px] w-auto max-w-[250px] object-contain transition-opacity duration-300 ${isLogoLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setIsLogoLoaded(true)}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="nav-link">Início</a>
            <a href="#purifiers" className="nav-link">Purificadores</a>
            <a href="#services" className="nav-link">Serviços</a>
            <a href="#about" className="nav-link">Sobre Nós</a>
          </nav>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/556934223008"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold shadow-md hover:bg-cyan/90 transition-all"
          >
            <MessageCircle size={20} />
            <span className="hidden sm:inline">Contato via WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </header>
  );
}
