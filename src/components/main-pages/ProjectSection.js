import React from "react"
import styled from "styled-components"
import { GatsbyImage } from 'gatsby-plugin-image'
import { StaticImage } from "gatsby-plugin-image"
import { LinedButton } from "../LinedButton"

const ProjectSection = () => {

  return (
    <ProjectsContainer >
      <ProjectWrapper id="projectDiv">
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
          <ProjectTitle>
            Taiyuan Metro
          </ProjectTitle>
          <ProjectDesc>
            This is a Vue2 website for viewing real time data and maintenance on metro system.
            I have worked on this site in the later half of the year.
            Create pages and reusable components per UI design or modify Ant UI library to meet specific design requirements, connecting API and negotiating technical difficulties with backend.
            Difficulties includes: utilizing customizable authorization levels, keyword filtering, workflow engine and large amounts of form inputs.
            The architecture of the website is similar to that of the BIMRUN.
          </ProjectDesc>
        </ProjectDetail>
      </ProjectWrapper>
      <ProjectWrapper2>

        <ProjectDetail data-sal="slide-right" data-sal-easing="ease">
          <ProjectTitle>
            BIMRUN
          </ProjectTitle>
          <ProjectDesc>
            This is a Angular 5+ Saas website for BIM.
            I have worked on this site since I start working for my previous employer.
            From fixing smaller bugs in the beginning to add functionalities and optimizing performance.
            It uses Restful API, Sass, BIM engine based on three.js and customized UI.
          </ProjectDesc>
          <BtnWrapper>
            <LinedButton to={"/"}>View Site</LinedButton>
          </BtnWrapper>
        </ProjectDetail>
        <ImageWrapper>
          <StaticImageWrapper>
            <StaticImage
              placeholder="blurred"
              CONSTRAINED
              aspectRatio={18/9}
              src="../../assets/images/bimrun1.png" />
          </StaticImageWrapper>
        </ImageWrapper>
      </ProjectWrapper2>
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
          <ProjectTitle>
            BIMRUN APP
          </ProjectTitle>
          <ProjectDesc>
            This is a Vue2 website wrapped with uniapp (similar to react native).
            This app is used along side BIMRUN webapp. Features offline 3D model viewing, tracking construction schedule and filtering viewing ports.
            I have worked on this app for 6 month during which I create pages and fix bugs usually related to offline models and performance issues.
          </ProjectDesc>
        </ProjectDetail>
      </ProjectWrapper>
      <ProjectWrapper2>

        <ProjectDetail data-sal="slide-right" data-sal-easing="ease">
          <ProjectTitle>
            My Homepage
          </ProjectTitle>
          <ProjectDesc>
            This is a React site with Gatsby that I experiment with.
            It uses some animation library like smooth scroll, typist combine with different animations.
            With both grid and flex layout used, it has responsiveness in mind.
          </ProjectDesc>
        </ProjectDetail>
        <ImageWrapper>
          <StaticImageWrapper>
            <StaticImage
              placeholder="blurred"
              CONSTRAINED
              aspectRatio={18/9}
              src="../../assets/images/homepage.png" />
          </StaticImageWrapper>
        </ImageWrapper>
      </ProjectWrapper2>
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
const ProjectTitle = styled.h1`
  margin: 0 0 3rem 0;
`
const ProjectDesc = styled.p`
  line-height: 1.5rem;
`
const BtnWrapper = styled.div`
  display: flex;
  text-align: center;
`

