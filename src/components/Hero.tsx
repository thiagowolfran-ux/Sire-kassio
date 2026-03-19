import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan font-bold tracking-widest text-sm uppercase mb-4 block">
              DESDE 1989
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              <span className="text-cyan">Água Pura</span> & Saúde para sua Família há <span className="text-cyan">35 Anos</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Purificadores, bebedouros industriais e refis originais. Especialistas também em ar condicionado, manutenção e instalação.
            </p>
            <motion.a
              href="https://api.whatsapp.com/send/?phone=556934223008&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-navy text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-white hover:text-navy border-2 border-transparent hover:border-navy transition-all"
            >
              Ver Ofertas Especiais
            </motion.a>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 lg:mt-0 relative"
          >
            <div className="relative z-10">
              <img
                src="https://lh3.googleusercontent.com/d/1qjEP8wtf3EQgzw2-W202raY3hU4YT3bs"
                alt="Purificador de Água"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-navy/5 rounded-full blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
