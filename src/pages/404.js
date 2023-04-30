import React from "react"
import { Link } from "gatsby"
import PageLayout from "../components/PageLayout"

const PageNotFound = () => {
  const seo = {
    metaTitle : "404 | Rahul's portfolio",
    metaDescription : "Page Not Found"
  }
  
  return <PageLayout seo={seo}>
    <div className="container">
    <h1 className="center-text"> OOps ! it's a Dead end!</h1>
    <div className="btn work">
        <Link to="/">Back to home</Link>
      </div>
    </div>
    </PageLayout>
}

export default PageNotFound
