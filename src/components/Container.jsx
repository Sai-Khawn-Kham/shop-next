import React from "react";

const Container = ({ children, className }) => {
   return <div className={`${className} max-w-[1265px] mx-auto px-3 md:px-10 lg:px-20`}>{children}</div>;
};

export default Container;
