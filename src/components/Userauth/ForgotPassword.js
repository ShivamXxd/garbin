import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
// import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import "./Login.css";

function ForgotPassword() {
  const emailRef = useRef();
  // const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault(); // prevent refreshing
    try {
      setMessage("");
      setError("");
      setLoading(true);
      // await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions.");
    } catch {
      setError("Failed to reset Password!");
    }
    setLoading(false);
  }

  return (
    <div className="login_container">
      <Card className="mt-5 w-100 h-100">
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="email_part" id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button
              variant="success"
              disabled={loading}
              className="w-100 mt-4"
              type="submit"
            >
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-5">
            <Link className="link_style" to="/">
              Log In
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

export default ForgotPassword;
