import React from "react";

const Container = ({ children, className }) => {
   return <div className={`${className} px-20`}>{children}</div>;
};

export default Container;
