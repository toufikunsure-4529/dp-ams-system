// src/Footer.js
import React from 'react';

const Footer = () => {

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-1/3 mb-4">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/admissions" className="text-gray-400 hover:text-white">Admissions</a></li>
              <li><a href="/programs" className="text-gray-400 hover:text-white">Programs</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 mb-4">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <ul>
              <li className="text-gray-400">Basantapur, Dumkal, Murshidabad, West Bengal 742406</li>
              <li className="text-gray-400">Email: polytechnicdumkal@yahoo.com

              </li>
              <li className="text-gray-400">Phone: (123) 456-7890</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 mb-4">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.557a9.832 9.832 0 01-2.828.775A4.932 4.932 0 0023.338 3c-.961.571-2.025.986-3.162 1.212A4.918 4.918 0 0016.616 2c-2.737 0-4.954 2.216-4.954 4.944 0 .388.043.765.127 1.125C7.728 7.806 4.1 5.924 1.671 3.149a4.902 4.902 0 00-.67 2.482c0 1.71.872 3.219 2.196 4.105a4.902 4.902 0 01-2.244-.618v.06c0 2.388 1.698 4.381 3.951 4.832-.413.112-.847.172-1.296.172-.317 0-.626-.03-.928-.085.627 1.956 2.444 3.379 4.6 3.42A9.862 9.862 0 010 19.54a13.934 13.934 0 007.548 2.212c9.057 0 14.007-7.497 14.007-13.986 0-.213-.005-.426-.014-.636A10.024 10.024 0 0024 4.557z" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.998 4.545a9.835 9.835 0 01-2.828.775 4.933 4.933 0 002.162-2.724 9.868 9.868 0 01-3.127 1.195 4.918 4.918 0 00-8.388 4.484c-4.092-.205-7.722-2.165-10.148-5.144a4.868 4.868 0 00-.663 2.475 4.916 4.916 0 002.188 4.099 4.902 4.902 0 01-2.23-.616v.06c0 2.39 1.703 4.386 3.956 4.836a4.896 4.896 0 01-2.223.085c.626 1.956 2.444 3.379 4.601 3.42a9.86 9.86 0 01-6.096 2.101c-.395 0-.783-.023-1.166-.067a13.927 13.927 0 007.545 2.212c9.056 0 14.007-7.497 14.007-13.986 0-.213-.005-.426-.014-.636A10.025 10.025 0 0024 4.545z" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.04C6.475 2.04 2 6.515 2 12.041c0 4.47 3.657 8.163 8.29 8.826v-6.254h-2.5v-2.572h2.5v-1.954c0-2.461 1.493-3.807 3.692-3.807 1.048 0 1.951.078 2.213.112v2.564h-1.518c-1.19 0-1.42.565-1.42 1.395v1.79h2.84l-.371 2.572h-2.469v6.254c4.633-.663 8.29-4.356 8.29-8.826 0-5.526-4.476-10.001-10-10.001z" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-4">
          &copy; Dumkal Polytechnic designed and developed by @CST-(2022-2024)
        </div>
      </div>
    </footer>
  );
};

export default Footer;
