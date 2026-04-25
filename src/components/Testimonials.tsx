import { motion } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Cliente Residencial",
    content: "Excelente atendimento! O purificador Soft que comprei é maravilhoso e a instalação foi super rápida. Recomendo muito a Filtros D'Agua.",
    image: "https://picsum.photos/seed/person1/100/100"
  },
  {
    id: 2,
    name: "João Pereira",
    role: "Empresário",
    content: "Instalamos bebedouros industriais na nossa fábrica e o suporte técnico é impecável. Água sempre gelada e pura para todos os colaboradores.",
    image: "https://picsum.photos/seed/person2/100/100"
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Cliente Residencial",
    content: "Sempre compro meus refis aqui. São originais e o preço é justo. O atendimento pelo WhatsApp facilita muito a vida.",
    image: "https://picsum.photos/seed/person3/100/100"
  },
  {
    id: 4,
    name: "Ricardo Santos",
    role: "Arquiteto",
    content: "Como arquiteto, prezo muito pelo design e funcionalidade. Os purificadores da Filtros D'Agua unem as duas coisas perfeitamente.",
    image: "https://picsum.photos/seed/person4/100/100"
  },
  {
    id: 5,
    name: "Carla Oliveira",
    role: "Dona de Casa",
    content: "A manutenção do meu ar condicionado ficou perfeita. Equipe muito educada e limpa. Minha casa está fresquinha agora!",
    image: "https://picsum.photos/seed/person5/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-light-gray py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="w-20 h-1 bg-cyan mx-auto rounded-full"></div>
        </div>

        <div className="relative px-4 sm:px-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm relative h-full flex flex-col"
                >
                  <Quote className="absolute top-6 right-8 text-cyan/10 w-12 h-12" />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-cyan/20"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <h4 className="font-bold text-navy">{testimonial.name}</h4>
                      <p className="text-xs text-cyan font-semibold uppercase tracking-wider">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 italic leading-relaxed flex-grow">
                    "{testimonial.content}"
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-navy hover:bg-cyan hover:text-white transition-all cursor-pointer hidden sm:flex">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-navy hover:bg-cyan hover:text-white transition-all cursor-pointer hidden sm:flex">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
