import React from "react";

const Search = ({ research, setResearch }) => {
  return (
    <div className="header">
      <h1>
        <span role="img" aria-label="smiley">
          😎
        </span>{" "}
        Emoji Search{" "}
        <span role="img" aria-label="smiley">
          😎
        </span>
      </h1>
      <input
        className="search"
        type="text"
        placeholder="what emoji are you looking for ?"
        value={research}
        onChange={(event) => {
          setResearch(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;
