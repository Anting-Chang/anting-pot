import React from "react"
import styled from "styled-components"
import { GatsbyImage } from 'gatsby-plugin-image'
import { StaticImage } from "gatsby-plugin-image"
import { LinedButton } from "../LinedButton"
import { ExtLinedButton } from "../shared/ExtLinedBtn"

import { FaGithub, FaExternalLinkAlt } from "react-icons/all"
import styles from './ProjectSection.module.css'

const ProjectSection = () => {
  const color = {
    vue: "#387D70",
    react: "#127B98",
    angular: "#B31416"
  }

  return (
    <ProjectsContainer >
      <ProjectWrapper id="projectDiv">
        <ImageWrapper>
          <StaticImageWrapper>
            <StaticImage
              placeholder="blurred"
              CONSTRAINED
              aspectRatio={18/9}
              src="../../assets/images/spotspotter.png" />
          </StaticImageWrapper>
        </ImageWrapper>
        <ProjectDetail data-sal="slide-left" data-sal-easing="ease">
          <ProjectTitleWrapper>
            <ProjectTitle>
              Spot Spotter
            </ProjectTitle>
            <ProjectTag css={`background-color: ${color.react}`}>
              <ProjectTagTitle>
                React
              </ProjectTagTitle>
            </ProjectTag>
          </ProjectTitleWrapper>
          <ProjectDesc>
            Made all by myself, it's the best parking finder app on the market that helps you find free parking in DT Montreal.
            It uses react, node, mongodb, dockerized and hosted by AWS EC2. Leaflet open map as map service. Also build with user authorization and authentication.
            As I couldn't find a free parking spot app, I made one myself, try it out!
          </ProjectDesc>
          <BtnWrapper>
            <a href="https://anting-chang.github.io/spot-spotter" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt style={{fontSize: '2rem', textDecoration: 'none', color: '#eee', marginLeft: '10px'}} />
            </a>
            {/*<ExtLinedButton href="https://anting-chang.github.io/spot-spotter" target="_blank" rel="noopener noreferrer">View Site</ExtLinedButton>*/}
            <a href="https://github.com/Anting-Chang/spot-spotter" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{fontSize: '2rem', textDecoration: 'none', color: '#eee', marginLeft: '30px'}} />
            </a>
          </BtnWrapper>
        </ProjectDetail>
      </ProjectWrapper>
      <ProjectWrapper>
        <ImageWrapper>
          <StaticImageWrapper>
            <StaticImage
              placeholder="blurred"
              CONSTRAINED
              aspectRatio={18/9}
              src="../../assets/images/weekjournal.png" />
          </StaticImageWrapper>
        </ImageWrapper>
        <ProjectDetail data-sal="slide-left" data-sal-easing="ease">
          <ProjectTitleWrapper>
            <ProjectTitle>
              Week Journal
            </ProjectTitle>
            <ProjectTag css={`background-color: ${color.react}`}>
              <ProjectTagTitle>
                React
              </ProjectTagTitle>
            </ProjectTag>
          </ProjectTitleWrapper>
          <ProjectDesc>
            It's my personal project that encourage myself to live my life at its fullness.
            It shows whole life in week in one page.
            Each week shown as a cube and while click on it a weekly journal can be added to record my week.
            Made with react, nodejs, mongodb. Uses bootstrap UI, jwt and password hashing. Completed with user authorization and authentication. Mobile responsive as well.
          </ProjectDesc>
          <BtnWrapper>
            <a href="https://anting-chang.github.io/weeko-meter" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt style={{fontSize: '2rem', textDecoration: 'none', color: '#eee', marginLeft: '10px'}} />
            </a>
            {/*<ExtLinedButton href="https://anting-chang.github.io/weeko-meter" target="_blank" rel="noopener noreferrer">View Site</ExtLinedButton>*/}
            <a href="https://github.com/Anting-Chang/weeko-meter" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{fontSize: '2rem', textDecoration: 'none', color: '#eee', marginLeft: '30px'}} />
            </a>
          </BtnWrapper>
        </ProjectDetail>
      </ProjectWrapper>
      <ProjectWrapper>
        <ImageWrapper>
          <StaticImageWrapper>
            <StaticImage
              placeholder="blurred"
              CONSTRAINED
              aspectRatio={18/9}
              src="../../assets/images/tydt1.png" />
          </StaticImageWrapper>
        </ImageWrapper>
        <ProjectDetail data-sal="slide-left" data-sal-easing="ease">
          <ProjectTitleWrapper>
            <ProjectTitle>
              Taiyuan Metro
            </ProjectTitle>
            <ProjectTag css={`background-color: ${color.vue}`}>
              <ProjectTagTitle>
                VUEJS
              </ProjectTagTitle>
            </ProjectTag>
          </ProjectTitleWrapper>
          <ProjectDesc>
            This is a Vue2 website for viewing real time data and maintenance on metro system.
            I have worked on this site in the later half of the year.
            Create pages and reusable components per UI design or modify Ant UI library to meet specific design requirements, connecting API and negotiating technical difficulties with backend.
            Difficulties includes: utilizing customizable authorization levels, keyword filtering, workflow engine and large amounts of form inputs.
            The architecture of the website is similar to that of the BIMRUN.
          </ProjectDesc>
        </ProjectDetail>
      </ProjectWrapper>
      <ProjectWrapper>
        <ImageWrapper>
          <StaticImageWrapper>
            <StaticImage
              placeholder="blurred"
              CONSTRAINED
              aspectRatio={18/9}
              src="../../assets/images/bimrun1.png" />
          </StaticImageWrapper>
        </ImageWrapper>
        <ProjectDetail data-sal="slide-left" data-sal-easing="ease">
          <ProjectTitleWrapper>
            <ProjectTitle>
              BIMRUN
            </ProjectTitle>
            <ProjectTag css={`background-color: ${color.angular}`}>
              <ProjectTagTitle>
                ANGULAR 5
              </ProjectTagTitle>
            </ProjectTag>
          </ProjectTitleWrapper>
          <ProjectDesc>
            This is a Angular 5+ Saas website for BIM.
            I have worked on this site since I start working for my previous employer.
            From fixing smaller bugs in the beginning to add functionalities and optimizing performance.
            It uses Restful API, Sass, BIM engine based on three.js and customized UI.
          </ProjectDesc>
          <BtnWrapper>
            <ExtLinedButton href="http://www.bimrun.com/" target="_blank" rel="noopener noreferrer">View Site</ExtLinedButton>
          </BtnWrapper>
        </ProjectDetail>
      </ProjectWrapper>
      <ProjectWrapper>
        <ImageWrapper>
          <StaticImageWrapper>
            <StaticImage
              placeholder="blurred"
              CONSTRAINED
              aspectRatio={18/9}
              src="../../assets/images/bimrunapp1.png" />
          </StaticImageWrapper>
        </ImageWrapper>
        <ProjectDetail data-sal="slide-left" data-sal-easing="ease">
          <ProjectTitleWrapper>
            <ProjectTitle>
              BIMRUN APP
            </ProjectTitle>
            <ProjectTag css={`background-color: ${color.vue}`}>
              <ProjectTagTitle>
                VUEJS
              </ProjectTagTitle>
            </ProjectTag>
          </ProjectTitleWrapper>
          <ProjectDesc>
            This is a Vue2 website wrapped with uniapp (similar to react native).
            This app is used along side BIMRUN webapp. Features offline 3D model viewing, tracking construction schedule and filtering viewing ports.
            I have worked on this app for 6 month during which I create pages and fix bugs usually related to offline models and performance issues.
          </ProjectDesc>
        </ProjectDetail>
      </ProjectWrapper>
      <ProjectWrapper>
        <ImageWrapper>
          <StaticImageWrapper>
            <StaticImage
              placeholder="blurred"
              CONSTRAINED
              aspectRatio={18/9}
              src="../../assets/images/homepage.png" />
          </StaticImageWrapper>
        </ImageWrapper>
        <ProjectDetail data-sal="slide-left" data-sal-easing="ease">
          <ProjectTitleWrapper>
            <ProjectTitle>
              My Home Page
            </ProjectTitle>
            <ProjectTag css={`background-color: ${color.react}`}>
              <ProjectTagTitle>
                REACT
              </ProjectTagTitle>
            </ProjectTag>
          </ProjectTitleWrapper>
          <ProjectDesc>
            This is a React site with Gatsby that I experiment with.
            It uses some animation library like smooth scroll, typist combine with different animations.
            With both grid and flex layout used, it has responsiveness in mind.
          </ProjectDesc>
          <BtnWrapper>
            <a href="https://github.com/Anting-Chang/anting-pot" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{fontSize: '2rem', textDecoration: 'none', color: '#eee', marginLeft: '10px'}} />
            </a>
          </BtnWrapper>
        </ProjectDetail>

      </ProjectWrapper>
    </ProjectsContainer>
  )
}

export default ProjectSection

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  background-color: #8FA1AC;
`

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 5rem;
  justify-items: center;
  padding: 0 2rem;
  margin-bottom: 5rem;
  
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const ProjectWrapper2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 5rem;
  justify-items: center;
  padding: 0 2rem;
  margin-bottom: 5rem;
  
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const ImageWrapper = styled.div`
  overflow: hidden;
  @media screen and (max-width: 868px) {
    width: 500px;
  }
  @media screen and (max-width: 600px) {
    width: auto;
  }
`

const StaticImageWrapper = styled.div`
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`

const ProjectDetail = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`
const ProjectTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 3rem 0;

  @media screen and (max-width: 868px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

const ProjectTitle = styled.div`
  font-weight: 100;
  font-size: 2rem;
`

const ProjectTag = styled.div`
  height: 2rem;
  margin-left: 2rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #666666;
  border-radius: 0.5rem;

  @media screen and (max-width: 868px) {
    margin-top: 1rem;
    margin-left: 0;
    padding: 0.5rem 0.8rem;
  }
`

const ProjectTagTitle = styled.div`
  color: #fff;
  font-size: 1rem;
  text-align: center;
`

const ProjectDesc = styled.p`
  line-height: 1.5rem;
`
const BtnWrapper = styled.div`
  display: flex;
  text-align: center;
  margin-top: 20px;
  align-items: flex-end;
`

