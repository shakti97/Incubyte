import "./App.css";

function App() {
  return (
    <>
      <h1>String Calculator</h1>
      <input type="text" data-testid="input" placeholder="Enter numbers" />
      <button data-testid="calculate">Calculate</button>
      <p data-testid="result">Result: </p>
    </>
  );
}

export default App;
