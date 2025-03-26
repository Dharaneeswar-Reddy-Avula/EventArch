import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import { FiDisc } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section about">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img src={logo} alt="Event Architects Logo" />
            <h2
              style={{ whiteSpace: "nowrap" }}
              className="text-pink-600 font-semibold text-[24px]"
            >
              Event <span className="text-white">Architects</span>
            </h2>
          </div>
          <p style={{ paddingLeft: "10px" }}>
            Senectus platea dolor laoreet, donec torquent leo risus. Rutrum
            accumsan dolor vulputate ullamcorper; mollis vulputate suspendisse.
          </p>
          <div className="social-icons flex ">
            <a href="#"  className="flex gap-[10px]  h-[40px] w-[40px] rounded-full bg-[#12122d] justify-center items-center">
            <FaFacebookF />

            </a>
            <a href="#"  className="flex gap-[10px]  h-[40px] w-[40px] rounded-full bg-[#12122d] justify-center items-center">
            <FaXTwitter />

            </a>
            <a href="#"  className="flex gap-[10px]  h-[40px] w-[40px] rounded-full bg-[#12122d] justify-center items-center">
             
            <FaLinkedin />
            </a>
            <a href="#" className="flex gap-[10px]  h-[40px] w-[40px] rounded-full bg-[#12122d] justify-center items-center">
             
            <FaInstagram />
            </a>
          </div>
        </div>
        <div
          className="footer-section quick-links"
          style={{ marginLeft: "30px" }}
        >
          <h3>QUICK LINKS</h3>
          <ul>
            <li>
              <a href="#"  className="flex gap-[10px] items-center">
                {" "}
                <FiDisc />
                About Us
              </a>
            </li>
            <li>
              <a href="#"  className="flex gap-[10px] items-center">
                {" "}
                <FiDisc />
                Services
              </a>
            </li>
            <li>
              <a href="#"  className="flex gap-[10px] items-center">
                {" "}
                <FiDisc />
                Projects
              </a>
            </li>
            <li>
              <a href="#"  className="flex gap-[10px] items-center">
                {" "}
                <FiDisc />
                Blog
              </a>
            </li>
            <li>
              <a href="#"  className="flex gap-[10px] items-center">
                {" "}
                <FiDisc />
                Our Team
              </a>
            </li>
            <li>
              <a href="#"  className="flex gap-[10px] items-center">
                {" "}
                <FiDisc />
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section services">
          <h3>OUR SERVICES</h3>
          <ul>
            <li>
              <a href="#"  className="flex gap-[10px] items-center">
                {" "}
                <FiDisc />
                AI-Powered Solutions
              </a>
            </li>
            <li>
              <a href="#"  className="flex gap-[10px] items-center">
                {" "}
                <FiDisc />
                Custom AI Technology
              </a>
            </li>
            <li>
              <a href="#"  className="flex gap-[10px] items-center">
                {" "}
                <FiDisc />
                Predictive Analytics
              </a>
            </li>
            <li>
              <a href="#"  className="flex gap-[10px] items-center">
                {" "}
                <FiDisc />
                Machine Learning AI
              </a>
            </li>
            <li>
              <a href="#"  className="flex gap-[10px] items-center">
                {" "}
                <FiDisc />
                Neural Nexus: AI
              </a>
            </li>
            <li>
              <a href="#"  className="flex gap-[10px] items-center">
                {" "}
                <FiDisc />
                Redefining AI Intelligence
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>GET IN TOUCH</h3>
          <p>
            <i className="fas fa-phone"></i> +1 234 567 89
          </p>
          <p>
            <i className="fas fa-envelope"></i> contact@your-domain.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> 633, Northwest, Apartment
            11, Latacunga, Ecuador
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 CreativeAI. All Rights Reserved</p>
        <div className="policy-links">
          <a href="#"  className="flex gap-[10px] items-center">
            {" "}
            <FiDisc />
            Policy & Privacy
          </a>
          <a href="#"  className="flex gap-[10px] items-center">
            {" "}
            <FiDisc />
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
