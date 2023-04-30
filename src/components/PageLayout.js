import React from "react"
import { Helmet } from "react-helmet"
import "../style/global.scss"

const PageLayout = ({ children, seo }) => {

  return (
    <div className="container">
      <Helmet>
        <title>{seo?.metaTitle || "Rahul's Portfolio "}</title>
        <meta
          name="description"
          content={seo?.metaDescription || "I am Rahul Souram, a self-taught Front-End Developer this is my portfolio"}
        />
      </Helmet>
      {children}
    </div>
  )
}

export default PageLayout;
