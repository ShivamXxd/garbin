import React from "react";
import Navbar from "../../Header/Navbar";
import Footer from "../../Footer/Footer";
import GiftCard from "./GiftCard";
import "./Transactions.css";

export const tokens = 10;
function Transactions() {
  return (
    <>
      <Navbar />
      <div className="tr_container">
        <div className="tr_header">
          <div className="tr_title">
            Sorry, this feature will soon be available!
          </div>
          <div className="token_reward">
            You have been rewarded 10 tokens for a successful registration!
          </div>
          <div className="token_container">
            Your tokens : {tokens}
            <img className="token" src="./images/token.jpg" alt="token" />
          </div>
        </div>
        <div className="gc_container">
          <GiftCard logo="./images/Amazon_logo.svg" amount="$25" tokens={175} />
          <GiftCard
            logo="./images/Flipkart_logo.svg"
            amount="$15"
            tokens={150}
          />
          <GiftCard logo="./images/Zomato_logo.png" amount="$30" tokens={200} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Transactions;
