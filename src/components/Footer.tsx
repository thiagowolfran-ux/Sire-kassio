import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer id="about" className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left"
        >
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-cyan text-sm font-semibold uppercase mb-4 tracking-wider">Compras e varejo</p>
            <p className="text-gray-300 leading-relaxed max-w-xs">
              Há 35 anos cuidando da água que você consome. Especialistas em purificação e climatização de ambientes.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-display font-bold mb-6 text-white">Contate-nos</h3>
            <ul className="space-y-4 w-full max-w-xs md:max-w-none">
              <li className="flex items-start gap-3 text-gray-300 justify-center md:justify-start">
                <MapPin className="text-cyan shrink-0 mt-1" size={18} />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Curitiba%2C+382+-+B.+Nova+Bras%C3%ADlia%2C+Ji-Paran%C3%A1+-+RO%2C+76908-394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-cyan transition-colors"
                >
                  Rua Curitiba, 382 - B. Nova Brasília, Ji-Paraná - RO, 76908-394
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 justify-center md:justify-start">
                <Phone className="text-cyan shrink-0" size={18} />
                <span className="text-sm">(69) 3422-3008</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 justify-center md:justify-start">
                <Mail className="text-cyan shrink-0" size={18} />
                <span className="text-sm">contato@filtrosdagua.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-display font-bold mb-6 text-white">Siga-nos</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/filtros_dagua/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-cyan hover:border-cyan transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-cyan hover:border-cyan transition-all duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-xs tracking-wide">
            © 2024 Filtros D'Agua. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
