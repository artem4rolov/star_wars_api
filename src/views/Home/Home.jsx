import React from "react";
import MainButton from "../../components/MainButton/MainButton";
import "./Home.css";

import MainCover from "../../assets/main_cover.svg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="home__content">
          <div className="home__left">
            <div className="home__title">
              <span>Find</span> all your favorite <span>character</span>
            </div>
            <div className="home__subtitle">
              You can find out all the information about your favorite
              characters
            </div>
            <NavLink to="/characters" replace>
              <MainButton color="yellow" text="See more..." />{" "}
            </NavLink>
          </div>
          <div className="home__left">
            <img src={MainCover} alt="yoda" className="home__cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
