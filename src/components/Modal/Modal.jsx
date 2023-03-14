import React, { useEffect, useState } from "react";
import "./Modal.css";

import Alien from "../../assets/avatar_alien.svg";
import Male from "../../assets/avatar_male.svg";
import Female from "../../assets/avatar_female.svg";
import Loading from "../Loading/Loading";

const Modal = ({ character, opened, toggleModal, loadingChar }) => {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (character) {
      chooseAvatar(character.gender);
    }
  }, [character]);

  function chooseAvatar(gender) {
    switch (gender) {
      case "male":
        setAvatar(Male);
        break;
      case "female":
        setAvatar(Female);
        break;
      case "hermaphrodite":
        setAvatar(Alien);
        break;
      case "n/a":
        setAvatar(Alien);
        break;
      default:
        break;
    }
  }

  return (
    <div
      className={`moda__wrapper ${opened ? "" : "none"}`}
      onClick={(e) => {
        if (!e.target.classList.contains("modal__window")) {
          toggleModal();
        }
      }}
    >
      <div className="modal__window">
        {loadingChar ? (
          <div className="loader">
            <Loading />
          </div>
        ) : (
          character && (
            <>
              {/* аватар по полу персонажа */}
              <div className="avatar">
                <img src={avatar} alt="" />
              </div>
              <div className="modal__info">
                {/* имя персонажа */}
                <span className="info__title">{character.name}</span>

                {/* данные персонажа */}
                <div className="info__character-body">
                  <span>hair color: {character.hair_color}</span>
                  <span>skin color: {character.skin_color}</span>
                  <span>eye color: {character.eye_color}</span>
                  <span>gender: {character.gender}</span>
                </div>

                {/* информация о массе и росте персонажа */}
                <div className="info__height__mass">
                  <div className="height__information">
                    {/* кружок */}
                    <div className="height__inf">
                      <span>{character.height}</span>
                    </div>
                    {/* текст под кружком */}
                    <span className="info">height</span>
                  </div>
                  <div className="mass__information">
                    {/* кружок */}
                    <div className="mass__inf">
                      <span>{character.mass}</span>
                    </div>
                    {/* текст под кружком */}
                    <span className="info">mass</span>
                  </div>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Modal;
