import React from "react";
import "./Characters.css";

const Characters = () => {
  return (
    <div className="Characters">
      <div className="container">
        {/* language selector */}
        <div className="lang">language</div>
        {/* title */}
        <div className="characters__title">
          60 <span>Peoples</span> for you to choose your favorite
        </div>
        {/* filter selector */}
        <div className="characters__filter">
          <span>eye color</span>
          <select className="box">
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option selected value="coconut">
              Кокос
            </option>
            <option value="mango">Манго</option>
          </select>
        </div>

        <div className="characters__content">
          <div className="character__card">
            <div className="card__title">Jango Fett</div>
            <div className="character__info">
              <div className="height__info">
                <div className="height">
                  <span>202</span>
                </div>
                <span className="info">height</span>
              </div>
              <div className="mass__info">
                <div className="mass">
                  <span>136</span>
                </div>
                <span className="info">mass</span>
              </div>
            </div>
            <div className="character__info-2">
              <div className="gender">
                <span>male</span>
              </div>
              <div className="birth_year">
                <span>41.9BBY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
