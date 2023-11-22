import React from "react";
//
import Header from "./header";

const Layouts = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layouts;
