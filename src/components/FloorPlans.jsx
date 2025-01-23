import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FloorPlans = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const floorPlans = [
    {
      id: 1,
      name: "Студия",
      size: "32m²",
      image: "/studio32sqr.png"
    },
    {
      id: 2,
      name: "1-комнатная",
      size: "39m²",
      image: "/1com39.png"
    },
    {
      id: 3,
      name: "2-комнатная",
      size: "59m²",
      image: "/2com59sqr2.png"
    },
    {
      id: 4,
      name: "2-комнатная",
      size: "66m²",
      image: "/e2com66sqr2.png"
    },
    {
      id: 5,
      name: "2-комнатная",
      size: "70m²",
      image: "/e2com70sqr2.png"
    }
  ];

  return (
    <section id="floor-plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center mb-12">Планировки</h2>
          
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            className="h-[550px] rounded-lg overflow-hidden"
          >
            {floorPlans.map((plan) => (
              <SwiperSlide key={plan.id}>
                <div className="bg-gray-100 w-[340px] rounded-lg p-3 flex flex-col items-center">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-72 h-72 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between w-72 px-4">
                    <h3 className="text-xl sm:text-2xl font-bold">{plan.name}</h3>
                    <p className="text-xl text-gray-600">{plan.size}</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedPlan(plan);
                      setShowModal(true);
                    }}
                    className="mt-4 w-64 bg-blue-500 text-white py-2 px-4 rounded-lg"
                  >
                    Узнать больше
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold mb-4">{selectedPlan.name}</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Имя</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Номер</label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Почта</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default FloorPlans;