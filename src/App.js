import "./App.css";
import axios from "axios";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <Weather city="London" />
    </div>
  );
}

export default App;
