import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { decode } from "jsonwebtoken";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";

const Navigation = () => {
  const user = decode(localStorage.getItem("token"));
  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
    };
  });


  return (
    <>
      <Navbar expand="lg" fixed="top">
        <Image src="https://i.ibb.co/7VxS53w/logo.png" alt="logo" className="logo" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {state.token ? (
              <div>
                {user && user.roleId === 2 ? (
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link to="/deleteDate/:id" style={{ color: "black" }}>
                      Appointment Status
                    </Link>
                    <Link to="/listDate/:id" style={{ color: "black" }}>
                      Appointment details
                    </Link>
                  </div>
                ) : (
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link to="listBuyer" style={{ color: "black" }}>
                    Seller details
                    </Link>
                    <Link to="addDate" style={{ color: "black" }}>
                    Add appointment
                    </Link>
                  </div>
                )}
                <NavDropdown.Divider />
              </div>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
