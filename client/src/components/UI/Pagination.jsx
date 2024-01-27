import React from "react";

const Pagination = ({ page, setPage, totalPages }) => {
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <div
          key={i}
          className={`pagination__number ${
            i === page ? "pagination__number--active" : ""
          }`}
          onClick={() => setPage(i)}
        >
          {i}
        </div>
      );
    }
    return pages;
  };

  return (
    <>
      <div className="pagination">
        <div className="pagination__action">
          <button
            onClick={() =>
              setPage((prev) => (prev > 1 ? prev - 1 : totalPages))
            }
          >
            Prev
          </button>
          {renderPageNumbers()}
          <button
            onClick={() =>
              setPage((prev) => (prev < totalPages ? prev + 1 : 1))
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
