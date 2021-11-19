import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/NavBike.css";

function NavBike(props) {
  const { planRouteTheme } = props;
  const [isPlanRouteTheme, setIsPlanRouteTheme] = useState(false);

  useEffect(() => {
    // console.log("------------------------");
    // console.log("planRouteTheme NavBike: ", planRouteTheme);

    planRouteTheme ? setIsPlanRouteTheme(true) : null;
    // console.log("isPlanRouteTheme NavBike: ", isPlanRouteTheme);
  });

  const navTextStyle = isPlanRouteTheme ? "nav-text-plan-route-color" : null;

  return (
    <div>
      <Navbar
        className={isPlanRouteTheme ? "nav-bike-plan-route" : "nav-bike"}
        expand="lg"
      >
        <Container className="nav-bike-container">
          <Navbar.Brand href="#home">
            <span className={navTextStyle + " nav-text-logo"}>YouRoad</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#nav-route-plan">
                <div className={navTextStyle + " nav-text"}>規劃路線</div>
              </Nav.Link>
              <Nav.Link href="#nav-youbike-map">
                <div className={navTextStyle + " nav-text"}>YouBike地圖</div>
              </Nav.Link>
              <Nav.Link href="#nav-bike-routes">
                <div className={navTextStyle + " nav-text"}>自行車路線</div>
              </Nav.Link>
              <Nav.Link href="#nav-login-button">
                <div
                  className={
                    isPlanRouteTheme
                      ? "nav-logo-plan-route-bg nav-text login-button"
                      : "nav-text login-button"
                  }
                >
                  登入
                </div>
              </Nav.Link>

              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

NavBike.propTypes = {
  planRouteTheme: PropTypes.bool.isRequired,
};

export default NavBike;
