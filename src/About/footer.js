import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <footer className="footer-distributed">

            <div className="footer-left">
                <h3> <span className="pet">PET</span>HARMONY</h3>

                <p className="footer-links">
                    <NavLink to="/about">About</NavLink>
                    | 
                     <NavLink to="/pet-shop">Pet shop</NavLink>
                    | 
                     <NavLink to="/contact">Contact</NavLink>
                    
                </p>

                <p className="footer-company-name">Copyright © 2024 <strong> PETHARMONY</strong> All rights reserved</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>MARRAKECH</span>
                        GUELIZ 40000</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+212 52408963</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href={() => false} >contact@petharmony.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the organisation</span>PETHARMONY is a revolutionary online platform dedicated to connecting potential pets owners with adorable and loving pets in need of forever homes. 
                    <strong>PETHARMONY</strong> 
                </p>
                <div className="footer-icons">
                    <a href={() => false}><i className="fa fa-facebook"></i></a>
                    <a href={() => false}><i className="fa fa-instagram"></i></a>
                    <a href={() => false}><i className="fa fa-linkedin"></i></a>
                    <a href={() => false}><i className="fa fa-twitter"></i></a>
                    <a href={() => false}><i className="fa fa-youtube"></i></a>
                </div>
            </div>
            </footer>
            </>
    );
}
export default Footer;