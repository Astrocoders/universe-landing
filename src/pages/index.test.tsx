import '@testing-library/jest-dom/extend-expect'
import { cleanup, fireEvent, render } from '@testing-library/react'
import React from 'react'

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
    allUniverseJson: {
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
    const { getByTestId } = render(<Home {...query} />)

    expect(getByTestId('header')).toBeVisible()
    expect(getByTestId('hero')).toBeVisible()
    expect(getByTestId('input')).toBeVisible()
    expect(getByTestId('list')).toBeVisible()
    expect(getByTestId('list-item')).toBeVisible()
    expect(getByTestId('footer')).toBeVisible()
  })

  it('Should filter the packages by title and description', () => {
    const { getByTestId, queryByText } = render(<Home {...query} />)
    const input = getByTestId('search-input') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'top' } })

    expect(input.value).toBe('top')
    expect(queryByText('top-binding')).toBeInTheDocument()
    expect(queryByText('awesome-binding')).not.toBeInTheDocument()
  })
})
