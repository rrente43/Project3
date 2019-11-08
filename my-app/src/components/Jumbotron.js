import React from "react";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1>Find the Perfect Home Today!!</h1>
      <p>
        My Home is an application that can help you find the perfect house for sale.
      </p>
      <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
    </div>
    
  );
}

export default Jumbotron;
