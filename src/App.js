import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import PageNotFound from "./PageNotFound";
import TestErrorBoundary from "./TestErrorBoundary";

function Home() {
  return (
    <section className="home-container">
      <h1> HOME PAGE </h1>

      <div className="info-box">
        <h2>
          Welcome to my Custom Hook Counter App page made for my Second Semester
          Exam
        </h2>

        <div className="nav-box">
          <Link to="/error" style={{ textDecoration: "none" }}>
            {" "}
            Check here for error page
          </Link>
        </div>

        <div className="nav-box">
          <Link to="/CounterApp" style={{ textDecoration: "none" }} >
            {" "}
            My Counter App
          </Link>
        </div>
      </div>
    </section>
  );
}

function Error() {
  return (
    <section className="error-container">
      <div className="layer1">
        <div className="layer2">
          <div className="layer3">
            <h1> ERROR 404</h1>
            <p>Ooops!!!!</p>
            <h2>Sorry, the page you are looking for does not exist.</h2>
            <button>
              <Link style={{ textDecoration: "none" }}className="Button" to="/">
                Go back to Home Page
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  const setValue = (value) => {
    setCount(value);
  };

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
};

const CounterApp = () => {
  const counter = useCounter(0);

  return (
    <div className="header" >
        <div className="wrapper">
          <div>
            <p className="display">
              Count:{" "}
              <span className="placeholder">
                {counter.count ? counter.count : "count now"}
              </span>
            </p>
          </div>

          <div className="value-container">
            <label htmlFor="countInput">Set value:</label>
            <input
              type="number"
              id="countInput"
              value={counter.count}
              onChange={(e) => counter.setValue(parseInt(e.target.value, 10))}
              placeholder="Enter a value"
            />
          </div>

          <div className="increment-container" onClick={counter.increment}>
            Increment
          </div>

          <div className="decrement-container" onClick={counter.decrement}>
            Decrement
          </div>

          <div className="reset-container" onClick={counter.reset}>
            Reset
          </div>

          <div className="nav-box">
            <Link to="/" style={{ textDecoration: "none" }}>
              Back to Home
            </Link>
          </div>
        </div>
    </div>
  );
};

function App() {
  return (
    <section className="main-container">
      <switch>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="/CounterApp" element={<CounterApp />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/TestErrorBoundary" element={<PageNotFound />} />
          {" TestErrorBoundary"}
          {/* Include the ErrorBoundaryTest component */}
        </Routes>
      </switch>
    </section>
  );
}
export default App;
