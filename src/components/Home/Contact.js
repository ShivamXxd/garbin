import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import "./Contact.css";

function contact() {
  return (
    <>
      <Navbar />
      <div className="contact_container">
        <div className="contact_title">We are here to help you!</div>
        <div className="contact_details">
          <div className="phno">
            Our contact numbers: +91 7043590457, +91 9023959826, +91 8849397345
          </div>
          <div className="email_ids">
            Our business emails: 200346616072@paruluniversity.ac.in,
            200346616064@paruluniversity.ac.in,
            200346616108@paruluniversity.ac.in
          </div>
        </div>
        <div className="form_container">
          <Card className="form_card">
            <Card.Body>
              <div className="ec_title">Mail us your Query!</div>
              <Form>
                <Form.Group id="fname">
                  <Form.Label className="mt-2">First Name</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
                <Form.Group id="lname">
                  <Form.Label className="mt-2">Last Name</Form.Label>
                  <Form.Control type="password" required />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label className="mt-2">Email Address</Form.Label>
                  <Form.Control type="password" required />
                </Form.Group>
                <Form.Group id="textArea">
                  <Form.Label className="mt-2">Tell us something</Form.Label>
                  <Form.Control
                    className="text_area"
                    as="textarea"
                    rows={3}
                    required
                  />
                </Form.Group>
                <Button variant="success" className="w-100 mt-4" type="submit">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
        <div className="mailto_part">
          <div>Send us a direct mail instead?</div>
          <a className="link_style" href="mailto:tecsoft007@gmail.com">
            Send Mail
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default contact;
