import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
      <div className="flex flex-col items-center justify-center mt-6 lg:mt-20 bg-cover bg-center bg-no-repeat">        
        <motion.h1 
          className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide leading-relaxed"
          initial={{ opacity: 0, y: 50 }} // Başlangıç durumu
          animate={{ opacity: 1, y: 0 }} // Animasyonun bitiş durumu
          transition={{ duration: 1 }} // Animasyon süresi
        >
          <span>Gözlerinle göremediğini</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-blue-900 text-transparent bg-clip-text">
            bilimin ışığı ile keşfet.
          </span>
        </motion.h1>
        
        <motion.p 
          className="mt-10 text-lg text-center text-black max-w-4xl"
          initial={{ opacity: 0, y: 50 }} // Başlangıç durumu
          animate={{ opacity: 1, y: 0 }} // Animasyonun bitiş durumu
          transition={{ duration: 1, delay: 0.5 }} // Animasyon süresi ve gecikme
        >
          Bilimle tanışın ve dünyanızı genişletin! Bio-Matrix, sizi ilham verici makalelerle
          bilimin derinliklerine götürerek, bilginizi artırmanıza ve merakınızı beslemenize
          olanak tanır. Keşfe bugün başlayın ve bilimin büyüsünü deneyimleyin!
        </motion.p>

        <div className="flex justify-center mt-10 text-1xl">
            <div className="flex border border-gray-300 rounded-full overflow-hidden">
                <button className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full focus:outline-none">Dergimiz</button>
                <button className="px-4 py-2 text-gray-700 focus:outline-none">Makaleler</button>
                <button className="px-4 py-2 text-gray-700 focus:outline-none">İletişim</button>
            </div>
        </div>
      </div>
    );
};

export default HeroSection;
