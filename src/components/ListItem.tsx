import React from 'react'
import { Flipped } from 'react-flip-toolkit'
import styled from 'styled-components'

import { IPackage } from '../utils/data'
import truncate from '../utils/truncate'

const Card = styled.a`
  width: 180px;
  height: 180px;
  padding: 20px;
  background-color: #fff;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 0px 0px 2px rgba(135, 115, 227, 1);
  }
`

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #5c5c5c;
`

const CardDescription = styled.div`
  font-size: 14px;
  color: #afafaf;
`

const ListItem = (props: IPackage) => {
  return (
    <Flipped flipId={props.id}>
      <Card data-testid="list-item" href={props.url}>
        <CardTitle>
          <p> {props.title} </p>
        </CardTitle>
        <CardDescription>
          <p> {props.description ? truncate(props.description, 80) : ''} </p>
        </CardDescription>
      </Card>
    </Flipped>
  )
}

export default ListItem
