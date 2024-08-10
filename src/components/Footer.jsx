import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-7">
          <div className="flex flex-col items-center md:items-start">
           <h1 className="text-2xl font-bold mb-4">logo</h1>
            <p className="text-center md:text-left">
              India's Go-To for Coupons, Offers & Cashback
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="/" className="text-gray-600 bg-white p-2 rounded-full hover:bg-[#cd3232] hover:text-white">
                <FaFacebookF />
              </a>
              <a href="/" className="text-gray-600 bg-white p-2 rounded-full hover:bg-[#cd3232] hover:text-white">
                <FaInstagram />
              </a>
              <a href="/" className="text-gray-600 bg-white p-2 rounded-full hover:bg-[#cd3232] hover:text-white">
                <FaTwitter />
              </a>
              <a href="/" className="text-gray-600 bg-white p-2 rounded-full hover:bg-[#cd3232] hover:text-white">
                <FaTelegram />
              </a>
            </div>
          </div>
          <div className='mt-4'>
            <h3 className="text-xl font-bold mb-4 border-l-2 border-red-500 inline-block pl-2">Help & Support</h3>
            <ul>
              <li className="mb-2"><a href="/" className="hover:underline hover:text-[#cd3232]">FAQs</a></li>
              <li className="mb-2"><a href="/" className="hover:underline hover:text-[#cd3232]">How It Works</a></li>
              <li className="mb-2"><a href="/" className="hover:underline hover:text-[#cd3232]">Missing Cashback Claims</a></li>
              <li className="mb-2"><a href="/" className="hover:underline hover:text-[#cd3232]">Contact Us</a></li>
            </ul>
          </div>
          <div className='mt-4'>
            <h3 className="text-xl font-bold mb-4 border-l-2 pl-2 border-red-500 inline-block">CouponDunia</h3>
            <ul>
              <li className="mb-2"><a href="/" className="hover:underline hover:text-[#cd3232]">About Us</a></li>
              <li className="mb-2"><a href="/" className="hover:underline hover:text-[#cd3232]">Press</a></li>
              <li className="mb-2"><a href="/" className="hover:underline hover:text-[#cd3232]">Media</a></li>
              <li className="mb-2"><a href="/" className="hover:underline hover:text-[#cd3232]">List Your Business</a></li>
              <li className="mb-2"><a href="/" className="hover:underline hover:text-[#cd3232]">Privacy Policy</a></li>
              <li className="mb-2"><a href="/" className="hover:underline hover:text-[#cd3232]">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className='mt-4'>
            <h3 className="text-xl font-bold mb-4 border-l-2 pl-2 border-red-500 inline-block">Earning Programs & Benefits</h3>
            <ul>
              <li className="mb-2"><a href="/" className="hover:underline hover:text-[#cd3232]">Shopping Assistant</a></li>
              <li className="mb-2"><a href="/" className="hover:underline hover:text-[#cd3232]">Share & Earn</a></li>
              <li className="mb-2"><a href="/" className="hover:underline hover:text-[#cd3232]">Refer & Earn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
