import React from 'react'
import styled from 'styled-components'

import Bug from '../images/bug.png'
import Github from '../images/github.png'
import Logo from '../images/logo.png'
import Vector from '../images/vector.png'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin-left: 15px;
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
  font-family: Roboto;
  text-align: center;
  font-size: 12px;
  color: #ffffff;
  margin-top: 12px;
  margin-left: 4px;

  @media (max-width: 1050px) {
    margin-top: 10px;
  }
`

const StyledLink = styled.a`
  color: #8773e3;
  margin-left: 2px;
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

export interface IProps {
  hireLink: string
  bugLink: string
  githubLink: string
}

const Header = (props: IProps) => {
  return (
    <HeaderWrapper data-testid="header">
      <LeftBox>
        <LogoWrapper>
          <img src={Logo} alt="Astrocoders logo" data-testid="logo" />
        </LogoWrapper>

        <LeftTextWrapper>
          <p> / Open Source </p>
        </LeftTextWrapper>
      </LeftBox>

      <CenterBox data-testid="center-box">
        <StyledVector src={Vector} alt="Vector" />

        <MiddleTextWrapper>
          <p>
            Need development consulting on finantial segment?
            <StyledLink data-testid="hire-link" href={props.hireLink}>
              Hire us
            </StyledLink>
          </p>
        </MiddleTextWrapper>
      </CenterBox>

      <RightBox>
        <RightIconsWrapper>
          <a href={props.bugLink} data-testid="bug-link">
            <StyledIcon src={Bug} alt="Bug icon" />
          </a>
          <a href={props.githubLink} data-testid="github-link">
            <StyledIcon src={Github} alt="GitHub icon" />
          </a>
        </RightIconsWrapper>
      </RightBox>
    </HeaderWrapper>
  )
}

export default Header
