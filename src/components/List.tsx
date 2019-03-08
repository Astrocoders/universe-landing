import { map } from 'ramda'
import React, { useState } from 'react'
import { Flipped, Flipper } from 'react-flip-toolkit'
import styled from 'styled-components'

import { IPackage } from '../utils/data'
import ListItem from './ListItem'

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const ListWrapper = styled.div<{ expanded: boolean }>`
  display: flex;
  margin-top: 38px;
  width: 70%;
  min-height: 460px;
  transition: max-height 0.5s ease-in-out;
  overflow: ${props => (props.expanded ? 'none' : 'hidden')};
  max-height: ${props => (props.expanded ? 'auto' : '460px')};
`

const StyledFlipper = styled(Flipper)`
  && {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  color: #5c5c5c;
`

const ExpandButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #8773e3;
  width: 70%;
  height: 40px;
  background-color: rgba(135, 115, 227, 0.2);
  margin-top: 20px;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
  }
`

interface IProps {
  items: IPackage[]
}

const List = (props: IProps) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Background>
      <ListWrapper data-testid="list" expanded={expanded}>
        <StyledFlipper flipKey={map(item => item.title, props.items).join('')}>
          {props.items.length === 0 ? (
            <TextWrapper> No results </TextWrapper>
          ) : (
            map(
              item => (
                <ListItem title={item.title} description={item.description} id={item.id} url={item.url} key={item.id} />
              ),
              props.items,
            )
          )}
        </StyledFlipper>
      </ListWrapper>
      <ExpandButton onClick={() => setExpanded(!expanded)}>
        <p> {expanded ? 'Hide' : 'Show all'} </p>
      </ExpandButton>
    </Background>
  )
}

export default List
