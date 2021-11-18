import React from "react";
import { useState } from "react";
import LandingPage from "./LandingPage";
import BikeRoutePlan from "./BikeRoutePlan";
import "./styles/MainContent.css";

function MainContent() {
  const [hideLandingPage, setHideLandingPage] = useState(false);

  const startPlanning = () => {
    setHideLandingPage(true);
  };

  return (
    <div className="main-content">
      {hideLandingPage ? (
        <BikeRoutePlan />
      ) : (
        <LandingPage startPlanningIsClicked={startPlanning} />
      )}
    </div>
  );
}

export default MainContent;
