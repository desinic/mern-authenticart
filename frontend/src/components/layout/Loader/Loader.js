import React from "react";
import "./Loader.css";
import logo from '../../../images/logo.jpg'

const Loader = () => {
  return (
    <div className="loading">
      <img src={logo} alt="" />
    </div>
  );
};

export default Loader;
