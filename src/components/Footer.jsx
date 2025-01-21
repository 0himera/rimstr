import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">123 Luxury Avenue</p>
            <p className="mb-2">New York, NY 10001</p>
            <p className="mb-2">Phone: +1 (234) 567-890</p>
            <p>Email: info@luxuryapartments.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-primary-300">About</a></li>
              <li><a href="#advantages" className="hover:text-primary-300">Advantages</a></li>
              <li><a href="#architecture" className="hover:text-primary-300">Architecture</a></li>
              <li><a href="#floor-plans" className="hover:text-primary-300">Floor Plans</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-300"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-primary-300"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-primary-300"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-primary-300"><FaLinkedin size={24} /></a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates</p>
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
          <p>&copy; {new Date().getFullYear()} Premium Apartment Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;