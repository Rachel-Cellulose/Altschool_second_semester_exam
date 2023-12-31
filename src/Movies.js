import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Movies = () => {
  const navigate = useNavigate();
  const kdrama = (event) => {
    navigate("/error-boundary-test");
    console.error("Something went wrong!");
  };
  const romcom = (event) => {
    event.preventDefault();
    alert("I see love in the air");
  };
  const action = (event) => {
    event.preventDefault();
    alert("Nice movie taste you've got there");
  };

  return (
    <div className="all-movies">
      <h1>Testing ErrorBoundary</h1>
      {
      <h3> Click on "kdrama" to see more movie options</h3> }
      <div className="movies">
        
        <button onClick={kdrama}>Kdrama</button>
      </div>
    </div>
  );
};

export default Movies;
