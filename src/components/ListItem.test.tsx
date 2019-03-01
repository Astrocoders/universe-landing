import 'jest-dom/extend-expect'
import React from 'react'
import { cleanup, render } from 'react-testing-library'

import ListItem, { IProps } from './ListItem'

afterEach(cleanup)

const props: IProps = {
  title: "ListItem's title",
  description: "ListItem's description",
  id: 42,
}

describe('ListItem test', () => {
  it('should render the ListItem', () => {
    const { getByTestId, getByText } = render(<ListItem {...props} />)

    expect(getByTestId('list-item')).toBeVisible()
    expect(getByText(props.title)).toBeVisible()
    expect(getByText(props.description)).toBeVisible()
  })
})
