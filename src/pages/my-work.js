import React from "react"
import { graphql, Link } from "gatsby"
import SwiperComponent from "../components/SwiperComponent"
import ReactMarkdown from "react-markdown"
import SvgComponent from "../components/SvgComponent"
import { SlideUpContent } from "../animations/SideUpContent"
import { SlideUpTitle } from "../animations/SlideUpTitle"

const MyWork = ({ data }) => {
  const {
    title,
    personalProjectDescription,
    workProjectDescription,
    Experience,
  } = data.strapiWorkpage
  const { nodes } = data.allStrapiTechStack

  return (
    <div className="container">
      <SlideUpTitle delaySec={0.5} durationTime={0.5}>
      <h2 className="center-text">{title}</h2>
      </SlideUpTitle>
      <div className="list-container">
        <SlideUpContent delaySec={1} durationTime={1}>
          <ReactMarkdown>{Experience.data.Experience}</ReactMarkdown>
        </SlideUpContent>
      </div>
      <SlideUpTitle delaySec={0.5} durationTime={0.5}>
        <h2 className="center-text">Personal Projets</h2>
      </SlideUpTitle>

      <div className="container-description">
        <SlideUpContent delaySec={1} durationTime={1}>
          <ReactMarkdown>
            {personalProjectDescription.data.personalProjectDescription}
          </ReactMarkdown>
        </SlideUpContent>
      </div>
      <SwiperComponent Slides={data.allStrapiProject.nodes} />
      <SlideUpTitle delaySec={0.5} durationTime={0.5}>
        <h2 className="center-text">Work Projets</h2>
      </SlideUpTitle>
      <div className="container-description">
        <SlideUpContent delaySec={1} durationTime={1}>
          <ReactMarkdown>
            {workProjectDescription.data.workProjectDescription}
          </ReactMarkdown>
        </SlideUpContent>
      </div>
      <div className="skills-container">
        <SlideUpTitle delaySec={0.5}>
          <h2 className="center-text">Skill-SET</h2>
        </SlideUpTitle>
        <div className="svg-logo-container">
          {nodes.map(item => {
            const { logo } = item
            return (
              <div className="svg-logo">
                <SvgComponent logo={logo} />
                <p className="svg-logo-title">{logo}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="btn work">
        <Link to="/contact">Contact Me</Link>
      </div>
    </div>
  )
}

export default MyWork

export const query = graphql`
  query MyQuery {
    allStrapiTechStack {
      nodes {
        logo
      }
    }
    strapiWorkpage {
      title
      Experience {
        data {
          Experience
        }
      }
      personalProjectDescription {
        data {
          personalProjectDescription
        }
      }
      workProjectDescription {
        data {
          workProjectDescription
        }
      }
    }
    allStrapiProject {
      nodes {
        title
        link
        image {
          url
        }
        description {
          data {
            description
          }
        }
        tech_stacks {
          logo
        }
      }
    }
  }
`
