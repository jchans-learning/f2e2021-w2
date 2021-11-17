import NavBike from "./NavBike";
import MainContent from "./MainContent";
import FooterBike from "./FooterBike";

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
