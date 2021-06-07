import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Tydt from "../components/Tydt"
import Stats from "../components/Stats"
import Email from "../components/Email"
import ProjectSection from "../components/main-pages/ProjectSection"
import '../components/styles/global.css'
import { useEffect, useRef } from "react"

const IndexPage = () => {
  const projectRef = useRef(null)

  useEffect(() => {
    console.log('index page loaded')
      document.body.style.overflow = "visible";
  }, [])

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <ProjectSection />
      <Tydt />
      {/*<Stats />*/}
      <Email />
  </Layout>)

}

export default IndexPage
