import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Purificador de Água Soft by Everest",
    image: "https://drive.google.com/thumbnail?id=1TCHDWTTutGVfHQjIHuYeAawcF_87S_CX&sz=w1000",
    description: "Design moderno e eficiência para sua casa ou escritório. O Soft by Everest traz o melhor da refrigeração por compressor com alta capacidade e economia de energia.",
    features: [
      "Água gelada e natural",
      "Alta capacidade de refrigeração",
      "Baixo consumo de energia",
      "Diversas opções de cores"
    ]
  },
  {
    id: 2,
    name: "Purificador de Água Latina PA355",
    image: "https://drive.google.com/thumbnail?id=1HcjWeF97J1aDDAO_wvGFpKlAPVCqXlwV&sz=w1000",
    description: "Ideal para garantir água pura e na temperatura certa. O Latina PA355 conta com sistema eletrônico de refrigeração, sendo perfeito para uso residencial.",
    features: [
      "Sistema de refrigeração eletrônico",
      "Painel com indicadores LED",
      "Filtro com troca fácil",
      "Água refrigerada e natural"
    ]
  },
  {
    id: 3,
    name: "Refil Purificador de Água Facile C5",
    image: "https://drive.google.com/thumbnail?id=1WgrDrE59pByLYLLHuV9mDd_9KM009RF9&sz=w1000",
    description: "A garantia de manter sua água sempre pura. O Refil Facile C5 elimina sabores e odores desagradáveis, retendo partículas e impurezas com máxima eficiência.",
    features: [
      "Alta capacidade de filtração",
      "Redução de cloro livre",
      "Retenção de partículas",
      "Fácil instalação e substituição"
    ]
  },
  {
    id: 4,
    name: "Máquina de Gaseificar água Fizzly Elegance",
    image: "https://drive.google.com/thumbnail?id=1qXSW7pFJOkm8WJGCS88TMsIfi_jYQzeB&sz=w1000",
    description: "Transforme sua água comum em água com gás de forma rápida e prática. A Fizzly Elegance traz um design premium e sofisticação para sua cozinha.",
    features: [
      "Gaseificação instantânea",
      "Design premium Elegance",
      "Não requer energia elétrica",
      "Sustentabilidade em cada copo"
    ]
  }
];

export default function ProductShowcase() {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  // Busca o nome do produto com base no ID selecionado e exibe no título da página
  useEffect(() => {
    if (selectedProductId !== null) {
      const selectedProduct = products.find(product => product.id === selectedProductId);
      if (selectedProduct) {
        document.body.style.overflow = 'hidden'; // Evita scroll atrás do modal
        document.title = `${selectedProduct.name} | Filtros D'Agua`;
      }
    } else {
      document.body.style.overflow = 'auto';
      document.title = "Filtros D'Agua - Purificação e Climatização";
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.title = "Filtros D'Agua - Purificação e Climatização";
    };
  }, [selectedProductId]);

  const selectedProduct = products.find(p => p.id === selectedProductId);

  return (
    <section id="purifiers" className="bg-white py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Mais vendidos
          </h2>
          <div className="w-20 h-1 bg-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              onClick={() => setSelectedProductId(product.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0px 12px 32px rgba(10, 35, 66, 0.12)"
              }}
              className="group product-card bg-white rounded-xl p-6 flex flex-col cursor-pointer border-2 transition-colors border-transparent hover:border-cyan"
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-navy font-semibold text-lg mb-6">{product.name}</h3>
              <div className="mt-auto w-full py-3 border-2 border-navy text-navy font-bold rounded-lg group-hover:bg-navy group-hover:text-white transition-all text-center inline-block pointer-events-none">
                Detalhes
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pt-20 pb-4 md:p-6">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProductId(null)}
              className="fixed inset-0 bg-navy/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              className="bg-white rounded-2xl w-full max-w-4xl relative z-10 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProductId(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 hover:text-navy"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row h-full overflow-y-auto">
                {/* Image Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center bg-gray-50">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full max-w-sm h-auto object-contain drop-shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-navy mb-4 pr-10">
                    {selectedProduct.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  <div className="mb-8 flex-grow">
                    <h4 className="font-bold text-navy mb-4 font-display">Principais Características:</h4>
                    <ul className="space-y-3">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 bg-cyan/10 text-cyan flex items-center justify-center rounded-full">
                            <Check className="w-3 h-3" strokeWidth={3} />
                          </span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <a 
                      href={`https://api.whatsapp.com/send/?phone=556934223008&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20${encodeURIComponent(selectedProduct.name)}.&type=phone_number&app_absent=0`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-6 py-4 bg-navy text-white text-lg font-bold rounded-xl hover:bg-cyan hover:text-navy transition-colors transform hover:-translate-y-1"
                    >
                      Comprar agora no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
