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
            <a href="https://yandex.ru/maps/-/CHa3yA7n"><p className="mb-2">Офис продаж: г. Махачкала, Петра 1, 85<br/>Тц Берега, 3 этаж</p></a>
            <p className="mb-2">Стоительный обьект: РД Карабудахкентский район<br/>Турали 6е, 21 корпус</p>
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
              const formData = new FormData(event.target);
                const name = formData.get("name");
                const phone = formData.get("phone");

              const response = await fetch('/send', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ name, phone }),
              });
              const result = await response.json();
                if (result.status === "ok") {
                  alert("Данные успешно отправлены!");
                  event.target.reset();
                } else {
                  alert("Ошибка при отправке данных.");
                }
            }}>
              <input
                type="name"
                name="name"
                placeholder="Ваше имя"
                className="w-full px-4 py-2 rounded-lg bg-primary-800 text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="phone"
                name="phone"
                placeholder="Ваш телефон"
                className="w-full px-4 py-2 rounded-lg bg-primary-800 text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary-700 rounded-lg hover:bg-primary-600 transition-colors"
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