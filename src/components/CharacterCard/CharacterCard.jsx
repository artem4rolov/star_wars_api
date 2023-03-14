import React from "react";
import "./CharacterCard.css";

const CharacterCard = (props) => {
  const { name, height, mass, gender, birth_year, getCharacterInfo } = props;

  return (
    <div
      className="character__card"
      onClick={() => getCharacterInfo(props.name)}
    >
      <div className="card__title">{name}</div>

      <div className="character__info">
        <div className="height__info">
          <div className={`${height !== "unknown" ? "height" : "none"}`}>
            <span>{height}</span>
          </div>
          <span className={`${height !== "unknown" ? "info" : "none"}`}>
            height
          </span>
        </div>

        <div className="mass__info">
          <div className={`${mass !== "unknown" ? "mass" : "none"}`}>
            <span>{mass}</span>
          </div>
          <span className={`${mass !== "unknown" ? "info" : "none"}`}>
            mass
          </span>
        </div>
      </div>

      {/* если данных нет ("n/a") - скрываем элемент */}
      <div className="character__info-2">
        <div className={`gender ${gender !== "n/a" ? gender : "none"}`}>
          <span>{gender}</span>
        </div>
        <div className={`${birth_year !== "n/a" ? "birth_year" : "none"}`}>
          <span>{birth_year}</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
