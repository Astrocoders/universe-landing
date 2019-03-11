import React from 'react'
import styled from 'styled-components'

import Logo from '../images/astro-logo-micro.png'

const Wrapper = styled.div`
  position: sticky;
  bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TextWrapper = styled.a`
  font-weight: bold;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  text-decoration: none;
  transition: background-color 100ms linear;

  &:hover {
    background-color: #8773e3;
  }
`

export interface IProps {
  link: string
}

const Footer = (props: IProps) => {
  return (
    <Wrapper data-testid="footer">
      <TextWrapper href={props.link}> WE ARE HIRING! </TextWrapper>
    </Wrapper>
  )
}

export default Footer
