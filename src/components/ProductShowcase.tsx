import { motion } from 'motion/react';

const products = [
  {
    id: 1,
    name: "Purificador de Água Soft by Everest",
    image: "https://drive.google.com/thumbnail?id=1TCHDWTTutGVfHQjIHuYeAawcF_87S_CX&sz=w1000"
  },
  {
    id: 2,
    name: "Purificador de Água Latina PA355",
    image: "https://drive.google.com/thumbnail?id=1HcjWeF97J1aDDAO_wvGFpKlAPVCqXlwV&sz=w1000"
  },
  {
    id: 3,
    name: "Refil Purificador de Água Facile C5",
    image: "https://drive.google.com/thumbnail?id=1WgrDrE59pByLYLLHuV9mDd_9KM009RF9&sz=w1000"
  },
  {
    id: 4,
    name: "Máquina de Gaseificar água Fizzly Elegance",
    image: "https://drive.google.com/thumbnail?id=1qXSW7pFJOkm8WJGCS88TMsIfi_jYQzeB&sz=w1000"
  }
];

export default function ProductShowcase() {
  return (
    <section id="purifiers" className="bg-white py-20">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0px 12px 32px rgba(10, 35, 66, 0.12)"
              }}
              className="product-card bg-white rounded-xl p-6 flex flex-col cursor-pointer"
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-navy font-semibold text-lg mb-6">{product.name}</h3>
              <a 
                href="https://api.whatsapp.com/send/?phone=556934223008&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full py-3 border-2 border-navy text-navy font-bold rounded-lg hover:bg-navy hover:text-white transition-all text-center inline-block"
              >
                Detalhes
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
