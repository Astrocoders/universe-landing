import React from 'react'
import styled from 'styled-components'

import HeroBackground from '../images/hero-background.jpg'

const HeroWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  left: 0;
  top: 63px;
  width: 100%;
  height: 259px;
  background-image: url(${HeroBackground});
  background-size: cover;
  background-position: 50% 50%;
`

const TitleWrapper = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 64px;
  color: #fff;
`

const SubtitleWrapper = styled(TitleWrapper)`
  font-size: 24px;
`

const Hero = () => {
  return (
    <HeroWrapper>
      <TitleWrapper> Universe </TitleWrapper>
      <SubtitleWrapper> Find ReasonML bulletproof bindings </SubtitleWrapper>
    </HeroWrapper>
  )
}

export default Hero
