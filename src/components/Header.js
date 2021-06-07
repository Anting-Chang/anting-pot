import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { ExtButton } from "./Button"
import { LinedButton } from "./LinedButton"
import * as styles from "./Header.module.css"
import { useEffect, useState } from "react"

const Header = (props) => {
  const [navStatus, setNavstatus] = useState('staticNav')



  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setNavstatus('movedNav')
    }

    if (window.pageYOffset < 20) {
      setNavstatus('staticNav')
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <Nav className={styles[navStatus]}>
      <NavLink to={"/#about"}>
        <NavTitle>
          Anting's Home
        </NavTitle>
      </NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((data,index) => {
          return <NavLinkBtn to={data.link} key={index}>
            {data.title}
          </NavLinkBtn>
        })}
      </NavMenu>
      <NavBtn>
        <ExtButton primary='true' round='true' href="https://www.linkedin.com/in/chang-anting-87a619a5/" target="_blank" rel="noopener noreferrer">Get Resume</ExtButton>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  //background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100vw;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 100;
`

const NavLinkBtn = styled(LinedButton)`
  padding: 10px; // the trick
  text-decoration: none;
  color: #fff;
  margin: auto;

  &:before {
    border-bottom: 1px solid #B1D4E0;
    padding: 0 0px;
  }

  &:active {
    background: transparent;
  }
`

const NavTitle = styled.h1`
  color: white;
  font-size: clamp(1rem, 5vw, 2rem);
  font-family: 'sans-serif';
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`
