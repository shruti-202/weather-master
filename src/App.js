import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  const [weatherDetails, setWeatherDetails] = useState(null);
  
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <Search setWeatherDetails={setWeatherDetails} />
        {weatherDetails !== null ? (
          <WeatherCard weatherDetails={weatherDetails} />
        ) : null}
      </div>
      <Footer />
    </div>
  );
}

export default App;
