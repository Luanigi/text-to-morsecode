import React from 'react';

const InputForm = ({ onConvert }) => {
  return (
    <div className="container">
      <h2 htmlFor="englishText">Enter Text:</h2>
      <textarea id="text" rows="4"></textarea>
      <button id='convertBtn' onClick={onConvert}>Convert</button>
    </div>
  );
};

export default InputForm;