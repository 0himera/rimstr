import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Адрес</h3>
            <a href="https://yandex.ru/maps/-/CHa3yA7n"><p className="mb-2">Офис продаж: г. Махачкала, Петра 1, 85<br />Тц Берега, 3 этаж</p></a>
            <p className="mb-2">Стоительный обьект: РД Карабудахкентский район<br />Турали 6е, 21 корпус</p>
            <a href="tel:622230" ><p className="mb-2">Тел: 62-22-30</p></a>
            <p>Email: rimstroy05@mail.ru</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Гид по сайту</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-primary-300">О Нас</a></li>
              <li><a href="#advantages" className="hover:text-primary-300">Приемущества</a></li>
              <li><a href="#architecture" className="hover:text-primary-300">Архитектура</a></li>
              <li><a href="#floor-plans" className="hover:text-primary-300">Планировки</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Мы в соц сетях</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/rim_stroy05" className="hover:text-primary-300"><FaInstagram size={24} /></a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Узнать подробнее</h3>
            <form className="space-y-2" onSubmit={async (event) => {
              event.preventDefault();
              const form = event.target;
              const submitBtn = form.querySelector('button[type="submit"]');
              const originalText = submitBtn.innerText;

              submitBtn.disabled = true;
              submitBtn.innerText = "...";

              const formData = new FormData(form);
              const data = {
                name: formData.get("name"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                source: "Футер"
              };

              try {
                const response = await fetch('/send', {
                  method: 'POST',
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                });
                const result = await response.json();
                if (result.status === "ok") {
                  submitBtn.innerText = "✓";
                  submitBtn.classList.remove("bg-primary-700", "hover:bg-primary-600");
                  submitBtn.classList.add("bg-green-600", "hover:bg-green-500");
                  setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.classList.add("bg-primary-700", "hover:bg-primary-600");
                    submitBtn.classList.remove("bg-green-600", "hover:bg-green-500");
                    submitBtn.disabled = false;
                    form.reset();
                  }, 2000);
                } else {
                  throw new Error("Failed");
                }
              } catch (e) {
                alert("Ошибка отправки");
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
              }
            }}>
              <input
                type="text"
                name="name"
                required
                placeholder="Ваше имя"
                className="w-full px-4 py-2 rounded-lg bg-primary-800 text-white placeholder-primary-400 border border-transparent focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Ваш телефон"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9+()\-\s]/g, '');
                }}
                className="w-full px-4 py-2 rounded-lg bg-primary-800 text-white placeholder-primary-400 border border-transparent focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Email (необязательно)"
                className="w-full px-4 py-2 rounded-lg bg-primary-800 text-white placeholder-primary-400 border border-transparent focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary-700 rounded-lg hover:bg-primary-600 text-white font-medium transition-colors"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-800 text-center">
          <p>&copy; {new Date().getFullYear()} Алые Паруса. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;