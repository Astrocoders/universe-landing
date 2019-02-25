import 'jest-dom/exted-expect'
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

  it('Should recieve props', () => {
    const header = create(<Header hireLink="hire-link" bugLink="bugLink" githubLink="githubLink" />)
    const instance = header.getInstance()
    expect(typeof instance.state.hireLink).toBe('string')
    expect(typeof instance.state.bugLink).toBe('string')
    expect(typeof instance.state.githubLink).toBe('string')
  })
})
