import React from "react";

const Metamask = () => {
  return (
    <div
      style={{
        border: "0.5px solid #ccc",
        display: "inline-block",
        textAlign: "center",
        margin: "10px",
        padding: "20px",
        fontSize: "20px",
      }}
    >
      <p>
        {" "}
        Metamask is not installed, <br />
        Download <a href="https://metamask.io/">Metamask</a> to continue.
      </p>
    </div>
  );
};

export default Metamask;
