import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Architecture = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="architecture" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <div className="rounded-border">
              <h2 className="section-title">Архитектурные особенности</h2>
              <p className="section-text">
                Центральная аллея, соединяющая все блоки комплекса.
              </p>
              <p className="section-text mt-4">
                Панорамные окна открывают великолепные виды на окружающие пейзажи и наполняют пространства естественным светом, создавая атмосферу уюта и роскоши.
              </p>
              <p className="section-text mt-4">
                Дизайнерские решения, воплощенные в каждой детали, придают интерьерам особую изысканность и индивидуальность.
              </p>
            </div>
          </motion.div>

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
              className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
            >
              {['/img.jpg', '/img (5).jpg', '/img (6).jpg'].map((index) => (
                <SwiperSlide key={index}>
                  <img
                    src={index}
                    alt={`Architecture view ${index}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;