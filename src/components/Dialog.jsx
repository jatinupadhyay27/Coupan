import React, { useState } from "react";
import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dialog = ({ visible, setVisibleDialog, handleDialogClose }) => {
  const [showPassword1, setShowPassword1] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword1(!showPassword1);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      number: Yup.string()
        .matches(/^[0-9]{10}$/, 'Must be a valid 10-digit number')
        .required('Number is required'),
    }),
    onSubmit: values => {
      localStorage.setItem('formData', JSON.stringify(values));
      toast.success('Sign up successful!');
      formik.resetForm();
      
    },
  });

  return (
    <>
      {visible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10"
          onClick={handleDialogClose}
        >
          <div
            className="bg-white rounded-md p-4 w-full max-w-md mx-4 md:mx-0 relative"
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
            <h2 className="text-3xl semibold mb-2">Sign up</h2>
            <p className="text-gray-600 border-b-2 pb-2">
              EARN CASHBACK EVERY TIME YOU SHOP
            </p>
            <div className="flex flex-wrap justify-center">
              <button key="facebook" className="bg-[#425db7] hover:bg-blue-700 text-white font-semibold py-2 px-2 rounded m-3 w-44 flex justify-center">
                <ImFacebook2 className="mr-2 mt-1 size-5 rounded-full" />
                with Facebook
              </button>
              <button key="google" className="bg-[#dd4b39] hover:bg-red-700 text-white font-semibold py-2 px-2 rounded m-3 w-44 justify-center flex">
                <FcGoogle className="mr-2 mt-1 bg-white size-5 rounded-full" />
                with Google
              </button>
            </div>
            <div className="text-center my-2">
              <button
                className="bg-[#f5f5f5] text-gray-600 text-[12px] rounded-full p-2"
                disabled
              >
                OR
              </button>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-[100%] border border-gray-300 border-b-2 rounded p-2 my-2"
                  {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm">{formik.errors.name}</div>
                ) : null}
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-[100%] border border-gray-300 border-b-2 rounded p-2 my-2"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                ) : null}
                <div className="relative">
                  <input
                    type={showPassword1 ? "text" : "password"}
                    placeholder="Enter your password"
                    id="password"
                    className="w-[100%] border border-gray-300 border-b-2 rounded p-2 my-2"
                    {...formik.getFieldProps('password')}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer absolute right-3 top-[1.25rem] text-gray-500 hover:text-gray-900"
                  >
                    {showPassword1 ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </span>
                </div>
                <input
                  type="text"
                  id="number"
                  placeholder="Number"
                  className="w-[100%] border border-gray-300 border-b-2 rounded p-2 my-2"
                  {...formik.getFieldProps('number')}
                />
                {formik.touched.number && formik.errors.number ? (
                  <div className="text-red-500 text-sm">{formik.errors.number}</div>
                ) : null}
              </div>
              <div className="text-center mt-3">
                <button
                  type="submit"
                  className="bg-[#cd3232] text-white w-40 semibold py-2 px-4 rounded"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Dialog;
