import React from "react";

const MovieInfo = (props) => {
  return (
    <div className="container">
      <div className="row mb-3">
        <div
          className="col-md-2"
          onClick={props.closedMovieInfo}
          style={{ cursor: "pointer", paddingTop: 50 }}
        >
          <i className="bi bi-box-arrow-left" /> <span>Go back</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          {props.currentMovie.poster_path == null ? (
            <img src={""} alt="Image" style={{ width: "100%", height: 360 }} />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
              alt="Image"
              style={{ width: "100%", height: 360 }}
            />
          )}
        </div>
        <div className="col-md-8">
          <p>
            <strong>Title:-</strong> {props.currentMovie.title}
          </p>
          <p>
            <strong>Release-date:-</strong>{" "}
            {props.currentMovie.release_date
              .substring(5)
              .split("-")
              .concat(props.currentMovie.release_date.substring(0, 4))
              .join("/")}
          </p>
          <p>
            <strong>Language:-</strong> {props.currentMovie.original_language}
          </p>
          <p>
            <strong>Overview:-</strong> {props.currentMovie.overview}
          </p>
          <p>
            <strong>Rating:-</strong> {props.currentMovie.vote_average}{" "}
            <i class="bi bi-star-fill" style={{ color: "#F4D31C" }} />
          </p>
          <p>
            <strong>Votes:-</strong> {props.currentMovie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
