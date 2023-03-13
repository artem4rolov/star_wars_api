import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Pagination from "../../components/Pagination/Pagination";
import "./Characters.css";

const Characters = () => {
  const [cards, setCards] = useState(null);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.results);
        setPagination(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(pagination);

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
        <div className="characters__content">
          {cards &&
            cards.map((card) => {
              const { name, height, mass, gender, birth_year } = card;

              return <CharacterCard key={name} {...card} />;
            })}
        </div>
        {/* pagination */}
        {pagination && <Pagination pagination={pagination} />}
      </div>
    </div>
  );
};

export default Characters;
