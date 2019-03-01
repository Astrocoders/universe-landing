import React from 'react'
import { Flipped } from 'react-flip-toolkit'
import styled from 'styled-components'

const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  margin: 5px;
  display: flex;
  justify-content: center;
  font-family: Roboto;
`

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #5c5c5c;
`

const CardDescription = styled.div`
  font-size: 12px;
  color: #afafaf;
`

export interface IProps {
  title: string
  description: string
  id: number
}

const ListItem = (props: IProps) => {
  return (
    <Flipped flipId={props.id.toString()}>
      <Card data-testid="list-item">
        <CardTitle>
          <p> {props.title} </p>
        </CardTitle>
        <CardDescription>
          <p> {props.description} </p>
        </CardDescription>
      </Card>
    </Flipped>
  )
}

export default ListItem
