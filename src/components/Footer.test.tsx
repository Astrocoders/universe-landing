import 'jest-dom/extend-expect'
import React from 'react'
import { cleanup, render } from 'react-testing-library'

import Footer from './Footer'

afterEach(cleanup)

describe('Footer test', () => {
  it('Should render the Footer', () => {
    const { getByTestId, getByText } = render(<Footer />)

    expect(getByTestId('logo')).toBeVisible()
    expect(getByText('we are hiring!')).toBeVisible()
  })
})
