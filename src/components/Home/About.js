import React from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />
      <div className="about_container">
        <div className="about_title">About Us</div>
        <div className="team">
          <div className="name">Yash Patel (Founder & Manager)</div>
          <div className="name">
            Shivam Bharti (Web Developer & IOT engineer)
          </div>
          <div className="name">Jay Desai (Designer)</div>
          <div className="description">
            <em>
              We are a team of 3 friends currently studying in Parul University
              (PPI). Our main goal is to build projects that would help India
              with its core problems.{" "}
            </em>
          </div>
        </div>
        <div className="intro">
          <p className="topic_title">Garbage problems faced by India</p>
          <ul>
            <li className="intro_content1">
              As we neither have any strict law regarding garbage management nor
              any advance technology which would motivate people to use our
              garbage management system.
            </li>
            <li className="intro_content2">
              We are here with the magnificent idea of a smart automatic dustbin
              - GARBIN, which collects the garbage from people and give them
              money in return to that garbage weight (per KG).
            </li>
          </ul>
        </div>
        <div className="problem">
          <div className="topic_title">Problems India is facing today</div>
          <ul>
            <li className="problem_content1">
              In a developing nation like India, day by day, the population is
              increasing drastically and with the increase in population the
              waste and garbage is also increasing on streets and roads.
            </li>
            <li className="problem_content2">
              Also we dont have any permanent solution for poverty.
            </li>
            <img
              className="garbage_img"
              src="./images/garbage_img.jpg"
              alt="garbage"
            />
          </ul>
        </div>
        <div className="solution">
          <div className="topic_title">Solutions for these problems</div>
          <ul>
            <li className="solution_content1">
              <strong>Passive income</strong>: The customer can get a secondary
              income for there family and it depends on how much customer will
              threw their waste in GARBIN.
            </li>
            <li className="solution_content2">
              <strong>Poverty problem</strong>: Poverty is one of the massive
              problems India is facing today. So, our project will inspire poor
              people or beggars to earn some money.
            </li>
            <li className="solution_content3">
              <strong>Clean India will make Green India</strong>: In this
              project we want to focus on keeping the environment clean.
            </li>
            <img
              className="seg_dustbins"
              src="./images/Dustbins_segregated.webp"
              alt="4dustbins"
            />
          </ul>
        </div>
        <div className="technology">
          <div className="topic_title">Technologies we have used</div>
          <ul>
            <li>IOT system and Cloud</li>
            <li>GPS system</li>
            <li>Automatic troubleshoot</li>
            <li>GSM(Global System for Mobile communication)</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
