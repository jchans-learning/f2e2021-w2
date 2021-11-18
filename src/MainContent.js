import React from "react";
import { useState } from "react";
import LandingPage from "./components/LandingPage";
import "./MainContent.css";

function MainContent() {
  const [hideLandingPage, setHideLandingPage] = useState(false);

  const startPlanning = () => {
    setHideLandingPage(true);
  };

  return (
    <div>
      {hideLandingPage ? null : (
        <LandingPage startPlanningIsClicked={startPlanning} />
      )}
    </div>
  );
}

export default MainContent;
