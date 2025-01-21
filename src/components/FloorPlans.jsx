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
      name: "Studio Apartment",
      size: "45m²",
      image: "https://0.db-estate.cdn.pik-service.ru/layout/2022/12/19/2_sm_1ns1__3.9-1_s_a_90_zo4JwSk97wXCjfar.svg"
    },
    {
      id: 2,
      name: "One Bedroom",
      size: "65m²",
      image: "https://0.db-estate.cdn.pik-service.ru/layout/2023/10/23/13_270_MfeH5hDVNEofHVyR.svg"
    },
    {
      id: 3,
      name: "Two Bedroom",
      size: "85m²",
      image: "https://0.db-estate.cdn.pik-service.ru/layout/2024/12/13/8_st_2ks_(6.3)t021_8.7x7.2_a_v1_270_ztNQcZAWm2X5hK9d.svg"
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
          <h2 className="section-title text-center mb-12">Floor Plans</h2>
          
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="h-[660px]"
          >
            {floorPlans.map((plan) => (
              <SwiperSlide key={plan.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                  <div className="bg-gray-100 rounded-lg p-4 lg:w-5/6">
                    <img
                      src={plan.image}
                      alt={plan.name}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8">
                    <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                    <p className="text-xl text-gray-600 mb-8">Size: {plan.size}</p>
                    <button
                      onClick={() => {
                        setSelectedPlan(plan);
                        setShowModal(true);
                      }}
                      className="bg-primary-800 text-white lg:mr-36 py-4 rounded-lg hover:bg-primary-700 transition-colors lg:mt-8"
                    >
                      Learn More
                    </button>
                  </div>
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
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
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
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700"
                >
                  Submit
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