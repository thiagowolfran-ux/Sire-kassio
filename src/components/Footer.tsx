import { Facebook, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, FormEvent, ChangeEvent } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'O nome é obrigatório.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'O e-mail é obrigatório.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Insira um e-mail válido.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'A mensagem é obrigatória.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormStatus('submitting');
    
    const { name, email, message } = formData;

    // Create mailto link
    const subject = encodeURIComponent(`Novo contato pelo site: ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`);
    
    // Simulate API call for UX
    setTimeout(() => {
      window.location.href = `mailto:filtrosdagua@hotmail.com?subject=${subject}&body=${body}`;
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 800);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <footer id="about" className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left"
        >
          {/* Brand & Social */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-cyan text-sm font-semibold uppercase mb-4 tracking-wider">Compras e varejo</p>
            <p className="text-gray-300 leading-relaxed max-w-xs mb-8">
              Há 35 anos cuidando da água que você consome. Especialistas em purificação e climatização de ambientes.
            </p>
            <h3 className="text-lg font-display font-bold mb-4 text-white">Siga-nos</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/filtros_dagua/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-cyan hover:border-cyan transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-cyan hover:border-cyan transition-all duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-display font-bold mb-6 text-white">Contate-nos</h3>
            <ul className="space-y-4 w-full max-w-xs md:max-w-none">
              <li className="flex items-start gap-3 text-gray-300 justify-center md:justify-start">
                <MapPin className="text-cyan shrink-0 mt-1" size={18} />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Curitiba%2C+382+-+B.+Nova+Bras%C3%ADlia%2C+Ji-Paran%C3%A1+-+RO%2C+76908-394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-cyan transition-colors text-left"
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
                <span className="text-sm">filtrosdagua@hotmail.com</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h3 className="text-xl font-display font-bold mb-6 text-white">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4" noValidate>
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu Nome" 
                  className={`w-full bg-white/5 border ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-white/10 focus:border-cyan focus:ring-cyan'} rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1 text-left">{errors.name}</p>}
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu E-mail" 
                  className={`w-full bg-white/5 border ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-white/10 focus:border-cyan focus:ring-cyan'} rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1 text-left">{errors.email}</p>}
              </div>
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua Mensagem" 
                  rows={3}
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-white/10 focus:border-cyan focus:ring-cyan'} rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors resize-none`}
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs mt-1 text-left">{errors.message}</p>}
              </div>
              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className="w-full bg-cyan text-navy font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-cyan/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? (
                  <span className="animate-pulse">Enviando...</span>
                ) : formStatus === 'success' ? (
                  <span>Mensagem Enviada!</span>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-xs tracking-wide">
            © 2026 Filtros D'Agua. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
