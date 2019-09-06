import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/react'
import React from 'react'

import ListItem, { IProps } from './ListItem'

afterEach(cleanup)

const props: IProps = {
  title: "ListItem's title",
  description: "ListItem's description",
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
