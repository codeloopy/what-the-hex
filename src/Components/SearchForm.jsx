import React from 'react'

export default function SearchForm({colorResults, searchColor, setSearchColor, handleSearch}) {
  return (
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
  )
}
