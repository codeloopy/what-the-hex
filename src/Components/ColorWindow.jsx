import { useState } from "react";
import Colors from "../Colors.js";

import "./ColorWindow.css";

export default function ColorWindow() {
  const [htmlColor, setHtmlColor] = useState("#000000");
  const [searchColor, setSearchColor] = useState("");
  const [searchColorResults, setSearchColorResults] = useState([]);

  function handleSelect(event) {
    setHtmlColor(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    colorResults(searchColor);
    setSearchColor("");
  }

  function colorResults(colorQuery) {
    let results = Colors.filter((color) => {
      return color.name.toLowerCase().includes(colorQuery);
    });

    setSearchColorResults(results);
  }

  return (
    <div id="colorWindowContainer">
      <div id="colorWindow" style={{ backgroundColor: htmlColor }}>
        <span style={{ color: "white" }}>{htmlColor}</span>
      </div>
      <select name="colors" id="colors" onChange={e => handleSelect(e)} value={htmlColor}>
        {Colors.map((color) => {
          return (
            <option value={color.code} key={color.id}>
              {color.name}
            </option>
          );
        })}
      </select>
      <div id="searchColor">
        <form onSubmit={e => handleSearch(e)}>
          <input
            type="text"
            placeholder="Type Color"
            onChange={(e) => colorResults(setSearchColor(e.target.value.toLowerCase()))}
            value={searchColor}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div id="results">
        {searchColorResults.map((color) => {
          return (
            <p style={{ backgroundColor: color.code }} key={color.id}>
              {color.name} {color.code}
            </p>
          );
        })}
      </div>
    </div>
  );
}
