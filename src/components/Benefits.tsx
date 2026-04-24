import { ShieldCheck, Zap, Droplets } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: Droplets,
    title: "Purificação Completa",
    description: "Purificadores, bebedouros industriais e refis originais para garantir a melhor água."
  },
  {
    icon: ShieldCheck,
    title: "Ar Condicionado",
    description: "Venda, instalação e manutenção de sistemas de climatização para seu conforto total."
  },
  {
    icon: Zap,
    title: "Instalação e Manutenção",
    description: "Equipe técnica especializada para garantir o funcionamento perfeito de seus equipamentos."
  }
];

export default function Benefits() {
  return (
    <section id="services" className="bg-navy py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group text-center flex flex-col items-center border border-navy/10 rounded-2xl p-8 bg-white transition-all duration-300 hover:border-cyan hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-cyan/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan transition-colors duration-300">
                <benefit.icon className="text-cyan w-8 h-8 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 group-hover:text-cyan transition-colors duration-300">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
