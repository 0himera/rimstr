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
    { id: 1, name: 'Студия', floorPlan: 'https://0.db-estate.cdn.pik-service.ru/layout/2022/12/19/2_sm_1ns1__3.9-1_s_a_90_zo4JwSk97wXCjfar.svg', position: { top: '58%', left: '30%' } },
    { id: 2, name: '1 комн', floorPlan: 'https://0.db-estate.cdn.pik-service.ru/layout/2023/10/23/13_270_MfeH5hDVNEofHVyR.svg', position: { top: '50%', left: '60%' } },
    { id: 3, name: '2 комн', floorPlan: 'https://0.db-estate.cdn.pik-service.ru/layout/2024/12/13/8_st_2ks_(6.3)t021_8.7x7.2_a_v1_270_ztNQcZAWm2X5hK9d.svg', position: { top: '75%', left: '45%' } },
  ];

  const handleMarkerClick = (apartment) => {
    setSelectedApartment(apartment);
  };

  const closeModal = () => {
    setSelectedApartment(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">3D Complex Map</h2>
          <p className="section-text max-w-3xl mx-auto mb-12">
            Explore our complex in 3D. Click on different areas to view detailed floor plans
            and learn more about each space.
          </p>
          
          <div className="relative bg-gray-100 rounded-lg h-[600px] flex items-center justify-center">
            <img src="complex.png" alt="Complex" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
            {apartments.map((apartment) => (
              <button
                key={apartment.id}
                className="absolute bg-primary-700 hover:bg-primary-600 easy-in duration-500 text-white p-2 rounded-full cursor-pointer"
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
            <button onClick={closeModal} className="bg-primary-700 text-white px-4 py-2 rounded">Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Map3D;