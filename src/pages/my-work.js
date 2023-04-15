import React from "react"
import { graphql,Link } from "gatsby"
import SwiperComponent from "../components/SwiperComponent"
import ReactMarkdown from "react-markdown"
import SvgComponent from "../components/SvgComponent"

const MyWork = ({ data }) => {
  const { title, personalProjectDescription, workProjectDescription, Experience } =
    data.strapiWorkpage;
  const { nodes } = data.allStrapiTechStack
    
  return (
    <div className="container">
      <h2 className="center-text">{title}</h2>
      <div className="list-container">
        <ReactMarkdown>
          {Experience.data.Experience}
        </ReactMarkdown>
      </div>
      <h3 className="center-text">Personal Projets</h3>
      <div>
        <ReactMarkdown>
          {personalProjectDescription.data.personalProjectDescription}
        </ReactMarkdown>
      </div>
      <SwiperComponent Slides={data.allStrapiProject.nodes} />
      <h3 className="center-text">Work Projets</h3>
      <div>
        <ReactMarkdown>
          {workProjectDescription.data.workProjectDescription}
        </ReactMarkdown>
      </div>
      <div className="skills-container">
        <h3 className="center-text">Skill-SET</h3>
        <div  className="svg-logo-container">
          {nodes.map(item => {
            const { logo } = item
            return (
              <div className="svg-logo">
                <SvgComponent logo={logo} />
                <p  className="svg-logo-title">{logo}</p>
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
