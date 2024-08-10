import React, { useState } from "react";
import { cardData } from "../JSON";
import "../App.css";
import { FaCopy, FaExternalLinkAlt } from "react-icons/fa";

function CardCarousal() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentCouponCode, setCurrentCouponCode] = useState("");
  const [currentItem, setCurrentItem] = useState(null);

  const handleButtonClick = (couponCode) => {
    setCurrentCouponCode(couponCode);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

 
  return (
    <>
      <div className="px-44 max-[780px]:px-0 my-12">
        <div
          className="container max-w-full rounded-lg shadow-lg p-7 flex overflow-auto bg-cover bg-center backgroundImage"
          id="style-2"
        >
          {cardData.map((item) => (
            <>
              <div className="flex m-4">
                <div className="card w-52 m-4 h-80" id={item.id}>
                  <div className="card-inner relative w-full h-full">
                    <div className="card-front absolute w-full h-full bg-white shadow-xl rounded-lg">
                      <img
                        src={item.image}
                        alt="Front Side"
                        className="card-image w-full h-40 "
                      />
                      <div className="p-4">
                        <h2 className="card-title text-start font-semibold text-lg text-black">
                          {item.title}
                        </h2>
                        <p className="card-description text-start text-black">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="card-back absolute w-full h-full bg-[#3b597b] shadow-xl rounded-lg flex items-center font-semibold justify-center">
                      <button
                        className="btn"
                        onClick={() => {
                          handleButtonClick(item.coupon.code);
                          setCurrentItem(item);
                        }}
                      >
                        Click Me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Dialog Box */}
              {isDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-20">
                  <div className="bg-white p-8 rounded-lg shadow-lg w-[28rem] max-w-md relative">
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={handleCloseDialog}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:shadow-outline"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-lg font-bold">
                        Get 20% Off Orders Above ₹100 At Select Restaurants
                      </span>
                    </div>
                    <div className="text-center mb-4">
                      <p className="text-gray-700 font-bold">Coupon Code</p>
                      <div className="border border-dotted border-gray-400 rounded-md p-2 inline-block bg-green-100 mt-2">
                        <span className="font-bold text-xl select-none pointer-events-none">
                          {currentCouponCode}
                        </span>
                      </div>
                    </div>
                    <div className="text-center mb-4">
                      <a
                        href={currentItem.coupon.url}
                        className="text-blue-500 hover:underline cursor-pointer"
                      >
                        Go To Website{" "}
                        <FaExternalLinkAlt className="inline ml-1 text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardCarousal;
