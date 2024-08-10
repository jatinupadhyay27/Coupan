import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const  Header =({ setVisibleDialog }) => {



  return (
    <>
      <div className="bg-[#322f2e] flex justify-around p-4 items-center flex-wrap">
        <ul className="text-white w-[10%] text-center max-[759px]:w-[100%] max-[759px]:2 max-[759px]:text-start">
          <li>LOGO</li>
        </ul>
        <ul className="w-[70%] max-[759px]:w-[100%] max-[759px]:my-2">
          <li className="flex justify-center max-[759px]:block">
            <div className="w-96 relative max-[425px]:w-72 ml-[10.5rem] max-[1024px]:ml-[8rem] max-[759px]:ml-0">
              <input
                type="text"
                name=""
                id=""
                className="w-96 p-2 max-[425px]:w-72 rounded-md border-none outline-none overflow-hidden"
                placeholder="Search for products"
              />
              <div className="absolute w-10 h-10 bg-[#d51c29] top-0 rounded-r-md right-0 flex justify-center items-center text-white text-2xl">
                <IoIosSearch />
              </div>
            </div>
          </li>
        </ul>
        <ul className="w-[20%] max-[759px]:w-[100%] max-[759px]:my-2 max-[759px]:text-start text-center">
          <li className="text-white text-center w-24 hover-trigger cursor-pointer">
            {" "}
            <div className="flex justify-center gap-2 items-center ">
              <div className="">
                <FaUser />
              </div>
              <div className="">Action</div>
            </div>{" "}
          </li>
          <div className="w-72 h-44 bg-white absolute hidden hover-content mt-0 shadow-xl rounded-md custom-class z-10">
            <div className="flex mt-1">
              <div className="w-[30%]  h-[80px] flex justify-center items-center">
                <div className="bg-[#fff2f2] w-16 h-16 flex justify-center items-center rounded-lg">
                  <img
                    src="https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/header/Group_188.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[70%] h-[80px] text-start px-2 pt-1">
                <h6 className="text-[14px] font-semibold">Welcome</h6>
                <p className="text-[10px]">
                  Earn extra cashback on top of other discounts on your shopping
                  via CouponDunia
                </p>
              </div>
            </div>
            <div className="text-start p-2 flex justify-between mt-1">
              <button className="w-32 border text-black rounded-md border-black h-10 text-[12px] font-semibold" onClick={() => setVisibleDialog('signup')}>
                Sing up
              </button>
              <button className="w-32  h-10 text-white bg-[#d51c29]  rounded-md text-[12px] font-semibold"  onClick={() => setVisibleDialog('login')}>
                Log in
              </button>
            </div>
            <div className="text-center text-blue-400 text-sm mt-1">
              Help & Support
            </div>
          </div>
        </ul>
      </div>

      
    </>
  );
}

export default Header;
