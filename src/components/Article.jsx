import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ArticlesSection = () => {
  const articles = [
    {
      image: "https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg",
      title: "Küresel Isınma ve Gelecek: Sera Gazları, Etkiler ve Çözüm Yolları",
      content: "Bu dergide, küresel ısınmanın gezegenimiz üzerindeki uzun vadeli etkilerini inceleyen kapsamlı makaleler bir araya getirilmektedir.",
      updated: "3 mins ago",
    },
    {
      image: "https://tecdn.b-cdn.net/wp-content/uploads/2020/06/horizontal.jpg", // Example horizontal image
      title: "Card Title 2",
      content: "This is the content for the second card.  It's also flexible in length.",
      updated: "10 mins ago",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
  <div className="mt-10 py-10 px-5">
      <motion.h3 className="text-4xl font-bold text-gray-900 py-5 text-center mb-2">Makaleler</motion.h3>
      <motion.p 
        className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        En güncel dergilerdeki, en güncel makaleleri okuyarak bilginize bilgi katın! Aşağıdaki yere basarak okumaya gidin.
      </motion.p> {/* Title added here */}
    <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-x-12"> {/* Responsive grid */} 
      {articles.map((article, index) => (
        <div key={index} className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden"> {/* Added overflow-hidden */}
          <img
            className="w-full h-auto object-cover md:h-48 lg:h-80"  
            src={article.image}
            alt={article.title}
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-black">
              {article.title}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-black">
              {article.content} 
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-900">
              Last updated {article.updated}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ArticlesSection;

