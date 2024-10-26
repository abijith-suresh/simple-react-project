import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  const decrementCount = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="mb-4">Counter App</h1>
      <div className="card shadow-sm p-4" style={{ width: "300px" }}>
        <p className="text-center mb-4 display-4">{count}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-danger" onClick={decrementCount}>
            Decrement
          </button>
          <button className="btn btn-success" onClick={incrementCount}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
