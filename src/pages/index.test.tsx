import 'jest-dom/extend-expect'
import React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'

import Home, { IQueryProps } from './index'

afterEach(cleanup)

const query: IQueryProps = {
  data: {
    site: {
      siteMetadata: {
        hireLink: '#',
        bugLink: '#',
        githubLink: '#',
      },
    },
  },
}

describe('Home test', () => {
  it('Should render the home page', () => {
    const { getByTestId, queryByTestId } = render(<Home {...query} />)

    expect(getByTestId('header')).toBeVisible()
    expect(getByTestId('hero')).toBeVisible()
    expect(getByTestId('input')).toBeVisible()
    expect(getByTestId('list')).toBeVisible()
    expect(queryByTestId('list-item')).toBeInTheDocument()
    expect(getByTestId('footer')).toBeVisible()
  })

  it('Should filter the packages by title and description', () => {
    const { getByTestId, queryByText, getByText } = render(<Home {...query} />)
    const input = getByTestId('search-input') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'universe' } })

    expect(input.value).toBe('universe')
    expect(queryByText('universe-landing')).toBeInTheDocument()
    expect(queryByText('jurishand-app')).not.toBeInTheDocument()
  })
})
