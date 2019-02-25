import 'jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { create } from 'react-test-renderer'
import { resizeWindow } from '../utils/utils'

import Header from './Header'

afterEach(cleanup)

describe('Header test', () => {
  it('Renders the header correctly', () => {
    const { container, getByTestId } = render(<Header />)
    const div = container.querySelector('div')

    expect(div).toBeVisible()
    expect(getByTestId('logo')).toBeVisible()
    expect(getByTestId('center-box')).toBeVisible()
    expect(getByTestId('hire-link')).toBeVisible()
    expect(getByTestId('bug-link')).toBeVisible()
    expect(getByTestId('github-link')).toBeVisible()
  })

  it('Receives the right props', () => {
    const props = {
      hireLink: 'hire-link',
      bugLink: 'bug-link',
      githubLink: 'github-link',
    }

    const { getByTestId } = render(<Header {...props} />)

    expect(getByTestId('hire-link').getAttribute('href')).toBe(props.hireLink)
    expect(getByTestId('bug-link').getAttribute('href')).toBe(props.bugLink)
    expect(getByTestId('github-link').getAttribute('href')).toBe(props.githubLink)
  })

  it('Should not render middle text if window width is <= 870px', () => {
    const { getByTestId } = render(<Header />)
    resizeWindow(600, 768)

    expect(getByTestId('center-box')).not.toBeVisible()
  })
})
