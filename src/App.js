import NavBike from "./components/NavBike";
import MainContent from "./components/MainContent";
import FooterBike from "./components/FooterBike";

// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBike />
      <MainContent showLanding="true" />
      <FooterBike />
    </div>
  );
}

export default App;
