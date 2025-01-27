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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg max-w-lg w-full z-50">
            <h3 className="text-xl mb-4">{selectedApartment.name}</h3>
            <img src={selectedApartment.floorPlan} alt={`${selectedApartment.name} Floor Plan`} className="w-full h-auto mb-4" />
            <button onClick={closeModal} className="bg-primary-700 text-white px-4 py-2 rounded">Закрыть</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Map3D;