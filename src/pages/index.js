import React from "react"
import HomeBanner from "../components/HomeBanner"
import "../style/global.scss"
import { graphql } from "gatsby"
import PageLayout from "../components/PageLayout"

export default function Home({ data }) {
  const {seo} = data.strapiHomepage ;
  return (
    <PageLayout seo={seo}>
      <HomeBanner data={data} />
    </PageLayout>
  )
}
export const query = graphql`
  query MyQuery {
    strapiHomepage {
      seo {
        metaTitle
        metaDescription
      }
      mainImage {
        url
      }
      tagline
      Introduction {
        data {
          Introduction
        }
      }
    }
  }
`
