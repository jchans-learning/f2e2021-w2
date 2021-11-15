import React from "react";
import "./MainContent.css";

function MainContent() {
  return (
    <div className="main-content">
      <h1>YouBike, YouRoad</h1>
      <div className="intro-text">
        近年來因應健康、環保等開啟了騎自行車風潮，我們整理了各縣市的自行車路線，結合
        Youbike 讓您快速規劃您的活動。
      </div>

      <div className="button-plan-route">規劃路線</div>
    </div>
  );
}

export default MainContent;
