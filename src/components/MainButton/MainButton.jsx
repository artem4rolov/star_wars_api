import React from "react";
import "./MainButton.css";

const MainButton = ({ color, text }) => {
  return (
    <div className={`main__button ${color}`}>
      <span>{text}</span>
    </div>
  );
};

export default MainButton;
