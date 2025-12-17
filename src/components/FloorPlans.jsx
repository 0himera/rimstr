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
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="h-[550px] rounded-lg overflow-hidden"
            breakpoints={{
              640: { // Для экранов шириной 640px и выше
                slidesPerView: 2, // 2 слайда
              },
              1024: { // Для экранов шириной 1024px и выше
                slidesPerView: 3, // 3 слайда
              },
              1280: { // Для экранов шириной 1280px и выше
                slidesPerView: 4, // 4 слайда
              },
            }}
          >
            {floorPlans.map((plan) => (
              <SwiperSlide key={plan.id}>
                <div className="bg-aivory-200 w-auto rounded-lg p-3 flex flex-col items-center">
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
                    className="mt-4 w-64 bg-grafit-100 text-white py-2 px-4 rounded-lg"
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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative overflow-hidden"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <h3 className="text-2xl font-bold mb-2 text-gray-900">{selectedPlan?.name}</h3>
            <p className="text-gray-500 mb-6">Оставьте заявку, и мы свяжемся с вами для уточнения деталей.</p>

            <form
              className="space-y-4"
              onSubmit={async (event) => {
                event.preventDefault();
                const form = event.target;
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerText;

                // Basic validation
                const phoneInput = form.querySelector('input[name="phone"]');
                if (phoneInput.value.length < 10) {
                  alert("Пожалуйста, введите корректный номер телефона");
                  return;
                }

                submitBtn.disabled = true;
                submitBtn.innerText = "Отправка...";
                submitBtn.classList.add("opacity-75", "cursor-not-allowed");

                const formData = new FormData(form);
                const data = {
                  name: formData.get("name"),
                  phone: formData.get("phone"),
                  email: formData.get("email"),
                  source: `Планировка: ${selectedPlan?.name}`
                };

                try {
                  const response = await fetch("/send", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });

                  const result = await response.json();

                  if (result.status === "ok") {
                    submitBtn.innerText = "Успешно!";
                    submitBtn.classList.replace("bg-grafit-100", "bg-green-600");
                    setTimeout(() => {
                      setShowModal(false);
                      form.reset();
                    }, 1500);
                  } else {
                    throw new Error("Failed");
                  }
                } catch (e) {
                  alert("Ошибка при отправке. Попробуйте позже.");
                  submitBtn.innerText = originalText;
                  submitBtn.disabled = false;
                  submitBtn.classList.remove("opacity-75", "cursor-not-allowed");
                }
              }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-grafit-100 focus:ring-2 focus:ring-gray-200 outline-none transition-all"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Номер телефона *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9+()\-\s]/g, '');
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-grafit-100 focus:ring-2 focus:ring-gray-200 outline-none transition-all"
                  placeholder="+7 (999) 000-00-00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email (необязательно)</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-grafit-100 focus:ring-2 focus:ring-gray-200 outline-none transition-all"
                  placeholder="example@mail.ru"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-grafit-100 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-all font-medium"
                >
                  Оставить заявку
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default FloorPlans;