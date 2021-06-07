import React from "react"
import styled from "styled-components"
import { GatsbyImage } from 'gatsby-plugin-image'
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc nisi magna, euismod sed dictum in, bibendum ut neque.
              Nulla facilisi. Curabitur et pharetra nisl.
              Maecenas ac ipsum quis lectus tempus malesuada viverra vel nulla.</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc nisi magna, euismod sed dictum in, bibendum ut neque.
              Nulla facilisi. Curabitur et pharetra nisl.
              Maecenas ac ipsum quis lectus tempus malesuada viverra vel nulla.</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc nisi magna, euismod sed dictum in, bibendum ut neque.
              Nulla facilisi. Curabitur et pharetra nisl.
              Maecenas ac ipsum quis lectus tempus malesuada viverra vel nulla.</p>
          </TydtDesc>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image,index) => {
            return <TestimonialImage key={index} alt={index} image={image.node.childImageSharp.gatsbyImageData}/>
          })}
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

const TestimonialImage = styled(GatsbyImage)`
  border-radius: 10px;  
  height: 100%;
  transition: 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`
