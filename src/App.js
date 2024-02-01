import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <WeatherCard />
      <Footer />
    </div>
  );
}

export default App;
