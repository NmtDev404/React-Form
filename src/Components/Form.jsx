import React from "react";
import Background from "../assets/formbg.png";
import { useState } from "react";
import Button from "./Button";
import { useFormik } from "formik";
import { signUpSchema } from "../Schema";

const inputFieldValues={
  first_name:"",
  last_name:"",
  phone:"",
  email:"",
  password:"",
  confirm_password:""
  

}



const Form = () => {
  const {values, errors, handleBlur, touched, handleChange, handleSubmit} = useFormik({
    initialValues:inputFieldValues,
    validationSchema:signUpSchema,
    onSubmit:(values,action)=>{
      action.resetForm()
    }
   
  })

 console.log(values);


  const [sub, setSub] = useState(false);
  const handleSub = () => {

    setSub(true);
  
  };
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
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 py-3 gap-6">
                  <div className="">
                    <label className="font-bold text-xs tracking-widest block py-2 ">
                      FIRST NAME
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      name="first_name"
                      className="p-2 border-gray-400 border-[1px] w-full"
                      value={values.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.first_name && touched.first_name ? 
                    <p className="form_warning">{errors.first_name}</p>
                    : null}
                  </div>
                  <div>
                    <label className="font-bold text-xs tracking-widest block py-2">
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      name="last_name"
                      className="p-2  border-gray-400 border-[1px] w-full"
                      value={values.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                      {errors.last_name && touched.last_name ? 
                    <p className="form_warning">{errors.last_name}</p>
                    : null}
                  </div>
                </div>

                <div className="grid grid-cols-2 py-3 gap-6">
                  <div>
                    {" "}
                    <label className="font-bold text-xs tracking-widest block py-2">
                      PHONE
                    </label>
                    <input
                      type="text"
                      placeholder="123456789"
                      name="phone"
                      className="p-2  border-gray-400 border-[1px] w-full"

                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                     {errors.phone && touched.phone ? 
                    <p className="form_warning">{errors.phone}</p>
                    : null}
                  </div>
                  <div>
                    {" "}
                    <label className="font-bold text-xs tracking-widest block py-2">
                      EMAIL
                    </label>
                    <input
                      type="text"
                      placeholder="johndoe@gmail.com"
                      name="email"
                      className="p-2  border-gray-400 border-[1px] w-full"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                     {errors.email && touched.email ? 
                    <p className="form_warning">{errors.email}</p>
                    : null}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 py-3">
                  <div>
                    {" "}
                    <label className="font-bold text-xs tracking-widest block py-2">
                      PASSWORD
                    </label>
                    <input
                      type="text"
                      placeholder="**********"
                      name="password"
                      className="p-2  border-gray-400 border-[1px] w-full"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                     {errors.password && touched.password? 
                    <p className="form_warning">{errors.password}</p>
                    : null}
                  </div>

                  <div>
                    <label className="font-bold text-xs tracking-widest block py-2">
                      CONFIRM PASSWORD
                    </label>
                    <input
                      type="text"
                      placeholder="**********"
                      name="confirm_password"
                      className="p-2 border-gray-400 border-[1px] w-full"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                     {errors.confirm_password&& touched.confirm_password ? 
                    <p className="form_warning">{errors.confirm_password}</p>
                    : null}
                  </div>
                </div>
              </form>
              <div>
                <div className="flex  mt-8">
                  <input
                    id="checkbox"
                    type="checkbox"
                    
                    className="w-4 h-4 mt-1 text-blue-600  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    value ={values.checkbox}
                      
                  />
                  <label className="ms-2 text-base font-medium text-gray-400 dark:text-black">
                    I accept terms and
                    <br /> conditions{" "}
                  </label>
                </div>
              </div>
              <div className=" my-12">
                {sub ? (
                  <Button  btnName="SIGN IN" />
                ) : (
                  <Button  onClick = {handleSub} btnName="SIGN UP" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
};

export default Form;
