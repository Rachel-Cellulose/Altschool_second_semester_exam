import React, { useState } from "react";

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
    <section className="main-container">
      <div>{/* <h1 className="title">Counter App</h1> */}</div>

      <div>
        <div className="wrapper">
          <div>
            <p className="display">Count: {counter.count}</p>
          </div>

          <div className="value-container">
            <label htmlFor="countInput">Set Count:</label>
            <input
              type="number"
              id="countInput"
              value={counter.count}
              onChange={(e) => counter.setValue(parseInt(e.target.value, 10))}
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
        </div>
      </div>
    </section>
  );
};

export { useCounter, CounterApp };
