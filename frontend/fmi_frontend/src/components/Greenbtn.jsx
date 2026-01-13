import React from "react";

const Greenbtn = ({ children }) => {
  console.log(children);
  return (
    <>
      <button className="btn text-white rounded-lg font-light bg-btn-green p-4 pl-6 pr-6">
        {children}
      </button>
    </>
  );
};

export default Greenbtn;
