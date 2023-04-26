import React from "react"
import { Link } from "gatsby"
import Icons from "../assets/icons/icons.svg"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo-container">
      <Link to="/" className="footer-logo">
        Rahul Souram
      </Link>
      <div className="footer-links-container">
        <a href="mailto:webmaster@example.com" target="_blank" rel="noreferrer">
          {" "}
          <svg className="icon-logo">
            <use xlinkHref={`${Icons}#icon-mail`} />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-souram-511719156/"
          target="_blank"
          rel="noreferrer"
        >
          <svg className="icon-logo">
            <use xlinkHref={`${Icons}#icon-linkedin`} />
          </svg>
        </a>
      </div>
      </div>
      <div className="footer-copy">Copyright &copy; Rahul Souram</div>
    </div>
  )
}

export default Footer
