import React from "react";

const Wrapper = ({ children }) => {
  return (
    <main>
      <div className="sm:w-4/5 sm:m-auto mx-[10px]">{children}</div>
    </main>
  );
};

export default Wrapper;
