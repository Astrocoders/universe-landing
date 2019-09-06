import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/react'
import React from 'react'

import Footer from './Footer'

afterEach(cleanup)

describe('Footer test', () => {
  it('Should render the Footer', () => {
    const { getByText } = render(<Footer link="#" />)

    expect(getByText('WE ARE HIRING!')).toBeVisible()
  })
})
