import 'jest-dom/extend-expect'
import React from 'react'
import { render } from 'react-testing-library'
import { create } from 'react-test-renderer'

import Header from './Header'

describe('Header test', () => {
  it('Renders the header correctly', () => {
    const { container } = render(<Header />)
    const div = container.querySelector('div')
    expect(div).toBeVisible()
  })
})
