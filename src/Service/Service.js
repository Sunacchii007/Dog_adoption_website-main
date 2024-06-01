import React, { useState } from "react";
import Ques from "./Questions";
import "./Service.css";
import Accordion from "./Accordian";
import Contact from "../Contact/Contact";
import Footer from "../About/footer";

const Service = (props) => {
  const [data] = useState(Ques); // Removed unused `setData`
  return (
    <>
      <h2 className="sec-h2">Let's get you answered.</h2>
      <section className="Service-sec">
        <div className="main-div">
          
          <div className="Accordion">
            {data.map((val) => {
              const { id } = val;
              return <Accordion key={id} {...val} />;
            })}
          </div>
        </div>
      </section>
      <Footer/>


    </>
  );
};

export default Service;
