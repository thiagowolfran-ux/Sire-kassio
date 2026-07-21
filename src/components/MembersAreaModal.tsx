import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, LogIn, LogOut, Droplets, Calendar, ShieldCheck, Eye, EyeOff, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

interface MembersAreaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MembersAreaModal({ isOpen, onClose }: MembersAreaModalProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  
  // Dashboard mock data (with customizable dynamic updates)
  const [filterLife, setFilterLife] = useState(82); // percentage
  const [activePurifier, setActivePurifier] = useState('Everest Star - Cozinha');
  
  // Load login state
  useEffect(() => {
    const savedUser = localStorage.getItem('member_user');
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setName(parsed.name || 'Cliente');
      setEmail(parsed.email);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    // Simulate successful login
    const mockName = email.split('@')[0];
    const capitalizedName = mockName.charAt(0).toUpperCase() + mockName.slice(1);
    const userData = { name: capitalizedName, email };
    
    localStorage.setItem('member_user', JSON.stringify(userData));
    setName(capitalizedName);
    setIsLoggedIn(true);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return;
    
    const userData = { name, email, phone };
    localStorage.setItem('member_user', JSON.stringify(userData));
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('member_user');
    setIsLoggedIn(false);
    setIsRegistering(false);
    setEmail('');
    setPassword('');
    setName('');
    setPhone('');
  };

  // Calculate days remaining based on filter percentage (assuming 180 days total life)
  const daysRemaining = Math.round((filterLife / 100) * 180);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-navy transition-colors p-1.5 rounded-full hover:bg-gray-100"
              aria-label="Fechar modal"
            >
              <X size={20} />
            </button>

            {/* Content Area */}
            <div className="p-6 md:p-8">
              {!isLoggedIn ? (
                /* Auth Screen */
                <div>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan/10 text-cyan mb-3">
                      <User size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-navy">
                      {isRegistering ? 'Criar Conta de Membro' : 'Área de Membros'}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {isRegistering 
                        ? 'Cadastre-se para acompanhar a saúde do seu filtro'
                        : 'Acesse seu painel exclusivo de cliente'
                      }
                    </p>
                  </div>

                  <form onSubmit={isRegistering ? handleRegister : handleLogin} className="space-y-4">
                    {isRegistering && (
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                          Nome Completo
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ex: Thiago Wolfran"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-sm"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                        E-mail
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ex: seuemail@gmail.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-sm"
                      />
                    </div>

                    {isRegistering && (
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                          Telefone (opcional)
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Ex: (69) 99999-9999"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-sm"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                        Senha
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full px-4 py-2.5 pr-10 rounded-lg border border-gray-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-cyan hover:bg-cyan/90 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2 shadow-sm"
                    >
                      <LogIn size={18} />
                      {isRegistering ? 'Cadastrar e Acessar' : 'Entrar no Painel'}
                    </button>
                  </form>

                  <div className="text-center mt-6 pt-6 border-t border-gray-100 text-sm">
                    {isRegistering ? (
                      <p className="text-gray-600">
                        Já possui uma conta?{' '}
                        <button
                          onClick={() => setIsRegistering(false)}
                          className="text-cyan font-semibold hover:underline"
                        >
                          Fazer Login
                        </button>
                      </p>
                    ) : (
                      <p className="text-gray-600">
                        Novo por aqui?{' '}
                        <button
                          onClick={() => setIsRegistering(true)}
                          className="text-cyan font-semibold hover:underline"
                        >
                          Criar Conta Grátis
                        </button>
                      </p>
                    )}
                    <p className="text-xs text-gray-400 mt-3 italic">
                      Dica: Digite qualquer e-mail e senha para testar!
                    </p>
                  </div>
                </div>
              ) : (
                /* Member Dashboard */
                <div className="space-y-6">
                  {/* Dashboard Header */}
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Bem-vindo de volta</p>
                      <h4 className="text-xl font-bold text-navy">Olá, {name}!</h4>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-50/50 flex items-center gap-1.5 text-xs font-semibold"
                      title="Sair da Conta"
                    >
                      <LogOut size={16} />
                      Sair
                    </button>
                  </div>

                  {/* Filter Status Panel */}
                  <div className="bg-gradient-to-br from-navy to-navy/90 text-white rounded-xl p-5 shadow-lg relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-10">
                      <Droplets size={140} />
                    </div>

                    <div className="flex justify-between items-start mb-4 relative z-10">
                      <div>
                        <span className="bg-cyan/20 text-cyan text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                          Saúde do Filtro
                        </span>
                        <h5 className="text-base font-semibold mt-2">{activePurifier}</h5>
                      </div>
                      <Droplets className="text-cyan animate-pulse" size={24} />
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2 relative z-10">
                      <div className="flex justify-between text-xs font-semibold">
                        <span>Vida Útil do Refil</span>
                        <span className={filterLife < 20 ? 'text-red-400 font-bold animate-bounce' : 'text-cyan'}>
                          {filterLife}%
                        </span>
                      </div>
                      <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${filterLife}%` }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className={`h-full rounded-full ${
                            filterLife < 20 
                              ? 'bg-red-500' 
                              : filterLife < 50 
                                ? 'bg-amber-500' 
                                : 'bg-cyan'
                          }`}
                        />
                      </div>
                      <div className="flex justify-between text-[11px] text-gray-300">
                        <span>{daysRemaining} dias restantes</span>
                        <span>Recomendado: Trocar a cada 6-12 meses</span>
                      </div>
                    </div>
                  </div>

                  {/* Alert if low filter */}
                  {filterLife < 20 && (
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex gap-3 text-sm text-red-700">
                      <AlertCircle className="shrink-0 text-red-500 mt-0.5" size={18} />
                      <div>
                        <p className="font-semibold">Troca recomendada!</p>
                        <p className="text-xs text-red-600 mt-0.5">Sua água purificada merece a melhor filtragem. Agende uma visita técnica agora mesmo.</p>
                      </div>
                    </div>
                  )}

                  {/* Info Cards Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col justify-between">
                      <div className="text-cyan mb-2">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-semibold uppercase">Última Troca</p>
                        <p className="text-sm font-bold text-navy mt-0.5">14/11/2025</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col justify-between">
                      <div className="text-cyan mb-2">
                        <ShieldCheck size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-semibold uppercase">Garantia Ativa</p>
                        <p className="text-sm font-bold text-green-600 mt-0.5">Até 14/11/2026</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Services Checklist / Timeline */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <h6 className="text-xs font-bold text-navy uppercase tracking-wider mb-3">Histórico de Manutenção</h6>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2.5 text-xs">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={14} />
                        <div>
                          <p className="font-semibold text-gray-800">Instalação e Sanitização do Refil</p>
                          <p className="text-[10px] text-gray-400">Realizado em 14/11/2025</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={14} />
                        <div>
                          <p className="font-semibold text-gray-800">Limpeza Técnica Externa do Painel</p>
                          <p className="text-[10px] text-gray-400">Realizado em 14/05/2025</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-2">
                    <a
                      href={`https://api.whatsapp.com/send/?phone=556934223008&text=Ol%C3%A1!%20Sou%20membro%20do%20portal%20e%20gostaria%20de%20solicitar%20uma%20manuten%C3%A7%C3%A3o%2Ftroca%20de%20refil%20para%20o%20${encodeURIComponent(activePurifier)}.%20Status%20atual%3A%20${filterLife}%25`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm text-sm"
                    >
                      <MessageSquare size={16} />
                      Solicitar Troca de Filtro / Suporte
                    </a>
                    
                    <button
                      onClick={() => setFilterLife(100)}
                      className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 font-semibold py-2.5 px-4 rounded-lg transition-colors text-xs flex items-center justify-center gap-1.5"
                    >
                      <Droplets size={14} className="text-cyan" />
                      Simular Troca de Filtro (Resetar para 100%)
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
