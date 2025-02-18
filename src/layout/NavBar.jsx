import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="head-bttm">
        <Container>
          <Navbar expand="lg">
            <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/Markettingproduct">
                    MARKETING PRODUCTS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">PROMOTIONAL PRODUCTS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">LARGE FORMAT PRINTING</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">CUSTOM APPAREL</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">AWARDS & GIFTS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">SERVICES</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Bulk Order?</NavLink>
                </NavItem>
              </Nav>

              <Link to="/Contact" className="btn btn-success">
                GET FREE QUOTE
              </Link>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </>
  );
};

export default NavBar;
