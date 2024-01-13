import { useState } from 'react'
import InputForm from './InputForm';
import MorseOutput from './MorseOutput';
import './App.css'

function App() {
  const [morseCode, setMorseCode] = useState("")

  const convertToMorse = () => {
    const text = document.getElementById('text').value.toUpperCase();
    let morseResult = '';

    const morseCodeMap = {
      'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
      'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
      'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
      'Y': '-.--', 'Z': '--..',
      '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
      '8': '---..', '9': '----.', '0': '-----',
      ' ': '/',
    };

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (morseCodeMap[char]) {
        morseResult += morseCodeMap[char] + "";
      }
    }

    setMorseCode(morseResult.trim())
  };

  return (
    <>
      <div>
        <h1>Text to Morse Code Converter</h1>
        <div className="container">
          <InputForm onConvert={convertToMorse} />
          <MorseOutput morseCode={morseCode} />
          </div>
      </div>
    </>
  )
}

export default App
