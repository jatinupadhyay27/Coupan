import React from "react";
import { menu } from "../JSON";
import "../App.css";

function SubHeader() {
  return (
    <>
      <div className="bg-[#454545]">
        <ul className="text-white flex justify-center gap-8 p-3 w-[100%] flex-wrap">
          {menu.map((category, index) => (
            <>
              <li className="hover-trigger  cursor-pointer trans" key={index}>
                {category.title}
              </li>
            </>
          ))}

          <div className="text-black bg-white absolute font-semibold custom-width  hidden hover-content  mt-6 max-[321px]:mt-[5.25rem] shadow-xl rounded-md z-10">
            <div className="">
              <div className="mt-1 ">
                {menu.map((category, index) => (
                  <>
                    <div key={index}>
                      <ul>
                        {category.Subcategories &&
                          category.Subcategories.map((subcategory, index) => (
                            <>
                            <li
                              className="hover-trigger cursor-pointer  text-black p-2 hover:text-[#d51c29]"
                              key={index} 
                            >
                            {subcategory.title}
                            </li>
                            </>
                          ))}
                      </ul>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default SubHeader;
