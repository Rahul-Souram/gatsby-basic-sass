import React from "react"
import { Link } from "gatsby"
import profileImage from "../assets/images/profile.jpg"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

const HomeBanner = ({ data }) => {
  const { tagline, Introduction } = data.strapiHomepage
  return (
    <div className="container">
      <div className="home-banner-container">
        <div className="home-banner-info">
          <h2 className="home-banner-info-title">
            <ReactMarkdown>{Introduction.data.Introduction}</ReactMarkdown>
          </h2>
          <div className="home-banner-description">{tagline}</div>
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
