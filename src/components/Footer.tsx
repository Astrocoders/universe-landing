import React from 'react'
import styled from 'styled-components'

import Logo from '../images/astro-logo-micro.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 63px;
`

const LogoWrapper = styled.div`
  width: 29px;
  height: 29px;
  background-image: url(${Logo});
  background-size: cover;
`

const TextWrapper = styled.div`
  font-family: Roboto;
  font-size: 12px;
  color: #8773e3;
  margin-top: 8px;
`

const Footer = () => {
  return (
    <Wrapper data-testid="footer">
      <LogoWrapper data-testid="logo" />
      <TextWrapper> we are hiring! </TextWrapper>
    </Wrapper>
  )
}

export default Footer
