import 'jest-dom/extend-expect'
import React from 'react'
import { render } from 'react-testing-library'

import Container from './Container'

describe('Container test', () => {
  it('Renders the container correctly', () => {
    const { container } = render(<Container />)
    const div = container.querySelector('div')
    expect(div).toHaveStyle('max-width: 600px')
  })
})
