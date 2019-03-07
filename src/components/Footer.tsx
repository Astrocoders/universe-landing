import React from 'react'
import styled from 'styled-components'

import Logo from '../images/astro-logo-micro.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  height: 63px;
`

const TextWrapper = styled.div`
  font-weight: bold;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
`

const Footer = () => {
  return (
    <Wrapper data-testid="footer">
      <TextWrapper> WE ARE HIRING! </TextWrapper>
    </Wrapper>
  )
}

export default Footer
