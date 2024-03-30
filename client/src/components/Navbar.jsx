import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Modal,
  Tab,
  NavItem,
  NavLink,
} from "react-bootstrap";
import Javascript from "../assets/images/javascript.png";
import {  NavLink as RouterNavLink } from "react-router-dom";

import Auth from "../utils/auth";

import PlayerLoginForm from "./loginPlayer";
import CreatePlayerForm from "./createPlayer";

const AppNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    if (expanded) {
      setExpanded(false);
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        expanded={expanded}
        className="bg-body-tertiary navbar"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Javascript}
              alt="Main Logo"
              width="30"
              height="30"
              className="align-top"
            />
            Javascript Quiz Central
          </Navbar.Brand>

          <Navbar.Toggle onClick={handleNavbarToggle} />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link
                    as={RouterNavLink}
                    to="/user-highscores"
                    activeClassName="active"
                    onClick={handleLinkClick}
                  >
                    High-Scores
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav className="mr-lg-0">
                  <Nav.Link onClick={() => setShowModal(true)}>
                    Login/Sign Up
                  </Nav.Link>
                </Nav>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <NavItem>
                  <NavLink eventKey="login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="signup">Sign Up</NavLink>
                </NavItem>
              </Nav>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <PlayerLoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <CreatePlayerForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;

