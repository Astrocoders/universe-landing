import { map } from 'ramda'
import React, { useEffect, useState } from 'react'
import { Flipped, Flipper } from 'react-flip-toolkit'
import styled from 'styled-components'

import shuffle from '../utils/shuffleArray'

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

const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MockListItem = (props: { id: number }) => (
  // This one is just for test purposses, I'll remove it later when ListItem is done
  <Flipped flipId={props.id.toString()}>
    <Card>
      {' '}
      <h1> {props.id} </h1>{' '}
    </Card>
  </Flipped>
)

const List = () => {
  const [items, setItems] = useState(Array.from(Array(8).keys()))

  useEffect(() => {
    const id = setInterval(() => {
      setItems(shuffle(items).slice())
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <Background>
      <ListWrapper>
        <StyledFlipper flipKey={items.join('')}>
          {map(
            item => (
              <MockListItem id={item} key={item} />
            ),
            items,
          )}
        </StyledFlipper>
      </ListWrapper>
    </Background>
  )
}

export default List
