import React from 'react'

export default function SearchResults({ searchColorResults, handleCopy }) {
  return (
    <div id="results">
      {
      searchColorResults.length >=1 &&
      <table style={{ width: '100%', color: 'black' }}>
        <thead style={{ width: '100%', position: 'sticky', top: '0', backgroundColor: 'white' }}>
          <tr style={{ display: 'flex', justifyContent: 'space-between', gap:'1em' }}>
            <th style={{ width: '50%', padding: '10px' }}>Color Name & Hex</th>
            <th style={{ width: '50%', padding: '10px' }}>Complementary Color</th>
          </tr>
        </thead>
        <tbody>
          {searchColorResults.map((color) => {
            return (
              <div key={color.id} style={{display: 'flex', justifyContent: 'space-between', gap:'1em', cursor: 'pointer'}} onClick={() => handleCopy(color.code)}>
                <p style={{ width: '50%',backgroundColor: color.code, color: color.hexComplementary }}>
                  {color.name} {color.code}
                </p>
                <p style={{ width: '50%', backgroundColor: color.hexComplementary, color: color.code, cursor: 'pointer' }} onClick={() => handleCopy(color.code)}>
                  {color.hexComplementary}
                </p>
              </div>
            );
          })}
        </tbody>
      </table>}
    </div>
  )
}
