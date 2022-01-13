import React, { useState } from "react";

function OuterCounter() {
  const [state, setState] = useState(0);
  const OnIncrementHandler = () => {
    setState((state) => state + 1);
  };
  const OnDecrementHandler = () => {
    setState((state) => state - 1);
  };

  return (
    <div
      style={{
        backgroundColor: "#fafafa",
        margin: "0 auto",
        padding: "10px",
        width: "max-content",
        textAlign: "center",
      }}
    >
      <h2>Outer Counter</h2>
      <button
        onClick={OnIncrementHandler}
        style={{ marginRight: "10px", width: "3rem", height: "2rem" }}
      >
        +
      </button>
      <span style={{ fontSize: "1.25rem" }}>{state}</span>
      <button
        onClick={OnDecrementHandler}
        style={{ marginLeft: "10px", width: "3rem", height: "2rem" }}
      >
        -
      </button>
    </div>
  );
}

export default OuterCounter;
