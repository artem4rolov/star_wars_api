import React, { useState } from "react";
import Select from "react-select";
import "./Options.css";

const options = [
  { value: "all", label: "all" },
  { value: "brown", label: "brown" },
  { value: "red", label: "red" },
  { value: "blue", label: "blue" },
  { value: "white", label: "white" },
];

const Options = ({ filterData }) => {
  const handleChange = (selectedOption) => {
    filterData(selectedOption.value);
  };

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      width: "200px",
      boxShadow: "2px 2px 2px rgba(33, 33, 33, 0.1)",
      borderRadius: "4px",
    }),
    option: (styles, { isFocused }) => {
      return { ...styles };
    },
  };

  return (
    <div className="characters__filter">
      <span>eye color</span>
      <Select onChange={handleChange} options={options} styles={colorStyles} />
    </div>
  );
};

export default Options;
