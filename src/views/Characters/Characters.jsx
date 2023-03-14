import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";

import "./Characters.css";
import Modal from "../../components/Modal/Modal";
import Options from "../../components/Options/Options";

const Characters = () => {
  const [cards, setCards] = useState(null);
  const [filteredCards, setFilteredCards] = useState(null);
  const [wookie, setWookie] = useState(false);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingChar, setLoadingChar] = useState(false);
  const [character, setCharacter] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getData("https://swapi.dev/api/people/");
  }, []);

  useEffect(() => {
    getData("https://swapi.dev/api/people/");
  }, [wookie]);

  function getData(url) {
    setLoading(true);

    fetch(wookie ? url + "?format=wookiee" : url)
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
    fetch(
      `https://swapi.dev/api/people/?search=${name}${
        wookie ? "?format=wookiee" : ""
      }`
    )
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

  function filterData(value) {
    if (value === "all") {
      setFilteredCards(null);
      console.log(cards);
      // return cards;
    }

    if (cards && value !== "all") {
      const newArr = cards.filter((item) => item.eye_color === value);
      setFilteredCards(newArr);
      console.log(filteredCards);
    }

    // return;
  }

  // console.log(pagination);

  return (
    <div className="Characters">
      <div className="container">
        {/* language selector */}
        <div className="lang" onClick={() => setWookie((prev) => !prev)}>
          language: <span>{wookie ? "wookie" : "en"}</span>
        </div>
        {/* title */}
        <div className="characters__title">
          {pagination ? pagination.count : <Loading />}
          {wookie ? (
            <span> rcwochuanaoc</span>
          ) : (
            <>
              <span> Peoples</span> for you to choose your favorite
            </>
          )}
        </div>
        {/* filter selector */}
        <Options filterData={filterData} />
        {/* cards */}
        {loading && (
          <div className="loader">
            <Loading />
          </div>
        )}
        <div className="characters__content">
          {cards && !filteredCards && !loading
            ? cards.map((card, index) => {
                return (
                  <CharacterCard
                    key={card.name || card.whrascwo}
                    id={index}
                    getCharacterInfo={getCharacterInfo}
                    {...card}
                  />
                );
              })
            : filteredCards !== null &&
              filteredCards.map((card, index) => {
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
            wookie={wookie}
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
