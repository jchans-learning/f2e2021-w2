import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/FooterBike.css";

function FooterBike(props) {
  const { planRouteTheme } = props;
  const [isPlanRouteTheme, setIsPlanRouteTheme] = useState(false);

  useEffect(() => {
    planRouteTheme ? setIsPlanRouteTheme(true) : null;
    console.log("planRouteTheme Footer: ", planRouteTheme);
  });

  return (
    <div>
      <Navbar
        className={
          isPlanRouteTheme
            ? "footer-bike fixed-bottom footer-bike-plan-route-bg"
            : "footer-bike fixed-bottom"
        }
        expand="lg"
      >
        {/* use fixed-bottome class to make sticky footer */}
        <Container className="footer-bike-container">
          <div className="footer-text-left">
            © 2021 F2E All Rights Reserved.
          </div>
          <div className="icon-list">
            <div className="icon-facebook"></div>
            <div className="icon-instagram"></div>
            <div className="icon-line"></div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

FooterBike.propTypes = {
  planRouteTheme: PropTypes.bool.isRequired,
};

export default FooterBike;
