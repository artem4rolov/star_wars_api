import React, { useEffect, useState } from "react";

const Pagination = ({ pagination }) => {
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
    <div>
      <a
        href={
          paginationObj && paginationObj.previous !== null
            ? paginationObj.previous
            : " "
        }
      >
        {getNumberOfPage(paginationObj.previous)}
      </a>
      <a
        href={
          paginationObj && paginationObj.next !== null
            ? paginationObj.next
            : " "
        }
      >
        {getNumberOfPage(paginationObj.next)}
      </a>
    </div>
  );
};

export default Pagination;
