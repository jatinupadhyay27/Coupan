import React from 'react';
import '../App.css'; // Import the external CSS for flip effect

const Card = () => {
  return (
    <>
<div className="flex m-5">
      <div className="card w-52 h-80">
        <div className="card-inner relative w-full h-full">
          <div className="card-front absolute w-full h-full bg-white shadow-xl rounded-lg">
            <img
              src="https://via.placeholder.com/256x160"
              alt="Front Side"
              className="card-image w-full h-40 "
            />
            <div className="p-4">
              <h2 className="card-title text-start font-semibold text-lg text-black">Title</h2>
              <p className="card-description text-start text-black">
                Description goes here. Make it concise and informative.
              </p>
            </div>
          </div>
          <div className="card-back absolute w-full h-full bg-[#3b597b] shadow-xl rounded-lg flex items-center font-semibold justify-center">
            <button className="btn">Click Me</button>
          </div>
        </div>
      </div>
    </div>
      </>
  );
};

export default Card;
