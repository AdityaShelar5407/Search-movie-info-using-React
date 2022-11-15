import React from "react";

const Searcharea = (props) => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <section className="col-md-6">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input
                className="form-control me-2"
                placeholder="Search.."
                type="text"
                arial-label="Search"
                onChange={props.handleChange}
              ></input>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Searcharea;
