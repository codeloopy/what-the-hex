import { useState } from "react";
import Colors from "../Colors.js";

import CopiedPopup from "./CopiedPopup.jsx";
import SearchForm from "./SearchForm.jsx";
import SearchResults from "./SearchResults.jsx";

import "./ColorWindow.css";

export default function ColorWindow() {
  const [htmlColor, setHtmlColor] = useState("#000000");
  const [searchColor, setSearchColor] = useState("");
  const [searchColorResults, setSearchColorResults] = useState([]);
  const [isCopied, setIsCopied] = useState(false);

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

  const handleCopy = async (hexCode) => {
    try {
      await navigator.clipboard.writeText(hexCode);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);

    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div id="colorWindowContainer">
    {isCopied && <CopiedPopup />}
      <div id="colorWindow" style={{ backgroundColor: htmlColor }}>
        <span style={{ color: "white", cursor: 'pointer' }} onClick={() => handleCopy(htmlColor)}>{htmlColor}</span>
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

      <SearchForm colorResults={colorResults} searchColor={searchColor} setSearchColor={setSearchColor} handleSearch={handleSearch} />
      <SearchResults searchColorResults={searchColorResults} />
    </div>
  );
}
