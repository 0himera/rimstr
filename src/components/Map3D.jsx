import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Map3D = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedApartment, setSelectedApartment] = useState(null);

  const apartments = [
    { id: 1, name: 'Студия', floorPlan: '/floor3d (1).jpg', position: { top: '75%', left: '42%' } },
    { id: 2, name: '1 комн', floorPlan: '/floor3d (3).jpg', position: { top: '62%', left: '55%' } },
    { id: 3, name: '2 комн', floorPlan: '/floor3d (2).jpg', position: { top: '53%', left: '28%' } },
  ];

  const handleMarkerClick = (apartment) => {
    setSelectedApartment(apartment);
  };

  const closeModal = () => {
    setSelectedApartment(null);
  };

  return (
    <section className="py-20 bg-white text-grafit-100">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">Карта комплекса</h2>

          <div className="relative bg-gray-100 rounded-lg h-[600px] flex items-center justify-center">
            <img src="complex.png" alt="Complex" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
            {apartments.map((apartment) => (
              <button
                key={apartment.id}
                className="absolute bg-grafit-100 hover:bg-primary-600 easy-in duration-500 text-white p-2 rounded-full cursor-pointer"
                style={{ top: apartment.position.top, left: apartment.position.left }}
                onClick={() => handleMarkerClick(apartment)}
              >
                {apartment.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedApartment && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl w-full relative overflow-hidden flex flex-col items-center"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full p-1"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedApartment.name}</h3>
            <img src={selectedApartment.floorPlan} alt={`${selectedApartment.name} Floor Plan`} className="max-h-[80vh] w-auto object-contain rounded-lg shadow-md" />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Map3D;