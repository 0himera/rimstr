import React from 'react';
import { motion } from 'framer-motion';

const MainBanner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="lh1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-full flex items-center justify-center text-center px-4"
      >
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
           Апарт-комплекс<br/>"Алые паруса"
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
            Идеальное сочетание комфорта и утонченности
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MainBanner;