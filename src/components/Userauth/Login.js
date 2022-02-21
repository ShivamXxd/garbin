import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault(); // prevent refreshing
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/home");
    } catch {
      setError("Incorrect Email or Password!");
    }
    setLoading(false);
  }

  return (
    <div className="login_container">
      <Card className="mt-5 w-100 h-100">
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="email_part" id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button
              variant="success"
              disabled={loading}
              className="w-100 mt-4"
              type="submit"
            >
              Log In
            </Button>
          </Form>
          <div className="login_logo">
            <img src="./images/Garbin_logo.png" alt="logo" />
          </div>
          <div className="w-100 text-center mt-3">
            <Link className="link_style" to="/forgot-password">
              Forgot Password ?
            </Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 mb-5">
        <Link className="link_style" to="/register">
          Create an account
        </Link>
      </div>
    </div>
  );
}

export default Login;
