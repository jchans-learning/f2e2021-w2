import React from "react";
// import { useState } from "react";
import PropTypes from "prop-types";

import "./styles/LandingPage.css";
function LandingPage(props) {
  const { setHideLandingPage } = props;

  return (
    <div className="landing-page">
      <h1 className="page-title">YouBike, YouRoad</h1>
      <div className="intro-text">
        近年來因應健康、環保等開啟了騎自行車風潮，我們整理了各縣市的自行車路線，結合
        Youbike 讓您快速規劃您的活動。
      </div>

      <div
        className="button-plan-route"
        onClick={() => setHideLandingPage(true)}
      >
        規劃路線
      </div>
    </div>
  );
}

LandingPage.propTypes = {
  setHideLandingPage: PropTypes.func.isRequired,
};

export default LandingPage;
