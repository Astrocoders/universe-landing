import 'jest-dom/extend-expect'
import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'

import SearchInput from './SearchInput'

afterEach(cleanup)

describe('SearchInput test', () => {
  it('Should render the search input', () => {
    const { getByTestId, getByPlaceholderText } = render(<SearchInput />)

    expect(getByTestId('search-input')).toBeVisible()
    expect(getByTestId('search-icon')).toBeVisible()
    expect(getByPlaceholderText('Search bindings')).toBeInTheDocument()
  })

  it('Should change the input value when the user types in it', () => {
    const { container } = render(<SearchInput />)
    const input = container.firstChild

    fireEvent.change(input, { target: { value: 'Howdy!' } })
    expect(input.value).toBe('Howdy!')
  })
})
