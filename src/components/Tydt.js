import React from "react"
import styled from "styled-components"
import { StaticImage } from 'gatsby-plugin-image'
import { BsFunnelFill, BsChatSquareDotsFill } from "react-icons/all"
import { graphql, useStaticQuery } from "gatsby"


const Tydt = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile (filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"},
        name: {in: ["tydtapp1","tydtapp2"]}}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `)

  return (
    <TydtContainer>
      <Description>
        Taiyuan metro APP
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <TydtDesc data-sal="slide-up" data-sal-easing="ease">
            <h3>Description</h3>
            <p>I am the lead developer working on this project responsible for all main functions with a contractor working on smaller features. This metro app is a vue app wrapped with uniapp(to make it mobile, similar to react native). It is used combined with the web portion to form the whole taiyuan metro project.
            </p>
          </TydtDesc>
          <TydtDesc data-sal="slide-up" data-sal-easing="ease">
            <BsChatSquareDotsFill
              css={`
                color: #bdd5de;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Chat & Comments</h3>
            <p>Users are able to dispatch maintenance ticket to different departments or progress through maintenance step by step using the workflow engine in the backend.
              They can make comments on the progress and upload images. They can also chat with all related parties about the situation.
            </p>
          </TydtDesc>
          <TydtDesc data-sal="slide-up" data-sal-easing="ease">
            <BsFunnelFill
              css={`
                color: #bdd5de;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Filtering & Tags</h3>
            <p>Users can customize their own filtering criteria in the webapp and that would reflect on the mobile app as well.
              They can also add tags to issues for filtering as well.
            </p>
          </TydtDesc>
        </ColumnOne>
        <ColumnTwo>
          {/*{data.allFile.edges.map((image,index) => {*/}
          {/*  return <TestimonialImage key={index} alt="" image={image.node.childImageSharp.gatsbyImageData} placeholder="blurred"/>*/}
          {/*})}*/}
          <StaticImageWrapper>
            <StaticImage alt="" placeholder="blurred" src="../assets/images/tydtapp1.jpg" style={{height: '100%'}}/>
          </StaticImageWrapper>
          <StaticImageWrapper>
            <StaticImage alt="" placeholder="blurred" src="../assets/images/tydtapp2.jpg" style={{height: '100%'}}/>
          </StaticImageWrapper>
        </ColumnTwo>
      </ContentWrapper>
    </TydtContainer>
  )
}

export default Tydt

const TydtContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) /2);
  height: 100%;
`

const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const TydtDesc = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;
  
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }
  
  p {
    color: #3b3b3b;
  }
  
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;
  
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const StaticImageWrapper = styled.div`
  border-radius: 10px;
  height: 100%;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`
