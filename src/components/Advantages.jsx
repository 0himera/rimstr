import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Advantages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const advantages = [
    {
      title: "Расположение",
      description: "В минутe от моря"
    },
    {
      title: "Спа и оздоровительные услуги",
      description: "Спа-салоны, парные, хаммамы, массажные кабинеты."
    },
    {
      title: "Современная система безопасности",
      description: "Круглосуточное видеонаблюдение и служба охраны обеспечит защиту и создаст спокойную обстановку для проживания и отдыха."
    }
  ];

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
      alt: 'Advantage 1'
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea',
      alt: 'Advantage 2'
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
      alt: 'Advantage 3'
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-gray-50">
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
              autoplay={{ delay: 3000 }}
              className="h-[660px]"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
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
              <h2 className="section-title">Приемущества</h2>
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                    <p className="section-text">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Advantages;