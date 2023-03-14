import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import "./Pagination.css";

const Pagination = ({ pagination, getData, loading, wookie }) => {
  const [paginationObj, setPaginationObj] = useState([]);

  useEffect(() => {
    setPaginationObj(pagination);
  }, [pagination]);

  function getNumberOfPage(url) {
    if (url) {
      return url.includes("=") ? url.split("=")[1] : url;
    }
    return "";
  }

  return (
    <div className="pagination">
      <button
        onClick={() => getData("https://swapi.dev/api/people/")}
        className="pagination__link-start"
      >
        {wookie ? "naoc ..." : "Start ..."}
      </button>
      {loading ? (
        <Loading />
      ) : (
        <>
          <button
            onClick={() =>
              getData(
                paginationObj && paginationObj.previous !== null
                  ? paginationObj.previous
                  : "#"
              )
            }
            className={`pagination__link ${
              paginationObj.previous ? "" : "none"
            }`}
          >
            {getNumberOfPage(paginationObj.previous)}
          </button>
          <span className="current__page">
            {paginationObj.next && !loading
              ? parseInt(getNumberOfPage(paginationObj.next)) - 1
              : 9}
          </span>
          <button
            onClick={() =>
              getData(
                paginationObj && paginationObj.next !== null
                  ? paginationObj.next
                  : "#"
              )
            }
            className={`pagination__link ${paginationObj.next ? "" : "none"}`}
          >
            {getNumberOfPage(paginationObj.next)}
          </button>
        </>
      )}
      <button
        onClick={() => getData("https://swapi.dev/api/people/?page=9")}
        className="pagination__link-end"
      >
        {wookie ? "... wochua" : "... End"}
      </button>
    </div>
  );
};

export default Pagination;
