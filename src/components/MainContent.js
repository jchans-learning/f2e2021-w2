import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import LandingPage from "./LandingPage";
import BikeRoutePlan from "./BikeRoutePlan";

import "./styles/MainContent.css";

function MainContent(props) {
  const { setPlanRouteTheme } = props;
  const [hideLandingPage, setHideLandingPage] = useState(false);

  useEffect(() => {
    hideLandingPage ? setPlanRouteTheme(true) : null;
  });

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

MainContent.propTypes = {
  setPlanRouteTheme: PropTypes.func.isRequired,
};

export default MainContent;
