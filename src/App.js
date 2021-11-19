import { useState, useEffect } from "react";

import NavBike from "./components/NavBike";
import MainContent from "./components/MainContent";
import FooterBike from "./components/FooterBike";

// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [planRouteTheme, setPlanRouteTheme] = useState(false);

  useEffect(() => {
    console.log("planRouteTheme App: ", planRouteTheme);
  });

  return (
    <div
      className={planRouteTheme ? "app-initial app-plan-route" : "app-initial"}
    >
      <NavBike planRouteTheme={planRouteTheme} />
      <MainContent setPlanRouteTheme={setPlanRouteTheme} />
      <FooterBike planRouteTheme={planRouteTheme} />
    </div>
  );
}

export default App;
