import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import video from "../assest/video.mp4"
const Card = () => {
  return (
    <>
    <section class="home-section" id="home">

        <video src={video} type="video/mp4" className="back-video" autoPlay loop muted playsInline  />
  
      <div className="content">
        <h1 className="card-title">PETHARMONY</h1>
        <p className="pa">
        is a comprehensive online platform designed to facilitate pet adoption, connecting pets in need of homes with caring individuals or families. 
        </p>
        <div>
        <Link to="/pet-shop" target="_blank" className="bttn_style_1" style={{margin: "20px ", display: "flex",justifyContent: "center",alignItems: "center"}}>
        Adopt Now
					</Link>
        </div>
      </div>
      </section>
    </>
  );
};

export default Card;
