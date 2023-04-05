import React from "react"
import { Link } from "@reach/router"
import profileImage from "../assets/images/profile.jpg";

const HomeBanner = () => {
  return (
    <div className="container">
      <div className="home-banner-container">
        <div className="home-banner-info">
          <h1 className="home-banner-title">
            Hello <br />
            I'm Rahul Souram
          </h1>
          <h2 className="home-banner-tagline">Frontend Developer</h2>
          <div className="home-banner-description">
            I help you to launch and grow your business. i help you to bring
            your dreams into reality Digitally.
          </div>
          <div className="btn">
            <Link to="/about-me">know more</Link>
          </div>
        </div>
        <div className="home-banner-image">
          <img src={profileImage} alt="profile" />
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
