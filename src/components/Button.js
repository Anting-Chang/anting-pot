import styled from 'styled-components'
import {Link} from 'gatsby'

export const Button = styled(Link)`
  background: ${({primary}) => (primary ? '#78CADB' : '#2E8BC0')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '16px 40px' : '10px 32px')};
  color: #fff;
  font-size: ${({big}) => (big ? '20px' : '16px')};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s !important;
  border-radius: ${({ round }) => (round ? '50px' : 'none')};
  
  &:hover {
    background: ${({primary}) => (primary ? '#2E8BC0' : '#78CADB')};
    transform: translateY(-1px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`

export const ExtButton = styled.a`
  background: ${({primary}) => (primary ? '#78CADB' : '#2E8BC0')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '16px 40px' : '10px 32px')};
  color: #fff;
  font-size: ${({big}) => (big ? '20px' : '16px')};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s !important;
  border-radius: ${({ round }) => (round ? '50px' : 'none')};
  
  &:hover {
    background: ${({primary}) => (primary ? '#2E8BC0' : '#78CADB')};
    transform: translateY(-1px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`
