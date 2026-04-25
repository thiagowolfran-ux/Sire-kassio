import { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Purificadores', href: '#purifiers' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre Nós', href: '#about' },
  ];

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/556934223008"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan text-white px-4 sm:px-6 py-3 rounded-full flex items-center gap-2 font-semibold shadow-md hover:bg-cyan/90 transition-all"
            >
              <MessageCircle size={20} />
              <span className="hidden sm:inline">Contato via WhatsApp</span>
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-navy hover:text-cyan transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-navy font-medium text-xl hover:text-cyan transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
