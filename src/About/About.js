import React from "react";
import "./about.css";
import Card from "../Card/Card";
import Dogs from "./Dogs";


// Install Swiper modules
import CountUp from "react-countup";
import Footer from "./footer";
const About = () => {
  return (
    <>
        <Card/>
        <section className="About-wrapper">
        <div className="paddings innerWidth flexCenter About-container">
          <div className=" flexColStart About-left">
            <div className="About-title">
              <div className="circle" />
              <div className="f-circle" />
              <div className="s-circle" />

              <h1 style={{color:"#CF0A0A"}}>
                Find your <br /> paw-perfect
                <br />
                friend
              </h1>
            </div>
            <div className="count">
              <h1 style={{color:"#CF0A0A",marginTop:"-20px"}}>#AdoptLove campaign</h1>
            </div>
            <div className="flexColStart About-desc">
              <span>Gift a home to the cutest paws of your choice.</span>
              <span>Bring home your tail-trail partner.</span>
            </div>
            {/* <div className="search-bar">
              <input type="text" placeholder="Hey,look for me here!" />
              <button className="bttn_style_1">Search</button>
            </div> */}
          </div>
          <div className=" flexCenter About-right">
            <div className="image-container">
              <img src="./pet.jpg" alt="cute doggo img"></img>
            </div>
          </div>
        </div>
        
      </section>
      
      <div className="stats">
          <div className="stat">
            <span>
              <CountUp start={1000} end={9000} duration={2.75} />
              <span>+</span>
            </span>
            <p class="text">pets adopted</p>
          </div>
          <div className="stat">
            <span>
              <CountUp start={1000} end={6000} duration={2.75} />
              <span>+</span>
            </span>
            <p class="text"> paw-tnerships</p>
          </div>

          <div className="stat">
            <span>
              <CountUp start={100} end={1000} duration={4} />
              <span>+</span>
            </span>
            <p class="text"> Lives Connected</p>
          </div>
        </div>
      
            <Dogs/>
          
        
      <Footer />
      
    </>
  );
};
export default About;
