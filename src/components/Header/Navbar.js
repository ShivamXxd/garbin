import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
// import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  // const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    // await logout();
    navigate("/");
  }

  return (
    <>
      <div className="navbar_container">
        <div className="garbin_logo">
          <Link to="/home">
            <img src="./images/Garbin_logo.png" alt="logo" />
          </Link>
        </div>
        <div className="navigation_tools">
          <Link to="/home" className="home_link">
            Home
          </Link>
          <Link to="/about" className="about_link">
            About
          </Link>
          <Link to="/transactions" className="transactions_link">
            Transactions
          </Link>
          <Link to="/contact" className="contact_link">
            Contact
          </Link>
          <Button
            className="logout_button"
            variant="danger"
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
