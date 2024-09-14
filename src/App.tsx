import { useState } from "react";
import "./App.css";
import { add } from "./utils/Add";

function App(): JSX.Element {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | string>(0);

  const handleCalculate = () => {
    try {
      const res = add(input);
      setResult(res);
    } catch (error) {
      setResult(error.message);
    }
  };
  return (
    <div className="container">
      <h1>String Calculator</h1>
      <textarea
        value={input}
        data-testid="input"
        placeholder="Enter numbers"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCalculate} data-testid="calculate">
        Calculate
      </button>
      <p data-testid="result">Result: {result} </p>
    </div>
  );
}

export default App;
