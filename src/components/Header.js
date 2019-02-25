import React from 'react'
import styled from 'styled-components'

import Bug from '../images/bug.png'
import Github from '../images/github.png'
import Logo from '../images/logo.png'
import Vector from '../images/vector.png'

const HeaderWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 0px;
  left: 0px;
  height: 63px;
  width: 100%;
  background-color: #000000;
`

const Box = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`

const LeftBox = styled(Box)`
  justify-content: flex-start;
  margin-left: 25px;
`

const LogoWrapper = styled.div`
  margin-top: 16px;

  @media (max-width: 515px) {
    margin-top: 10px;
  }
`

const LeftTextWrapper = styled.div`
  margin-top: 14px;
  margin-right: auto;
  font-family: Roboto;
  font-size: 12px;
  color: #ffffff;

  @media (max-width: 515px) {
    position: absolute;
    margin-top: 25px;
    margin-left: 72px;
  }
`

const StyledVector = styled.img`
  width: 20px;
  height: 12px;
  margin-top: 25px;
`

const CenterBox = styled(Box)`
  @media (max-width: 870px) {
    display: none;
  }
`

const MiddleTextWrapper = styled.div`
  display: flex;
  font-family: Roboto;
  font-size: 10px;
  color: #ffffff;
  margin-top: 15px;
  margin-left: 2px;
`

const StyledText = styled.p`
  color: #8773e3;
  margin-left: 2px;
`

const StyledLink = styled.a`
  text-decoration: none;
`

const RightBox = styled(Box)`
  justify-content: flex-end;
`

const RightIconsWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`

const StyledIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 25px;
`

const Header = props => {
  return (
    <HeaderWrapper>
      <LeftBox>
        <LogoWrapper>
          <img src={Logo} alt="Astrocoders logo" />
        </LogoWrapper>

        <LeftTextWrapper>
          <p> / Open Source </p>
        </LeftTextWrapper>
      </LeftBox>

      <CenterBox>
        <StyledVector src={Vector} alt="Vector" />

        <MiddleTextWrapper>
          <p> need development consulting on finantial segment? </p>
          <StyledLink href={props.hireLink}>
            <StyledText> Hire us </StyledText>{' '}
          </StyledLink>
        </MiddleTextWrapper>
      </CenterBox>

      <RightBox>
        <RightIconsWrapper>
          <a href={props.bugLink}>
            <StyledIcon src={Bug} alt="Bug icon" />{' '}
          </a>
          <a href={props.githubLink}>
            <StyledIcon src={Github} alt="GitHub icon" />{' '}
          </a>
        </RightIconsWrapper>
      </RightBox>
    </HeaderWrapper>
  )
}

export default Header
