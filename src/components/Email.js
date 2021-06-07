import React from "react"
import styled from "styled-components"
import EmailBg from '../assets/images/email.jpg'
import { Button } from "./Button"
import { SiLinkedin } from "react-icons/all"
import { SiGithub } from "react-icons/all"
// import sal from 'gatsby-plugin-scroll-reveal'

const Email = () => {
  return (
    <EmailContainer id="contact">
      <EmailContent
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <h1>Connect With Me</h1>
        <p>antingchang@yahoo.ca</p>
        <IconWrapper>
          <a href="https://www.linkedin.com/in/chang-anting-87a619a5/" target="_blank" rel="noopener noreferrer">
            <SiLinkedin css={`font-size: 2rem;margin-right: 2rem; text-decoration: none; color: #fff`}/>
          </a>
          <a href="https://github.com/Anting-Chang" target="_blank" rel="noopener noreferrer">
            <SiGithub css={`font-size: 2rem;margin-right: 2rem; text-decoration: none; color: #fff`}/>
          </a>
        </IconWrapper>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  background: linear-gradient(
          180deg, 
          rgba(0,0,0,0.5) 0%, 
          rgba(0,0,0,0.5) 35%, 
          rgba(0,0,0,0.1) 100%
  ),
  url(${EmailBg}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
  }
  
  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
    font-weight: 100;
  }
  
  form {
    z-index: 10;
  }
`
const IconWrapper = styled.div`
  
`
