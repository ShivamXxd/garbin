import React from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import "./Transactions.css";

function Transactions() {
  const tokens = 0;

  return (
    <>
      <Navbar />
      <div className="tr_container">
        <div className="tr_header">
          <div className="tr_title">
            Sorry, this feature will soon be available!
          </div>
          <div className="token_container">
            Your tokens : {tokens}
            <img className="token" src="./images/token.jpg" alt="token" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Transactions;
