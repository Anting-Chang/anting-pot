import styled from 'styled-components'
import {Link} from 'gatsby'

export const LinedButton = styled(Link)`
  font-weight: 100;
  background: transparent;
  border: none;
  margin: 30px auto 0;
  display: block;
  font-size: 20px;
  outline: none;
  text-decoration: none;
  color: #fff;

  position: relative;
  transition: 0.3s;
  padding: 25px; // the trick

  &:before {
    content: '';
    border-bottom: 3px solid #bdd5de;
    padding: 0 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 0;
    transition: 0.3s;
    font-weight: 100;
  }


  &:hover:before {
    width: 100%;
    padding: 0; // the other part of the trick
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    //background: rgba(154, 205, 50,0.6);
    background: rgba(0, 0, 0, 0.2);
    color: white;
    transition: none;
  }

`
