import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import dergikapak from '../assets/beyaz-dergi.jpg';

const Dergi = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true); // İlk kez görünür olduğunda animasyonu başlat
        }
      },
      { threshold: 0.5 } // Öğenin %50'si görünür olduğunda tetiklenmesi için
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observer'ı öğeye uyguluyoruz
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current); // Temizleme işlemi
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="mt-20 flex flex-col items-center px-4 sm:px-8 lg:px-20">
      <motion.h2
        className="text-4xl font-bold text-gray-900 py-5 text-center mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Dergi Köşesi
      </motion.h2>
      <motion.p 
        className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        En güncel dergilerdeki, en güncel makaleleri okuyarak bilginize bilgi katın! Aşağıdaki yere basarak okumaya gidin.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden max-w-6xl w-full border border-gray-300"
        initial={{ opacity: 0, x: -100 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={dergikapak}
          alt="Dergi Kapak"
          className="w-full sm:w-2/4 h-auto object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        />
        <div className="p-8 flex flex-col justify-center sm:w-2/3 shadow-xl">
          <motion.h3
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Küresel Isınma ve Gelecek: Sera Gazları, Etkiler ve Çözüm Yolları
          </motion.h3>
          <motion.p
            className="text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Bu dergide, küresel ısınmanın gezegenimiz üzerindeki uzun vadeli etkilerini inceleyen kapsamlı makaleler bir araya getirilmektedir. Sera gazlarının artan salınımı, iklim değişiklikleri ve çevresel bozulma üzerine yapılan bilimsel araştırmalar, bu küresel sorunun çözümüne yönelik yenilikçi yaklaşımlarla birleştirilmektedir. Çevre bilincini artırmak ve geleceğe yönelik sürdürülebilir çözümler geliştirmek amacıyla, bilim insanları ve uzmanların katkılarıyla bu dergi, küresel ısınma hakkında derinlemesine bilgi sunmayı hedeflemektedir.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Dergi;
