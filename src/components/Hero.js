import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Video from '../assets/videos/mainbg.mp4'
import Typist from "react-typist"
import 'react-typist/dist/Typist.css'
import { LinedButton } from "./LinedButton"

import * as styles from './Hero.module.css'

const Hero = () => {
  const [btnStatus, setBtnStatus] = useState('Hide')
  const [offsetY, setOffsetY] = useState(0)

  const setBtn = () => {
    setTimeout(() => {
      setBtnStatus('Show')
    }, 1000)
  }

  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }


  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <HeroContainer id="about">
      <HeroBg>
        <VideoBg style={{transform: `translateY(${offsetY * 0.8}px)`}} src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems style={{transform: `translateY(${offsetY * 0.1}px)`}}>
          <HeroTitle>
            <Typist cursor={{ blink: true,hideWhenDoneDelay: 0, hideWhenDone: true}} onTypingDone={setBtn}>
              <HeroP2>I am a Vuejs</HeroP2>
              <Typist.Backspace count={5} delay={200} />
              <HeroP2>Angular</HeroP2>
              <Typist.Backspace count={7} delay={200} />
              <HeroP2>React</HeroP2>
              <Typist.Backspace count={5} delay={200} />
              <HeroP3>Front-End Developer</HeroP3>

              {/*<HeroP1>{"const"}</HeroP1>*/}
              {/*<Typist.Delay ms={500} />*/}
              {/*<HeroP2>{" Anting Chang "}</HeroP2>*/}
              {/*<HeroP1>{"= {"}</HeroP1>*/}
            </Typist>
            {/*<Typist startDelay={3500} cursor={{ show: false}} onTypingDone={setBtn}>*/}
              {/*<HeroBracket css={`margin: 20px 0px`}>*/}
              {/*  <ObjectTitle>type</ObjectTitle>*/}
              {/*  <ObjectComma>:</ObjectComma>*/}
              {/*  <ObjectContent> 'vuejs </ObjectContent>*/}
              {/*  <Typist.Backspace count={6} delay={200} />*/}
              {/*  <ObjectContent>angular</ObjectContent>*/}
              {/*  <Typist.Backspace count={7} delay={200} />*/}
              {/*  <ObjectContent>react</ObjectContent>*/}
              {/*  <Typist.Backspace count={5} delay={200} />*/}
              {/*  <ObjectContent>front-end developer'</ObjectContent>*/}
              {/*  <ObjectEnd>,</ObjectEnd>*/}
              {/*</HeroBracket>*/}
            {/*  <HeroBracket css={`margin: 20px 0px`}><ObjectTitle>location</ObjectTitle><ObjectComma>:</ObjectComma><ObjectContent> 'montreal'</ObjectContent></HeroBracket>*/}
            {/*  <HeroP1>}</HeroP1>*/}
            {/*</Typist>*/}
          </HeroTitle>
          <HeroDes className={styles[`Des${btnStatus}`]}>
            Professional experience with all three frameworks. Mainly Vuejs & Angular
          </HeroDes>
          {/*<Button css={`visibility: ${btnStatus}`} primary="true" round="true" big="true" to="/trips">View Projects</Button>*/}
          <div className={styles[`BtnWrapper${btnStatus}`]}>
            <LinedButton to={"/#projectDiv"}>View Projects</LinedButton>
          </div>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  //margin-top: -80px;
  color: #fff;
`
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  :before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    //background: #015A7A;
    //mix-blend-mode: overlay;
  }
`
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`
const HeroTitle = styled.div`
  font-size: clamp(1rem, 4vw, 3rem);
  font-weight: 400;
  color: rgb(216, 84, 52);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`
const HeroDes = styled.p`
  font-size: clamp(0.3rem, 2vw, 1rem);
  margin-bottom: 2rem;
`

const HeroP2 = styled.span`
  font-size: clamp(2rem, 5vw, 4rem);
  color: #fff;
  letter-spacing: 2px;
  //font-family: 'Roboto', sans-serif;
`

const HeroP3 = styled.span`
  font-size: clamp(3rem, 5vw, 5rem);
  color: #fff;
  letter-spacing: 2px;
  font-style: italic;
  font-weight: 100;
`

