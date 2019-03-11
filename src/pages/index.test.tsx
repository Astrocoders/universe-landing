import 'jest-dom/extend-expect'
import React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'

import { IPackage } from '../utils/data'
import Home, { IQueryProps } from './index'

afterEach(cleanup)

const query: IQueryProps = {
  data: {
    site: {
      siteMetadata: {
        hireLink: '#',
        bugLink: '#',
        githubLink: '#',
        weAreHiringLink: '#',
      },
    },
    allUniverse: {
      edges: [
        {
          node: {
            title: 'awesome-binding',
            description: 'really awesome',
            url: '#',
          },
        },
        {
          node: {
            title: 'top-binding',
            description: 'topperson binding',
            url: '#',
          },
        },
      ],
    },
  },
}

describe('Home test', () => {
  it('Should render the home page', async () => {
    const { getByTestId, queryByTestId } = render(<Home {...query} />)

    expect(getByTestId('header')).toBeVisible()
    expect(getByTestId('hero')).toBeVisible()
    expect(getByTestId('input')).toBeVisible()
    expect(getByTestId('list')).toBeVisible()
    expect(getByTestId('list-item')).toBeVisible()
    expect(getByTestId('footer')).toBeVisible()
  })

  it('Should filter the packages by title and description', () => {
    const { getByTestId, queryByText, getByText } = render(<Home {...query} />)
    const input = getByTestId('search-input') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'top' } })

    expect(input.value).toBe('top')
    expect(queryByText('top-binding')).toBeInTheDocument()
    expect(queryByText('awesome-binding')).not.toBeInTheDocument()
  })
})
