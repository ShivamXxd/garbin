import React, { useEffect, useState } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { useAuth } from "../../contexts/AuthContext";
import { Card } from "react-bootstrap";
import "./Home.css";

function Home(props) {
  const { currentUser } = useAuth();
  const currentUserMail = currentUser.email;
  const userData = props.userData;
  const [currentUserData, setCurrentUserData] = useState({
    userID: "",
    firstName: "",
    lastName: "",
    email: "",
    phno: "",
    gender: "",
    address1: "",
    address2: "",
    stateValue: "",
    cityValue: "",
  });
  let currentUserArray = [];
  useEffect(() => {
    function func() {
      for (let i = 0; i < userData.length; i++) {
        if (currentUserMail === userData[i].email) {
          currentUserArray.push(userData[i]);
        }
      }
      let currentUserObject = currentUserArray[0];
      setCurrentUserData(currentUserObject);
    }
    func();
    return () => {
      setCurrentUserData({
        userID: "",
        firstName: "",
        lastName: "",
        email: "",
        phno: "",
        gender: "",
        address1: "",
        address2: "",
        stateValue: "",
        cityValue: "",
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="home_container">
        <div className="slogan">Clean India will make Green India</div>
        <div className="welcome_msg">
          Welcome {currentUserData.firstName + " " + currentUserData.lastName}
          <div>
            Your <strong>Unique ID</strong> is {currentUserData.userID}
          </div>
        </div>
        <div className="topic_title1">
          Let's see what this Garbin thing is all about...
        </div>
        <div className="social_benefits">
          <div className="topic_text">
            If we ask a secretory of an average society of 50 houses what do you
            mean by 540 rupees per month with the use of just garbage ? He must
            be like o man it's more than 27000 per month and 3,24,000 per year
            by just waste of garbage.
          </div>
          <div className="analysis">
            <div className="topic_title1">
              Let's try to analyze the profits for an average household
            </div>
            <div className="topic_text">
              In India average, each family in the cities like Mumbai and
              Bangalore approximately produces 4.5 kgs of garbage and just
              throws without any benefit !!!! so if we plant the smart garbage
              systems like GARBIN we can provide ₹20.25 to the family daily !!
              so monthly ₹607 which is equal to a one mobile recharge ? not a
              bad deal right?
            </div>
            <div className="mb_container">
              <img
                className="money_bin"
                src="./images/money_bin.jpg"
                alt="moneyBin"
              />
            </div>
            <Card className="calculations_card">
              <div className="calculations">
                <div className="title_container">
                  <div className="title1">
                    Average daily waste production per house
                    <div>4.5KG</div>
                  </div>
                  <div className="title2">
                    Company payoffs to the middle man per kg
                    <div>Rs.6</div>
                  </div>
                </div>
                <div className="calc_list">
                  <div>4.5 X 6 = 27 = per day income</div>
                  <div>27 X 30 = 810 = per month income</div>
                  <div>810 X 12 = 9720 = per year income</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
