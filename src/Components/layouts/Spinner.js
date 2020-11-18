import React from "react";
import spin from "../../images/spin.gif";

const Spinner = () => {
  return (
    <div style={{ height: "83vh" }}>
      <img
        src={spin}
        alt="loading..."
        style={{
          width: "250px",
          margin: "auto",
          display: "block",
        }}
      />
    </div>
  );
};

export default Spinner;
