import React from "react";

const Button = (props) => {
  const {btnName} = props;
  return (
    <>
      <div>
        <button
          type="submit"
          className="py-2 px-10 font-normal text-[14px] cursor-pointer text-white tracking-widest rounded-sm bg-[#374889] hover:text-[15px] ease-linear"
          
        >
          {btnName}
        </button>
      </div>
    </>
  );
};

export default Button;
