import { motion } from 'motion/react';

const services = [
  {
    title: "Manutenção de Ar Condicionado",
    description: "Serviço completo de limpeza, recarga de gás e reparos técnicos para garantir que seu ambiente esteja sempre fresco e saudável. Nossa equipe é especializada em diversas marcas e modelos.",
    image: "https://lh3.googleusercontent.com/d/12ZTws_ZMtmquRa6wgpfclahKdUQviAUq",
    alt: "Técnico realizando manutenção em ar condicionado"
  },
  {
    title: "Manutenção por Período",
    description: "Equipe pronta e preparada para a troca de refis e higienização de purificadores. Garantimos que sua família ou empresa consuma sempre água da mais alta qualidade, sem preocupações com prazos.",
    image: "https://lh3.googleusercontent.com/d/1A6wCKlwF7fvK9LMqbkpWaMo8_tHtm4VD",
    alt: "Filtro de água sendo trocado",
    imagePosition: "object-[center_15%]"
  },
  {
    title: "Vendas Personalizadas",
    description: "Consultoria técnica para identificar a real necessidade do seu espaço. Não vendemos apenas produtos, entregamos a solução ideal em purificação e climatização baseada no seu consumo e ambiente.",
    image: "https://lh3.googleusercontent.com/d/1TnHmu9wpMDjgE4Ebezrsrb1ad8PiKNIi",
    alt: "Consultor conversando com cliente"
  },
  {
    title: "Suporte e Garantia",
    description: "Oferecemos suporte técnico pós-venda dedicado e garantia estendida em nossos serviços e produtos. Sua tranquilidade é nossa prioridade número um há mais de 35 anos.",
    image: "https://lh3.googleusercontent.com/d/1XQ2hLP2uT6Yd47cgwyI0tCkFtSj8wmv-",
    alt: "Equipe de suporte ao cliente",
    imageFit: "object-contain bg-gray-50"
  }
];

export default function DetailedServices() {
  return (
    <section id="detailed-services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Serviços Especializados para Você
          </h2>
          <div className="w-20 h-1 bg-cyan mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Soluções completas em purificação de água e climatização, com a confiança de quem entende do assunto.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              {/* Image Column */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="w-full lg:w-1/2"
              >
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img 
                      src={service.image} 
                      alt={service.alt}
                      className={`w-full h-[400px] ${service.imageFit || 'object-cover'} ${service.imagePosition || 'object-center'}`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                  {/* Decorative background element */}
                  <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-full h-full bg-cyan/5 rounded-2xl -z-10`}></div>
                </div>
              </motion.div>

              {/* Text Column */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
                  visible: { 
                    opacity: 1, 
                    x: 0, 
                    transition: { 
                      duration: 0.8, 
                      ease: "easeOut",
                      staggerChildren: 0.2,
                      delayChildren: 0.2
                    } 
                  }
                }}
                className="w-full lg:w-1/2 text-center lg:text-left"
              >
                <motion.h3 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="text-2xl md:text-3xl font-display font-bold text-navy mb-6"
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="text-lg text-gray-600 leading-relaxed mb-8"
                >
                  {service.description}
                </motion.p>
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="flex justify-center lg:justify-start"
                >
                  <a 
                    href="https://api.whatsapp.com/send/?phone=556934223008&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-navy font-bold hover:text-cyan transition-colors group"
                  >
                    Saiba mais sobre este serviço
                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
