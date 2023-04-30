import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { graphql } from "gatsby"
import SvgComponent from "../components/SvgComponent"
import { SlideUpTitle } from "../animations/SlideUpTitle"
import { SlideUpContent } from "../animations/SideUpContent"
import { CardAnimation } from "../animations/CardAnimation"
import PageLayout from "../components/PageLayout"

const Contact = ({ data }) => {
  const form = useRef()
  const [success, setSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [validation, setValidation] = useState(false)

  const sendEmail = e => {
    e.preventDefault()
    if (form.current) {
      const formName = form.current[0].value
      const formEmail = form.current[1].value
      const formPhone = form.current[2].value
      const formMessage = form.current[3].value
      if (
        formName === "" ||
        formEmail === "" ||
        formPhone === "" ||
        formMessage === ""
      ) {
        setTimeout(() => {
          setValidation(false)
        }, 2500)
        setValidation(true)
      } else {
        emailjs
          .sendForm(
            "service_65arh7p",
            "template_rfv7fo6",
            form.current,
            "5tJYl6v8U-66UYFny"
          )
          .then(
            () => {
              setTimeout(() => {
                setSuccess(false)
              }, 2500)
              setSuccess(true)
            },
            error => {
              console.log(error.text)
              setTimeout(() => {
                setShowError(true)
              }, 2500)
              setShowError(false)
            }
          )
        setValidation(false)
      }
    }
  }
  const { title, description, phone, linkedIn, seo } = data.strapiContactpage

  return (
    <PageLayout seo={seo}>
      <SlideUpTitle delaySec={0.5} durationTime={0.5}>
        <h2 className="center-text">{title}</h2>
      </SlideUpTitle>
      <SlideUpTitle delaySec={0.5} durationTime={0.5}>
        <h2 className="center-text-desc">{description.data.description}</h2>
      </SlideUpTitle>
      <div className="form-container">
        {success && (
          <div className="form-message success">
            Your response is succefully submitted!
          </div>
        )}
        {showError && (
          <div className="form-message error">
            {" "}
            Something went wrong try again!
          </div>
        )}
        {validation && (
          <div className="form-message error">
            {" "}
            Please fill all the required blanks.
          </div>
        )}
        <CardAnimation delaySec={0.3} durationTime={0.5}>
          <form ref={form} onSubmit={sendEmail} className="form">
            <input
              type="text"
              name="form_name"
              placeholder="My Name is"
              className="form-input"
            />
            <input
              type="email"
              name="form_email"
              placeholder="My Email"
              className="form-input"
            />
            <input
              type="tel"
              name="form_phone"
              placeholder="My contact"
              className="form-input"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              className="form-input"
            />
            <button type="submit" className="btn contact">
              Submit
            </button>
          </form>
        </CardAnimation>
      </div>
      <SlideUpContent delaySec={0} >
        <h3 className="center-text-desc">You can also reach me through</h3>
        <div className="contact-details">
          <h3>
            Phone : <span>{phone} /</span>
          </h3>
          <a href={linkedIn} target="_blank" rel="noreferrer">
            <SvgComponent logo="linkedin" />
          </a>
        </div>
      </SlideUpContent>
      </PageLayout>

  )
}

export default Contact

export const query = graphql`
  query MyQuery {
    strapiContactpage {
      seo {
        metaTitle
        metaDescription
      }
      title
      phone
      linkedIn
      description {
        data {
          description
        }
      }
    }
  }
`
