import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutComplex = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <div className="rounded-border">
              <h2 className="section-title">About Our Complex</h2>
              <p className="section-text">
                Discover a new standard of luxury living in our meticulously
                designed apartment hotel complex. Featuring state-of-the-art
                amenities, stunning architecture, and unparalleled comfort,
                our residence offers an exceptional living experience.
              </p>
              <p className="section-text mt-4">
                Each space is thoughtfully crafted to provide the perfect
                balance of elegance and functionality, ensuring that your
                stay with us is nothing short of extraordinary.
              </p>
            </div>
          </motion.div>

          {/* Slider */}
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
              className="h-[500px] rounded-lg overflow-hidden"
            >
              {['https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    'https://app.giz.ai/api/tempFiles/local+OiktGKV-7CW3IbCTd7WZV.webp'].map((index) => (
                <SwiperSlide key={index}>
                  <img
                    src={index}
                    alt={`Complex view ${index}`}
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

export default AboutComplex;