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
  font-size: 10px;
  color: #8773e3;
`

const Footer = () => {
  return (
    <Wrapper>
      <LogoWrapper data-testid="logo" />
      <TextWrapper>
        {' '}
        <p> we are hiring! </p>{' '}
      </TextWrapper>
    </Wrapper>
  )
}

export default Footer
