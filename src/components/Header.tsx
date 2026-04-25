import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Purificadores', href: '#purifiers' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre Nós', href: '#about' },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-1' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'min-h-[80px]' : 'min-h-[140px] py-2'}`}>
          {/* Logo */}
          <div className="flex items-center gap-2 relative transition-all duration-300" style={{ height: isScrolled ? '70px' : '120px' }}>
            {!isLogoLoaded && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-md"></div>
            )}
            <img 
              src="https://drive.google.com/thumbnail?id=10x77eXiYm89tPvDwK25eh8PtI2bJgHsP&sz=w1000" 
              alt="Logo Filtros D'Agua" 
              className={`w-auto max-w-[250px] object-contain transition-all duration-300 ${isScrolled ? 'h-[70px]' : 'h-[120px]'} ${isLogoLoaded ? 'opacity-100' : 'opacity-0'}`}
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
              className={`bg-cyan text-white px-4 sm:px-6 rounded-full flex items-center gap-2 font-semibold shadow-md hover:bg-cyan/90 transition-all duration-300 ${isScrolled ? 'py-2 text-sm' : 'py-3'}`}
            >
              <MessageCircle size={isScrolled ? 18 : 20} />
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
