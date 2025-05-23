import React from "react";
import "./Footer.css";
import facebook_icon from "../../assets/facebook_icon.png";
import insta_icon from "../../assets/instagram_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import youtube_icon from "../../assets/youtube_icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icon">
        <img src={facebook_icon} alt="facebook icon" />
        <img src={insta_icon} alt="instgram icon" />
        <img src={twitter_icon} alt="twitter icon" />
        <img src={youtube_icon} alt="youtube icon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copy-right">1997-2024 Netflix, Inc</p>
    </footer>
  );
};

export default Footer;
