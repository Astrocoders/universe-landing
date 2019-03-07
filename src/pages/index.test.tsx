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
      },
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
    expect(getByTestId('footer')).toBeVisible()
  })
})
