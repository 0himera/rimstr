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
            <a href="https://yandex.ru/maps/-/CHa3yA7n"><p className="mb-2">г. Махачкала, Петра 1, 85</p></a>
            <a href="tel:+78722622230" ><p className="mb-2">Phone: +7 (872) 262-22-30</p></a>
            <p>Email: rimstroy05@mail.ru</p>
          </div>

          {/* Quick Links */}
          <div>
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
            <h3 className="text-xl font-bold mb-4">Рассылка</h3>
            <p className="mb-4">Подпишитесь на рассылку обновлений</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-primary-800 text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary-700 rounded-lg hover:bg-primary-600 transition-colors"
              >
                Subscribe
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