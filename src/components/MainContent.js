import React from "react";
import { useState } from "react";
import LandingPage from "./LandingPage";
import BikeRoutePlan from "./BikeRoutePlan";
import "./styles/MainContent.css";

function MainContent() {
  const [hideLandingPage, setHideLandingPage] = useState(false);

  return (
    <div className="main-content">
      {hideLandingPage ? (
        <BikeRoutePlan />
      ) : (
        <LandingPage setHideLandingPage={setHideLandingPage} />
      )}
    </div>
  );
}

export default MainContent;
