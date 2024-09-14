import { useState } from "react";
import "./App.css";

function App(): JSX.Element {
  const [input, setInput] = useState<string>("");

  return (
    <>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        data-testid="input"
        placeholder="Enter numbers"
        onChange={(e) => setInput(e.target.value)}
      />
      <button data-testid="calculate">Calculate</button>
      <p data-testid="result">Result: </p>
    </>
  );
}

export default App;
