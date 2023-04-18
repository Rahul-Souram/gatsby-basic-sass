import React from "react"
import { Link } from "gatsby"
import profileImage from "../assets/images/profile.jpg"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { LeftSide } from "../animations/LeftSide"
import { RightSide } from "../animations/RightSide"

const HomeBanner = ({ data }) => {
  const { tagline, Introduction } = data.strapiHomepage
  return (
    <div className="container">
      <div className="home-banner-container">
        <div className="home-banner-info">
          <h2 className="home-banner-info-title">
            <LeftSide delaySec={0.5} durationTime={0.5}>
              <ReactMarkdown>{Introduction.data.Introduction}</ReactMarkdown>
            </LeftSide>
          </h2>
          <LeftSide delaySec={0.5} durationTime={0.5}>
            <div className="home-banner-description">{tagline}</div>
          </LeftSide>
          <div className="btn">
            <Link to="/about-me">know more</Link>
          </div>
        </div>
        <div className="home-banner-image">
          <RightSide delaySec={1} durationTime={0.5}>
            <img src={profileImage} alt="profile" />
          </RightSide>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
