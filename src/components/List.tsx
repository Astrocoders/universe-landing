import { map } from 'ramda'
import React from 'react'
import { Flipped, Flipper } from 'react-flip-toolkit'
import styled from 'styled-components'

import { IPackage } from '../pages/index'
import shuffle from '../utils/shuffleArray'
import ListItem from './ListItem'

const Background = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -42px;
  z-index: -1;
`

const ListWrapper = styled.div`
  margin-top: 80px;
  width: 70%;
  min-height: 460px;
`

const StyledFlipper = styled(Flipper)`
  && {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`

interface IProps {
  input: string
  items: IPackage[]
}

const List = (props: IProps) => {
  return (
    <Background>
      <ListWrapper data-testid="list">
        <StyledFlipper flipKey={map(item => item.title, props.items).join('')}>
          {map(
            item => (
              <ListItem title={item.title} description={item.description} id={item.id} key={item.id} />
            ),
            props.items,
          )}
        </StyledFlipper>
      </ListWrapper>
    </Background>
  )
}

export default List
