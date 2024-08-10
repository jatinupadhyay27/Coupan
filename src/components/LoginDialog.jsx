import React, { useState } from "react";
import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginDialog = ({ visible, setVisibleDialog, handleDialogClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: values => {
      const storedData = JSON.parse(localStorage.getItem('formData'));
      
      if (storedData && storedData.email === values.email && storedData.password === values.password) {
        toast.success(`Welcome ${storedData.name}!`, {
          autoClose: 2000, // dismiss the toast after 2 seconds
        });
       formik.resetForm();
   
   
      } else {
        toast.error('No user found with these credentials.');
      }
    },
  });

  return (
    <>
      {visible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
          onClick={handleDialogClose}
        >
          <div
            className="bg-white rounded-md p-4 w-full max-w-xl mx-4 md:mx-0 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 transition duration-300"
              onClick={handleDialogClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <p className="text-gray-600 max-[320px]:text-[12px]">
              EARN CASHBACK EVERY TIME YOU SHOP
            </p>
            <h2 className="text-3xl semibold mb-2 border-b-2 pb-2">Login with CouponDunia</h2>
            <div className="flex flex-wrap w-full">
              <div className="w-full md:w-1/2 py-2 px-4 justify-center border-b-2 md:border-r-2 md:border-b-0">
                <button className="bg-white h-12 w-full hover:bg-blue-700 text-black hover:text-white border border-[#425db7] font-semibold py-2 px-2 rounded my-2 text-[16px] flex justify-center">
                  <ImFacebook2 className="mr-2 mt-1 size-5 rounded-full" />
                  with Facebook
                </button>
                <button className="bg-white text-black h-12 hover:bg-red-700 hover:text-white border border-[#cd3232] font-semibold py-2 px-2 rounded w-full my-2 justify-center flex">
                  <FcGoogle className="mr-2 mt-1 bg-white size-5 rounded-full" />
                  with Google
                </button>
                <div className="text-center ps-2 text-blue-600 cursor-pointer text-[13px] font-semibold">
                  Don't have an account? Sign Up
                </div>
              </div>

              <div className="w-full md:w-1/2 p-2">
                <form onSubmit={formik.handleSubmit}>
                  <div className="mt-2 px-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full border border-gray-300 border-b-2 rounded p-2 my-2"
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-sm">{formik.errors.email}</div>
                    ) : null}
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="password"
                        placeholder="Enter your password"
                        className="w-full border border-gray-300 border-b-2 rounded p-2 my-2"
                      />
                      <span
                        onClick={togglePasswordVisibility}
                        className="cursor-pointer absolute right-3 top-[1.25rem] text-gray-500 hover:text-gray-900"
                      >
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                      </span>
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-red-500 text-sm">{formik.errors.password}</div>
                    ) : null}
                  </div>
                  <div className="text-center mt-3">
                    <button
                      type="submit"
                      className="bg-[#cd3232] text-white w-[14rem] semibold py-2 px-4 rounded"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default LoginDialog;
