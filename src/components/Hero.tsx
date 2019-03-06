import React from 'react'
import styled from 'styled-components'

import HeroBackground from '../images/hero-background.jpg'

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 259px;
  background-image: url(${HeroBackground});
  background-size: cover;
  background-position: 50% 50%;
`

const TitleWrapper = styled.div`
  font-weight: bold;
  font-size: 64px;
  color: #fff;
`

const SubtitleWrapper = styled(TitleWrapper)`
  font-size: 24px;
`

const Hero = () => {
  return (
    <HeroWrapper data-testid="hero">
      <TitleWrapper> Universe </TitleWrapper>
      <SubtitleWrapper> Find ReasonML bulletproof bindings </SubtitleWrapper>
    </HeroWrapper>
  )
}

export default Hero
