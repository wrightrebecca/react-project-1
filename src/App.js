import "./App.css";
import Current from "./Components/Current";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <header>
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter a town, city or country"
            required
            className="search-form-input"
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
      <Current />
      <Footer />
    </div>
  );
}
