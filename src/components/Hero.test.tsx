import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/react'
import React from 'react'

import Hero from './Hero'

afterEach(cleanup)

describe('Hero test', () => {
  it('renders the hero correctly', () => {
    const { container, getByText } = render(<Hero />)
    const div = container.querySelector('div')

    expect(div).toBeVisible()
    expect(getByText('Universe')).toBeVisible()
    expect(getByText('Find ReasonML bulletproof bindings')).toBeVisible()
  })
})
