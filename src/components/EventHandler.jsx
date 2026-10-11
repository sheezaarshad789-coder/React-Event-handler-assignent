import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-page">
      <div className="counter-box">
        <h2 className="counter-title">Counter</h2>
        <h3 className="counter-number">{count}</h3>

        <div className="counter-buttons">
          <button className="btn increase-btn" onClick={increase}>
            + Increase
          </button>
          <button className="btn decrease-btn" onClick={decrease}>
            - Decrease
          </button>
        </div>

        <div className="reset-wrap">
          <button className="btn reset-btn" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;