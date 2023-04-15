import React from "react"
import HomeBanner from "../components/HomeBanner"
import "../style/global.scss"
import { graphql } from "gatsby"

export default function Home({data}) {
  return (
    <div className="main">
      <HomeBanner data={data} />
    </div>
  )
}
export const query = graphql`
  query MyQuery {
    strapiHomepage {
      tagline
      Introduction {
        data {
          Introduction
        }
      }
    }
  }
`
