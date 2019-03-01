import { map } from 'ramda'
import React, { useEffect, useState } from 'react'
import { Flipped, Flipper } from 'react-flip-toolkit'
import styled from 'styled-components'

import shuffle from '../utils/shuffleArray'
import ListItem from './ListItem'

const Background = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  width: 100%;
  margin-top: -42px;
  z-index: -1;
`

const ListWrapper = styled.div`
  margin-top: 80px;
  width: 70%;
`

const StyledFlipper = styled(Flipper)`
  && {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`

const List = () => {
  const [items, setItems] = useState([
    { title: 'Title1', description: 'description 1', id: 1 },
    { title: 'Title2', description: 'description 2', id: 2 },
    { title: 'Title3', description: 'description 3', id: 3 },
    { title: 'Title4', description: 'description 4', id: 4 },
    { title: 'Title5', description: 'description 5', id: 5 },
    { title: 'Title6', description: 'description 6', id: 6 },
    { title: 'Title7', description: 'description 7', id: 7 },
    { title: 'Title8', description: 'description 8', id: 8 },
  ])

  useEffect(() => {
    const id = setInterval(() => {
      setItems(shuffle(items).slice())
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <Background>
      <ListWrapper>
        <StyledFlipper flipKey={map(item => item.id, items).join('')}>
          {map(
            item => (
              <ListItem title={item.title} description={item.description} id={item.id} key={item.id} />
            ),
            items,
          )}
        </StyledFlipper>
      </ListWrapper>
    </Background>
  )
}

export default List
