import React from "react"
import { Link } from "gatsby"
import Icons from "../assets/icons/icons.svg"

const Footer = () => {
  const footerLinks = [
    { icon: "mail", link: "mailto:souramrahul@gmail.com.com" },
    {
      icon: "linkedin",
      link: "https://www.linkedin.com/in/rahul-souram-511719156/",
    },
    { icon: "githubf", link: "https://github.com/rahul-souram" },
  ]
  return (
    <div className="footer-container">
      <div className="footer-logo-container">
        <Link to="/" className="footer-logo">
          Rahul Souram
        </Link>
        <div className="footer-links-container">
          {footerLinks.map(item => {
            const { icon, link } = item
            return (
              <a href={link} target="_blank" rel="noreferrer" key={icon}>
                {" "}
                <svg className="icon-logo">
                  <use xlinkHref={`${Icons}#icon-${icon}`} />
                </svg>
              </a>
            )
          })}
        </div>
      </div>
      <div className="footer-copy">Copyright &copy; Rahul Souram</div>
    </div>
  )
}

export default Footer
