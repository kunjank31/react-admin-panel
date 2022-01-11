import React from "react";

const Box = ({ boxTitle, children}) => {
  return (
    <>
      <div className="shadow-md w-full rounded-lg my-5 p-5">
        <h2 className="text-2xl font-semibold pb-5">{boxTitle}</h2>
        {children}
      </div>
    </>
  );
};

export default Box;
