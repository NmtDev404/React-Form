import React from "react";
import Background from "../assets/formbg.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const formSubmit = (data) => {
    console.log(data);
  };

  // const [sub, setSub] = useState(false);
  // const handleSub = () => {

  //   setSub(true);

  // };
  return (
    <>
      <div>
        <div
          id="main-container"
          className=" max-w-[1440px ] max-w-[90%] my-10 border-[1px] rounded-3xl shadow-2xl bg-white m-auto flex flex-col md:flex-row items-center justify-center p-6 gap-5  "
        >
          <div className="hidden lg:block md:block w-[50%]">
            <img
              src={Background}
              className="w-auto h-full rounded-[20px]"
              alt="Background"
            />
          </div>

          <div id="form-container" className=" w-full lg:w-[50%] md:w-[50%]">
            <div>
              <h1 className="text-4xl font-bold block ">Sign up</h1>
            </div>

            <div className="mt-5">
              <form onSubmit={handleSubmit(formSubmit)}>
                <div className="grid grid-cols-2 py-3 gap-6">
                  <div className="">
                    <label className="font-bold text-xs tracking-widest block py-2 ">
                      FIRST NAME
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.firstName ? "border-red-500" : ""
                      }`}
                      type="text"
                      placeholder="John"
                      {...register("firstName", {
                        required: "Input field required",
                        minLength: { value: 3 },
                        maxLength: { value: 10 },
                      })}
                    />
                    {errors.firstName && (
                      <p className="pt-1 font-medium text-red-500">
                        {errors.firstName.message}
                      </p>
                    )}
                    {errors.firstName &&
                      errors.firstName.type === "minLength" && (
                        <p className="text-red-500 font-medium">
                          Minimum length is 3 characters
                        </p>
                      )}
                    {errors.firstName &&
                      errors.firstName.type === "maxLength" && (
                        <p className="text-red-500 font-medium">
                          Maximum length is 10 characters
                        </p>
                      )}
                  </div>
                  <div>
                    <label className="font-bold text-xs tracking-widest block py-2">
                      LAST NAME
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.lastName ? "border-red-500" : ""
                      }`}
                      type="text"
                      placeholder="Doe"
                      {...register("lastName", {
                        required: "Input field required",
                        minLength: { value: 3 },
                        maxLength: { value: 10 },
                      })}
                    />
                    {errors.lastName && (
                      <p className="pt-1 font-medium text-red-500">
                        {errors.lastName.message}
                      </p>
                    )}
                    {errors.lastName &&
                      errors.lastName.type === "minLength" && (
                        <p className="text-red-500 font-medium">
                          Minimum length is 3 characters
                        </p>
                      )}
                    {errors.lastName &&
                      errors.lastName.type === "maxLength" && (
                        <p className="text-red-500 font-medium">
                          Maximum length is 10 characters
                        </p>
                      )}
                  </div>
                </div>

                <div className="grid grid-cols-2 py-3 gap-6">
                  <div>
                    <label className="font-bold text-xs tracking-widest block py-2">
                      PHONE
                    </label>
                    <input
                   className= {`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                      type="text"
                      placeholder="123456789"
                      name="phone"
                      
                      {...register("phone", {
                        required: "Input field required",
                        pattern: {
                          value: /^[0-9]{1,12}$/,
                          message: "Please enter a valid phone number",
                        },
                      })}
                    />

                    {errors.phone && (
                      <p className="mt-2 text-red-500 font-medium">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="font-bold text-xs tracking-widest block py-2">
                      EMAIL
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      type="text"
                      placeholder="johndoe@gmail.com"
                      name="email"
                      {...register("email", {
                        required: "Email field is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    <p className=" mt-2  text-red-500 font-medium ">
                      {errors.email?.message}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 py-3">
                  <div>
                    <label className="font-bold text-xs tracking-widest block py-2">
                      PASSWORD
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.password ? "border-red-500" : ""
                      }`}
                      type="text"
                      placeholder="**********"
                      name="password"
                      {...register("password", {
                        required: "Input field required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                        pattern: {
                          value:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/,
                          message:
                            "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
                        },
                      })}
                    />
                    <p className="text-red-500 font-medium">
                      {errors.password?.message}
                    </p>
                  </div>

                  <div>
                    <label className="font-bold text-xs tracking-widest block py-2">
                      CONFIRM PASSWORD
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.confirm_password ? "border-red-500" : ""
                      }`}
                      type="password"
                      placeholder="**********"
                      {...register("confirm_password", {
                        required: "Input field required",
                        validate: (data) => {
                          if (watch("password") !== data) {
                            return "Password do not match";
                          }
                        },
                      })}
                    />
                    <p className="text-red-500 font-medium">
                      {errors.confirm_password?.message}
                    </p>
                  </div>
                </div>
                <div className=" my-12">
                  <Button btnName="Sign UP" />
                </div>
              </form>
              <div>
                {/* <div className="flex  mt-8">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="w-4 h-4 mt-1 text-blue-600  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ms-2 text-base font-medium text-gray-400 dark:text-black">
                    I accept terms and
                    <br /> conditions{" "}
                  </label>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
