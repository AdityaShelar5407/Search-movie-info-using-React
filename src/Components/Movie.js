import React from "react";

const Movie = (props) => {
  return (
    <div className="col-md-3">
      <div className="card">
        {props.image == null ? (
          <img
            src={``}
            className="card-img-top"
            alt="..."
            style={{ width: "100%", height: 360 }}
          />
        ) : (
          <img
            src={`http://image.tmdb.org/t/p/w185${props.image}`}
            className="card-img-top"
            alt="..."
            style={{ width: "100%", height: 360 }}
          />
        )}
        <div className="card-title"></div>
        <a
          href="#"
          className="btn btn-primary"
          onClick={() => props.viewMovieInfo(props.movieId)}
        >
          More Details
        </a>
      </div>
    </div>
  );
};

export default Movie;
