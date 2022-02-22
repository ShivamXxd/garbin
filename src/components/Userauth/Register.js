import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./Register.css";

function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState("");
  const navigate = useNavigate();
  const userID = Math.floor(Math.random() * 10000) + 1000;
  const [userData, setUserData] = useState({
    userID: userID,
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
  const states = [
    "Gujarat",
    "Maharashtra",
    "Delhi",
    "Karnataka",
    "UttarPradesh",
  ];
  const citiesByState = [
    ["Vadodara", "Ahmedabad", "Surat", "Rajkot", "Dahod"],
    ["Mumbai", "Pune", "Nagpur"],
    ["New Delhi", "Deoli", "Hastsal"],
    ["Bangalore", "Mysore"],
    ["Lucknow", "Kanpur", "Varanasi", "Prayagraj", "Agra", "Noida", "Aligarh"],
  ];

  function handleChange(event) {
    const selectedState = event.target.value;
    setState(selectedState);
    setUserData((prevValue) => {
      return { ...prevValue, stateValue: selectedState };
    });
  }
  function handleCityChange(event) {
    const selectedCity = event.target.value;
    setUserData((prevValue) => {
      return { ...prevValue, cityValue: selectedCity };
    });
  }
  function handlePhoneChange(event) {
    const inputPhno = event;
    const inputCountryCode = inputPhno.slice(0, 2);
    const inputPhone = inputPhno.slice(2, 12);
    setUserData((prevValue) => {
      return { ...prevValue, phno: "+" + inputCountryCode + " " + inputPhone };
    });
  }
  function updateCity() {
    for (let i = 0; i < 5; i++) {
      if (state === states[i]) {
        return citiesByState[i].map((city) => <option>{city}</option>);
      }
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }
    if (passwordRef.current.value.length < 8) {
      return setError("Password is too short, min. 8 characters required!");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      const {
        userID,
        firstName,
        lastName,
        email,
        phno,
        gender,
        address1,
        address2,
        stateValue,
        cityValue,
      } = userData;
      const test = {
        userID: userID,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phno: phno,
        gender: gender,
        address1: address1,
        address2: address2,
        stateValue: stateValue,
        cityValue: cityValue,
      };

      fetch(
        "https://garbin-database-4943e-default-rtdb.firebaseio.com/garbinUserDB.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(test),
        }
      );
      navigate("/");
    } catch {
      setError("Failed to create an account!");
    }
    setLoading(false);
  }

  function postUserData(event) {
    const { name, value } = event.target;
    setUserData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <>
      <Card className="mt-5 form_card">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="fix_group">
              <Form.Label className="fix_labels">
                First Name
                <span className="imp">*</span>
              </Form.Label>
              <Form.Control
                name="firstName"
                value={userData.firstName}
                onChange={postUserData}
                type="text"
                required
              />
            </Form.Group>
            <Form.Group className="fix_group">
              <Form.Label className="fix_labels">
                Last Name <span className="imp">*</span>
              </Form.Label>
              <Form.Control
                name="lastName"
                value={userData.lastName}
                onChange={postUserData}
                type="text"
                required
              />
            </Form.Group>
            <Form.Group id="email" className="fix_group">
              <Form.Label className="fix_labels">
                Email <span className="imp">*</span>
              </Form.Label>
              <Form.Control
                name="email"
                value={userData.email}
                onChange={postUserData}
                type="email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id="password" className="fix_group">
              <Form.Label className="fix_labels">
                Password <span className="imp">*</span>
              </Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm" className="fix_group">
              <Form.Label className="fix_labels">
                Confirm Password <span className="imp">*</span>
              </Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Form.Group className="phone_input fix_group">
              <Form.Label className="fix_labels">
                Phone Number <span className="imp">*</span>
                <PhoneInput
                  country={"in"}
                  name="phno"
                  onChange={handlePhoneChange}
                />
              </Form.Label>
            </Form.Group>
            <FormControl className="gender_part">
              <FormLabel style={{ color: "black" }} className="fix_labels">
                Gender <span className="imp">*</span>
              </FormLabel>
              <RadioGroup row>
                <FormControlLabel
                  name="gender"
                  value="male"
                  onChange={postUserData}
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  name="gender"
                  value="female"
                  onChange={postUserData}
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  name="gender"
                  value="others"
                  onChange={postUserData}
                  control={<Radio />}
                  label="Others"
                />
              </RadioGroup>
            </FormControl>
            <Form.Group className="fix_group">
              <Form.Label className="fix_labels">
                Permanent Address 1 <span className="imp">*</span>
              </Form.Label>
              <div>
                <textarea
                  name="address1"
                  value={userData.address1}
                  onChange={postUserData}
                  className="address"
                  style={{ height: "74px" }}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group className="fix_group">
              <Form.Label className="fix_labels">
                Permanent Address 2 (Optional)
              </Form.Label>
              <div>
                <textarea
                  name="address2"
                  value={userData.address2}
                  onChange={postUserData}
                  className="address"
                  rows="3"
                />
              </div>
            </Form.Group>
            <Form.Group className="state fix_group">
              <Form.Label className="fix_labels">
                State <span className="imp">*</span>
              </Form.Label>
              <select
                name="state"
                className="state_dropdown"
                onChange={handleChange}
              >
                {states.map((state) => (
                  <option>{state}</option>
                ))}
              </select>
            </Form.Group>
            <Form.Group className="city fix_group">
              <Form.Label className="fix_labels">
                City <span className="imp">*</span>
              </Form.Label>
              <select
                name="city"
                onChange={handleCityChange}
                className="city_dropdown"
              >
                {updateCity()}
              </select>
            </Form.Group>
            <Button
              variant="success"
              disabled={loading}
              className="w-100 mt-4"
              type="submit"
            >
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 mb-5">
        <Link className="login_link" to="/">
          Already have an account? Log In
        </Link>
      </div>
    </>
  );
}

export default Register;
