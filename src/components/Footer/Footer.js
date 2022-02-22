import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className="footer_container">
        <div className="wrapper">
          <div className="socials">
            <p className="connect">Connect :</p>
            <div className="fb">
              <a
                href="https://www.facebook.com/profile.php?id=100052664932615"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} className="fb_link" />
              </a>
            </div>
            <div className="tw">
              <a
                href="https://twitter.com/yashpatel3842"
                className="tw_link"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <div className="ig">
              <a
                href="https://www.instagram.com/shivam_rg4/"
                className="ig_link"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="tme">
              <a
                className="tme_link"
                href="https://t.me/yjpmovies"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
          </div>
          <div className="contact">
            <p className="contact_p">Contact: </p>
            <div className="email">yashpatel3842@gmail.com</div>
            <div className="helpline">Helpline no: 7043590457</div>
          </div>
          <div className="tandc">
            <span>Terms and Conditions</span>
          </div>
          <div className="pp">
            <span>Privacy Policy</span>
          </div>
          <div className="advertise">
            <span>Advertise With Us</span>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; Copyright {year}</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
