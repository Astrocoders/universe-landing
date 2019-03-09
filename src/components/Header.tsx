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
  align-items: center;
`

const LeftBox = styled(Box)`
  justify-content: flex-start;
  margin-left: 15px;
`

const LeftTextWrapper = styled.div`
  margin-top: -4px;
  color: #fff;

  @media (max-width: 1020px) {
    position: absolute;
    margin-top: 16px;
    margin-left: 72px;
  }
`

const StyledVector = styled.img`
  width: 20px;
  height: 12px;
`

const CenterBox = styled(Box)`
  font-size: 16px;
  flex: 2;

  @media (max-width: 870px) {
    display: none;
  }
`

const MiddleTextWrapper = styled.div`
  text-align: center;
  color: #ffffff;
  margin-left: 4px;
`

const StyledLink = styled.a`
  white-space: nowrap;
  color: #8773e3;
  margin-left: 10px;
  text-decoration: none;
`

const RightBox = styled(Box)`
  justify-content: flex-end;
`

const StyledIcon = styled.div`
  background-image: url(${(props: { src: any }) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  width: 63px;
  height: 63px;

  &:hover {
    background-color: #8773e3;
  }
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
        <img src={Logo} alt="Astrocoders logo" data-testid="logo" />

        <LeftTextWrapper>/ Open Source</LeftTextWrapper>
      </LeftBox>

      <CenterBox data-testid="center-box">
        <StyledVector src={Vector} alt="Vector" />

        <MiddleTextWrapper>
          Need development consulting on financial segment?
          <StyledLink data-testid="hire-link" href={props.hireLink}>
            Hire us
          </StyledLink>
        </MiddleTextWrapper>
      </CenterBox>

      <RightBox>
        <a href={props.bugLink} data-testid="bug-link">
          <StyledIcon src={Bug} />
        </a>
        <a href={props.githubLink} data-testid="github-link">
          <StyledIcon src={Github} />
        </a>
      </RightBox>
    </HeaderWrapper>
  )
}

export default Header
