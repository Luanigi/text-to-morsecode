import React from 'react';

const MorseOutput = ({ morseCode }) => {
  return (
    <div className="container">
      <h2 htmlFor="morseCode">Morse Code:</h2>
      <textarea id="morseCode" rows="4" readOnly value={morseCode}></textarea>
    </div>
  );
};

export default MorseOutput;