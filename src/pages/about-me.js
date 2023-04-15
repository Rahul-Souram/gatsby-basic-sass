import React from "react"
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"

const AboutMe = ({ data }) => {
  const { title, description, timeline } = data.strapiAboutpage
  return (
    <div className="container">
      <h2 className="center-text">{title}</h2>
      <div className="list-container">
        <ReactMarkdown>{description.data.description}</ReactMarkdown>
      </div>
      <div className="timeline-container">
        <h2 className="center-text">My Timeline</h2>
        <div className="timeline-card-container">
          {timeline.map(item => {
            const { description, timeperiod } = item
            return (
              <div className="timeline-card">
                <h3 className="timeline-card-title">{timeperiod}</h3>
                <div className="timeline-card-summary">
                  <ReactMarkdown>{description.data.description}</ReactMarkdown>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="btn work">
        <Link to="/my-work">my work</Link>
      </div>
    </div>
  )
}

export default AboutMe

export const query = graphql`
  query MyQuery {
    strapiAboutpage {
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
