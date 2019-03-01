import React from 'react'
import { Flipped } from 'react-flip-toolkit'
import styled from 'styled-components'

const Card = styled.div`
  width: 180px;
  height: 180px;
  padding: 20px;
  background-color: #fff;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-content: center;
  font-family: Roboto;

  &:hover {
    box-shadow: 0px 0px 24px 2px rgba(0, 0, 0, 0.75);
     {
      /* not working for some reason */
    }
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
