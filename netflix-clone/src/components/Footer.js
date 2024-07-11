import React from 'react'
import './footer.css';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";


function Footer() {
  return (
    <div className="footer-container">
      <div className="social-icons">
        <ul>
          <li>
            <FacebookIcon />{" "}
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <YouTubeIcon />
          </li>
        </ul>
      </div>
      <div className="footer-links">
        <div className="first-row">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="second-row">
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Legal Notices</li>
            <li>
              Do Not Sell or Share <br />
              My Personal information
            </li>
          </ul>
        </div>
        <div className="third-row">
          <ul>
            <li>Gift Cards</li>
            <li>Netflix Shop</li>
            <li>Cookie Preferences</li>
            <li>Ad Choices</li>
          </ul>
        </div>
        <div className="fourth-row">
          <ul>
            <li>Media Center</li>
            <li>Terms of Use</li>
            <li>Corporate information</li>
          </ul>
        </div>
      </div>
      <div>
        <p className='service'>Service Code</p>
        <p className="copyright">&copy; 1997-2024 Netflix, Inc. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer
