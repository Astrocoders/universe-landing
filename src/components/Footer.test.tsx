import 'jest-dom/extend-expect'
import React from 'react'
import { cleanup, render } from 'react-testing-library'

import Footer from './Footer'

afterEach(cleanup)

describe('Footer test', () => {
  it('Should render the Footer', () => {
    const { getByText } = render(<Footer link="#" />)

    expect(getByText('WE ARE HIRING!')).toBeVisible()
  })
})
