import "./App.css";
import Header from "./Header";
import Parent from "./Parent";

function App() {
  return (
    <div className="App" style={{ margin: "1rem" }}>
      <Header />
      <h1>State and Props</h1>
      <Parent />
    </div>
  );
}

export default App;
