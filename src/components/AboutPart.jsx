import React from 'react';
import { FaTicketSimple } from 'react-icons/fa6';
import { IoCartSharp, IoPeopleSharp } from 'react-icons/io5';

const AboutPart = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-44 max-w-7xl my-8 flex flex-wrap justify-center">
        <div className='w-full '> 
             <h2 className="text-3xl font-bold text-gray-800 mb-6">
    About CouponDunia
  </h2>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[58rem]">
    <div className="bg-[#f0effc] rounded-lg shadow-md p-6 ">
      <FaTicketSimple className="w-24 h-24 mx-auto mb-4 bg-white p-3 rounded-lg shadow-md" />
      <p className="text-gray-700 text-center">
        A Coupan Company
      </p>
    </div>
    <div className="bg-[#f0effc] rounded-lg shadow-md p-6">
      <IoCartSharp className="w-24 h-24 mx-auto mb-4 bg-white p-3 rounded-lg shadow-md"/>
      <p className="text-gray-700 text-center">
        3000+ Online Brands
      </p>
    </div>
    <div className="bg-[#f0effc] rounded-lg shadow-md p-6">
      <IoPeopleSharp className="w-24 h-24 mx-auto mb-4 bg-white p-3 rounded-lg shadow-md" />
      <p className="text-gray-700 text-center">
        Trusted By Shoppers
      </p>
    </div>
  </div>
</div>
  );
};

export default AboutPart;
