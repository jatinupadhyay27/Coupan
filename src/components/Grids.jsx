import React from 'react';
import { offers } from '../JSON';


const OfferSection = () => {

  
    return (
   <div className="bg-[#ebf1ff] p-4 my-8">
  <div className="container mx-auto px-4 md:px-20 lg:px-44">
    <h1 className="text-3xl font-bold text-center mb-8">Top Offers</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {offers.map((offer, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-md p-4 m-2 mb-4 flex flex-col items-center justify-center transition-transform transform hover:scale-110"
        >
          <img src={offer.image} alt={offer.title} className="w-[60%] h-16" />
          <h2 className="text-lg font-bold mt-4">{offer.title}</h2>
          <p className="text-sm text-gray-500">{offer.discount}</p>
        </div>
      ))}
    </div>
  </div>
</div>
      
    );
  };

export default OfferSection;