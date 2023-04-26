import React from "react"
import { graphql, Link } from "gatsby"
import SwiperComponent from "../components/SwiperComponent"
import ReactMarkdown from "react-markdown"
import SvgComponent from "../components/SvgComponent"
import { SlideUpContent } from "../animations/SideUpContent"
import { SlideUpTitle } from "../animations/SlideUpTitle"
import PageLayout from "../components/PageLayout"

const MyWork = ({ data }) => {
  const {
    title,
    personalProjectDescription,
    workProjectDescription,
    Experience,
    seo,
  } = data.strapiWorkpage
  const { nodes } = data.allStrapiTechStack

  return (
    <PageLayout seo={seo}>
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
        <SlideUpContent delaySec={0.5} durationTime={0.5}>
          <ReactMarkdown className="container-description-inner">
            {personalProjectDescription.data.personalProjectDescription}
          </ReactMarkdown>
        </SlideUpContent>
      </div>
      <SwiperComponent Slides={data.allStrapiProject.nodes} />
      <SlideUpTitle delaySec={0.5} durationTime={0.5}>
        <h2 className="center-text">Work Projets</h2>
      </SlideUpTitle>
      <div className="container-description">
        <SlideUpContent delaySec={1} durationTime={0.5}>
          <ReactMarkdown className="container-description-inner">
            {workProjectDescription.data.workProjectDescription}
          </ReactMarkdown>
        </SlideUpContent>
        <SwiperComponent Slides={data.allStrapiWorkProject.nodes} />
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
    </PageLayout>
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
      seo {
        metaTitle
        metaDescription
      }
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
    allStrapiWorkProject {
      nodes {
        title
        link
        description {
          data {
            description
          }
        }
        image {
          url
        }
        tech_stacks {
          logo
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
