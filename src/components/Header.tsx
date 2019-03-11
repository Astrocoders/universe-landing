import React from 'react'
import styled from 'styled-components'

import Bug from '../images/bug.svg'
import Github from '../images/github.svg'
import Logo from '../images/logo.png'
import Vector from '../images/trending-up.svg'

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

const StyledLogo = styled.div`
  background-image: url(${Logo});
  background-size: cover;
  width: 169px;
  height: 40px;

  @media (max-width: 1020px) {
    margin-top: -10px;
  }
`

const LeftTextWrapper = styled.div`
  white-space: nowrap;
  margin-left: 5px;
  margin-top: 4px;
  color: #fff;

  @media (max-width: 1020px) {
    position: absolute;
    margin-top: 16px;
    margin-left: 72px;
  }
`

const StyledVector = styled.img`
  width: 40px;
  height: 24px;
`

const CenterBox = styled(Box)`
  justify-content: center;
  font-size: 16px;
  flex: 2;

  @media (max-width: 564px) {
    display: none;
  }
`

const MiddleTextWrapper = styled.div`
  text-align: center;
  color: #fff;
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

const IconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 63px;
  height: 63px;

  &:hover {
    background-color: #8773e3;
  }
`

const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
`

const MobileBar = styled(HeaderWrapper)`
  justify-content: center;
  align-items: center;
  font-size: 16px;

  @media (min-width: 564px) {
    display: none;
  }
`

export interface IProps {
  hireLink: string
  bugLink: string
  githubLink: string
}

const Header = (props: IProps) => {
  return (
    <>
      <HeaderWrapper data-testid="header">
        <LeftBox>
          <StyledLogo data-testid="logo" />
          <LeftTextWrapper> / Open Source </LeftTextWrapper>
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
          <IconWrapper href={props.bugLink} data-testid="bug-link">
            <StyledIcon src={Bug} />
          </IconWrapper>
          <IconWrapper href={props.githubLink} data-testid="github-link">
            <StyledIcon src={Github} />
          </IconWrapper>
        </RightBox>
      </HeaderWrapper>
      <MobileBar>
        <StyledVector src={Vector} alt="Vector" />
        <MiddleTextWrapper>
          Need development consulting on financial segment?
          <StyledLink data-testid="hire-link" href={props.hireLink}>
            Hire us
          </StyledLink>
        </MiddleTextWrapper>
      </MobileBar>
    </>
  )
}

export default Header
