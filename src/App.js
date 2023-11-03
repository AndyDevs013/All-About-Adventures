import React, { useState, useEffect } from "react";
import "./App.css";
import myImage from "./assets/Logo.svg";
import facebookIcon from "./assets/FB.svg";
import twitterIcon from "./assets/IG.svg";
import linkedinIcon from "./assets/email.svg";
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`app-background ${isMobile ? "mobile" : ""}`}>
      {isMobile ? (
        <>
          <div className="mobile-logo"></div>
          <div className={`coming-soon-text mobile`}>COMING SOON</div>
          <div className={`additional-text mobile custom-font`}>
            The Ultimate Adventure awaits
          </div>
          <div className="centered-svg mobile"></div>
          <div className="social-links mobile">
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
          <div className={`rights mobile`}>
            Copyright © 2023 All About Adventure. All Rights Reserved.
          </div>
        </>
      ) : (
        <>
          <img src={myImage} alt="My Logo" className={`app-logo`} />
          <div className={`coming-soon-text`}>COMING SOON</div>
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
          <div className={`rights`}>
            Copyright © 2023 All About Adventure. All Rights Reserved.
          </div>
        </>
      )}
    </div>
  );
}

export default App;
