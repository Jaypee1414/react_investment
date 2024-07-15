import React from 'react'
import logo from '../assets/investment-calculator-logo.png'
import styled from 'styled-components'

const HeaderBar = styled.header`
  text-align: center;
  margin: 3rem auto;

  & h1 {
  font-size: 1.5rem;
  }

  & img{
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  background-color: transparent;
  }
`

function Header() {
  return (
    <div>
        <HeaderBar>
            <img src={logo} alt="" />
            <h1>Investment Calculator</h1>
        </HeaderBar>
    </div>
  )
}

    export default Header
