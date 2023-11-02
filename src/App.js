import React from "react";
import "./App.css";
import myImage from "./assets/Logo.svg";
import facebookIcon from "./assets/FB.svg";
import twitterIcon from "./assets/IG.svg";
import linkedinIcon from "./assets/email.svg";

function App() {
  return (
    <div className="app-background">
      <img src={myImage} alt="My Logo" className="app-logo" />

      <div className="social-links">
        <a href="https://www.facebook.com">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.twitter.com">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
      <div className="centered-svg"></div>
      <div className="rights">
        Copyright © 2023 All About Adventure. All Rights Reserved.
      </div>
    </div>
  );
}

export default App;
