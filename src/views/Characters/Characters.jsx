import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";

import "./Characters.css";
import Modal from "../../components/Modal/Modal";

const Characters = () => {
  const [cards, setCards] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingChar, setLoadingChar] = useState(false);
  const [character, setCharacter] = useState(null);
  const [openModal, setOpenModal] = useState(false);

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
    setOpenModal(true);
    setLoadingChar(true);
    fetch(`https://swapi.dev/api/people/?search=${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results[0]);
        setCharacter(data.results[0]);
        setLoadingChar(false);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  function toggleModal() {
    setOpenModal((prev) => !prev);
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
      <Modal
        character={character}
        opened={openModal}
        toggleModal={toggleModal}
        loadingChar={loadingChar}
      />
    </div>
  );
};

export default Characters;
