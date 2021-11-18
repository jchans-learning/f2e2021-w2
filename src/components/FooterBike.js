import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/FooterBike.css";

function FooterBike() {
  return (
    <div>
      <Navbar className="footer-bike fixed-bottom" expand="lg">
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

export default FooterBike;