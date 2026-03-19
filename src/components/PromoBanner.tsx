import { motion } from 'motion/react';

export default function PromoBanner() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-navy rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
            Está na hora de trocar seu refil?
          </h2>
          <p className="text-cyan text-lg font-medium">
            Ganhe 15% de desconto em cartuchos de reposição originais este mês!
          </p>
        </div>
        <motion.a
          href="https://api.whatsapp.com/send/?phone=556934223008&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-cyan text-navy px-8 py-4 rounded-xl font-bold text-lg whitespace-nowrap shadow-lg inline-block text-center"
        >
          Resgatar Desconto Agora
        </motion.a>
      </motion.div>
    </section>
  );
}
