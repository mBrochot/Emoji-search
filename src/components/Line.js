import React, { useState } from "react";

const Line = ({ symbol, title }) => {
  const [hoverLine, setHoverLine] = useState(false);
  // const [fingerTouch, setFingerTouch] = useState(false);
  const [copy, setCopy] = useState(false);
  return (
    <div
      className="line"
      onMouseEnter={() => setHoverLine(true)}
      onMouseLeave={() => setHoverLine(false)}
      onTouchStart={() => {
        navigator.clipboard.writeText(symbol);
        setCopy(!copy);
      }}
      onClick={() => {
        navigator.clipboard.writeText(symbol);
        setCopy(!copy);
      }}
    >
      <span className="symbol">{symbol}</span>
      <span>{title}</span>
      <span
        className="copy-span"
        style={{
          display: hoverLine ? "inherit" : "none",
        }}
      >
        - Click to copy ! -{" "}
        <span
          role="img"
          aria-label="check"
          style={{
            display: copy ? "inherit" : "none",
          }}
        >
          ✅
        </span>
      </span>
    </div>
  );
};

export default Line;
