import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

const faqItems = [
  {
    question: "What makes Swastak Spices unique?",
    answer: "Swastak Spices stand out for their purity, authentic flavors, and farm-fresh sourcing. Each spice is carefully handpicked, hygienically processed, and packed to preserve its natural aroma and taste — without any artificial colors or preservatives."
  },
  {
    question: "Are Swastak Spices 100% natural?",
    answer: "Yes! All our spices are 100% natural, chemical-free, and contain no artificial additives or MSG. We ensure premium quality through strict testing and FSSAI-certified production standards."
  },
  {
    question: "Where do you source your spices from?",
    answer: "Our spices come directly from trusted farmers across India — from Kerala’s cardamom plantations to Andhra Pradesh’s turmeric farms. We believe in supporting local growers while maintaining quality and freshness."
  },
  {
    question: "Do you sell both whole and blended spices?",
    answer: "Yes, Swastak Spices offers a full range including whole spices, ground powders, and blended masalas like Garam Masala, Chaat Masala, and Sabzi Masala — all made to enhance everyday cooking."
  },
  {
    question: "How should I store Swastak Spices at home?",
    answer: "Store your spices in a cool, dry place away from sunlight and moisture. Seal the pack tightly after each use to keep the aroma and freshness intact."
  },
  {
    question: "Can I buy Swastak Spices online?",
    answer: "Absolutely! You can purchase our spices through the official Swastak Spices website and leading e-commerce platforms like Amazon and Flipkart."
  },
  {
    question: "Do you take bulk or wholesale orders?",
    answer: "Yes, we provide bulk, wholesale, and export options. For business inquiries, please contact us through our website or email us at support@swastakspices.com."
  }
];



  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
         <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-3xl font-extrabold mb-3 tracking-tight">
          <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
        🌿 Frequently Asked
          </span>
          
          <span className="text-orange-500 pl-2">Questions </span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 to-orange-500 mx-auto mt-6 rounded-full"/>
      </motion.div>
      
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <motion.button
              className="w-full py-6 flex justify-between items-center text-left"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span className="text-lg">{item.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-gray-600">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;