import React from "react";

const Pagination = (props) => {
  const pageLinks = [];

  for (let i = 1; i <= props.pages + 1; i++) {
    let active = props.curentPage == i ? "active" : "";

    pageLinks.push(
      <li
        className={`page-item ${active}`}
        key={i}
        onClick={() => props.nextPage(i)}
      >
        <a className="page-link" href="#">
          {i}
        </a>
      </li>
    );
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <nav aria-label="Page navigation example ms-10">
          <ul className="pagination">
            {props.currnetPage > 1 ? (
              <li
                className="page-item"
                onClick={() => props.nextPage(props.currnetPage - 1)}
              >
                <a className="page-link" href="#">
                  prev
                </a>
              </li>
            ) : (
              ""
            )}
            {pageLinks}
            {props.currnetPage < props.pages + 1 ? (
              <li
                className={`page-item`}
                onClick={() => props.nextPage(props.currnetPage + 1)}
              >
                <a className={`page-link`} href="#">
                  next
                </a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
