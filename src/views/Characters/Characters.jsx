import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";

import Alien from "../../assets/avatar_alien.svg";
import Male from "../../assets/avatar_male.svg";
import Female from "../../assets/avatar_female.svg";

import "./Characters.css";

const Characters = () => {
  const [cards, setCards] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData("https://swapi.dev/api/people/");
  }, []);

  function getData(url) {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCards(data.results);
        setPagination(data);
        setLoading(false);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  function getCharacterInfo(name) {
    fetch(`https://swapi.dev/api/people/?search=${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results[0]);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  // console.log(pagination);

  return (
    <div className="Characters">
      <div className="container">
        {/* language selector */}
        <div className="lang">language</div>
        {/* title */}
        <div className="characters__title">
          82 <span>Peoples</span> for you to choose your favorite
        </div>
        {/* filter selector */}
        <div className="characters__filter">
          <span>eye color</span>
          <select className="box">
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option defaultValue="coconut">Кокос</option>
            <option value="mango">Манго</option>
          </select>
        </div>
        {/* cards */}
        {loading && (
          <div className="loader">
            <Loading />
          </div>
        )}
        <div className="characters__content">
          {cards &&
            !loading &&
            cards.map((card, index) => {
              return (
                <CharacterCard
                  key={card.name}
                  id={index}
                  getCharacterInfo={getCharacterInfo}
                  {...card}
                />
              );
            })}
        </div>
        {/* pagination */}
        {pagination && (
          <Pagination
            pagination={pagination}
            getData={getData}
            loading={loading}
          />
        )}
      </div>
      <div className="moda__wrapper">
        <div className="modal__window">
          {/* аватар по полу персонажа */}
          <div className="avatar">
            <img src={Alien} alt="" />
          </div>
          <div className="modal__info">
            {/* имя персонажа */}
            <span className="info__title">Jabba Desilijic Tiure</span>

            {/* данные персонажа */}
            <div className="info__character-body">
              <span>hair color: brown: brown</span>
              <span>skin color - white</span>
              <span>hair color: brown</span>
            </div>

            {/* информация о массе и росте персонажа */}
            <div className="info__height__mass">
              <div className="height__information">
                {/* кружок */}
                <div className="height__inf">
                  <span>123</span>
                </div>
                {/* текст под кружком */}
                <span className="info">height</span>
              </div>
              <div className="mass__information">
                {/* кружок */}
                <div className="mass__inf">
                  <span>2222</span>
                </div>
                {/* текст под кружком */}
                <span className="info">mass</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
