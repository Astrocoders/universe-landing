import 'jest-dom/extend-expect'
import React from 'react'
import { cleanup, render } from 'react-testing-library'

import { IPackage } from '../utils/data'
import ListItem from './ListItem'

afterEach(cleanup)

const props: IPackage = {
  title: "ListItem's title",
  description: "ListItem's description",
  id: '42',
  url: '#',
}

describe('ListItem test', () => {
  it('should render the ListItem', () => {
    const { getByTestId, getByText } = render(<ListItem {...props} />)

    expect(getByTestId('list-item')).toBeVisible()
    expect(getByText(props.title)).toBeVisible()
    expect(getByText(props.description)).toBeVisible()
  })
})
