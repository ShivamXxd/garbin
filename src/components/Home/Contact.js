import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_0e7doc9",
      "template_ejrr9q7",
      e.target,
      "user_MDgRqpmjSumfyrZ39kcGx"
    );
    alert("Your message was delivered succesfully!");
    e.target.value = "";
  };

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
            200346616104@paruluniversity.ac.in
          </div>
        </div>
        <div className="form_container">
          <Card className="form_card">
            <Card.Body>
              <div className="ec_title">Mail us your Query!</div>
              <Form onSubmit={sendEmail}>
                <Form.Group>
                  <Form.Label className="mt-2">Subject</Form.Label>
                  <Form.Control type="text" name="subject" />
                </Form.Group>
                <Form.Group id="lname">
                  <Form.Label className="mt-2">Question</Form.Label>
                  <Form.Control type="text" name="question" />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label className="mt-2">Your Nickname?</Form.Label>
                  <Form.Control type="text" name="nickname" />
                </Form.Group>
                <Form.Group id="textArea">
                  <Form.Label className="mt-2">Tell us something</Form.Label>
                  <Form.Control
                    className="text_area"
                    as="textarea"
                    rows={3}
                    name="content"
                    required
                  />
                </Form.Group>
                <Button variant="success" className="w-100 mt-4" type="submit">
                  Send Message
                </Button>
                <Button variant="warning" className="w-100 mt-4" type="reset">
                  Reset Form
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

export default Contact;
