import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const LivingAreas = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="living-areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="h-[400px] md:h-[500px] rounded-lg overflow-hidden"
            >
              {['/img (10).jpg', '/img.webp', '/img (11).jpg'].map((index) => (
                <SwiperSlide key={index}>
                  <img
                    src={index}
                    alt={`Living area ${index}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <div className="rounded-border">
              <h2 className="section-title">Жилые зоны</h2>
              <p className="section-text">
                Спортивные залы, бассейны, рестораны и многое другое.                
              </p>
              <p className="section-text mt-4">
                По всему периметру аллеи предусмотрены зоны отдыха, фонтаны и детские площадки.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LivingAreas;