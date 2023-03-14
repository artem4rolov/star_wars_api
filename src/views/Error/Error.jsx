import React from "react";
import "./Error.css";
import ErrorImg from "../../assets/error.svg";
import MainButton from "../../components/MainButton/MainButton";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <div className="container">
        <div className="error__content">
          <div className="code">
            <span>4</span>
            <img src={ErrorImg} alt="error image" className="err_img" />
            <span>4</span>
          </div>
          <NavLink to="/" replace>
            <MainButton color="green" text="Return" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error;
