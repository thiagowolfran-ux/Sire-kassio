import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-navy mb-4"
          >
            Conheça Mais Sobre Nossa Qualidade
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Assista ao vídeo e descubra por que somos a escolha número um em purificadores e bebedouros há mais de 35 anos.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl aspect-video bg-navy flex items-center justify-center group"
        >
          {/* Vídeo do YouTube com autoplay, mudo (obrigatório para autoplay) e loop */}
          <iframe
            className="absolute inset-0 w-full h-full pointer-events-none"
            src="https://www.youtube.com/embed/8KuiheYDY20?autoplay=1&mute=1&loop=1&playlist=8KuiheYDY20&controls=0&showinfo=0&rel=0"
            title="Vídeo Institucional"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
