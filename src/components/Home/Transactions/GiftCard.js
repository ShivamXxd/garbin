import React from "react";
import { Card } from "react-bootstrap";
import "./GiftCard.css";

function GiftCard(props) {
  return (
    <Card className="gift_card">
      <div className="gc_title">
        <img className="gc_logo" src={props.logo} alt="logo" />
        <div>Gift Card</div>
      </div>
      <div className="gc_amount">
        {props.tokens}{" "}
        <img className="gc_token" src="./images/token.jpg" alt="token" /> ={" "}
        {props.amount}
      </div>
      <div className="gc_buttons">
        <div className="redeem_button">Redeem</div>
        <div className="help_button">Help</div>
      </div>
    </Card>
  );
}

export default GiftCard;
