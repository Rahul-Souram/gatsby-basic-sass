import React from "react"
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import { SlideUpTitle } from "../animations/SlideUpTitle"
import { SlideUpContent } from "../animations/SideUpContent"
import { CardAnimation } from "../animations/CardAnimation"
import PageLayout from "../components/PageLayout"

const AboutMe = ({ data }) => {
  const { title, description, timeline, seo } = data.strapiAboutpage
  return (
    <PageLayout seo={seo}>
      <SlideUpTitle delaySec={0.5} durationTime={0.5}>
        <h2 className="center-text">{title}</h2>
      </SlideUpTitle>
      <div className="list-container">
        <SlideUpContent delaySec={0.5} durationTime={1}>
          <ReactMarkdown>{description.data.description}</ReactMarkdown>
        </SlideUpContent>
      </div>
      <div className="timeline-container">
        <SlideUpTitle delaySec={0.5} durationTime={0.5}>
          <h2 className="center-text">My Timeline</h2>
        </SlideUpTitle>
        <div className="timeline-card-container">
          <CardAnimation delaySec={0.5} durationTime={0.7}>
            {timeline.map(item => {
              const { description, timeperiod } = item
              return (
                <div className="timeline-card">
                  <h3 className="timeline-card-title">{timeperiod}</h3>
                  <div className="timeline-card-summary">
                    <ReactMarkdown>
                      {description.data.description}
                    </ReactMarkdown>
                  </div>
                </div>
              )
            })}
          </CardAnimation>
        </div>
      </div>
      <div className="btn work">
        <Link to="/my-work">my work</Link>
      </div>
    </PageLayout>
  )
}

export default AboutMe

export const query = graphql`
  query MyQuery {
    strapiAboutpage {
      seo {
        metaTitle
        metaDescription
      }
      title
      description {
        data {
          description
        }
      }
      timeline {
        timeperiod
        description {
          data {
            description
          }
        }
      }
    }
  }
`
