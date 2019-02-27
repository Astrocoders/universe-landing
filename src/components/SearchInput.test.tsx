import 'jest-dom/extend-expect'
import React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'

import SearchInput from './SearchInput'

afterEach(cleanup)

describe('SearchInput test', () => {
  it('Should render the search input', () => {
    const handleChange = jest.fn()
    const { getByTestId, getByPlaceholderText } = render(<SearchInput onChange={handleChange} />)

    expect(getByTestId('search-icon')).toBeVisible()
    expect(getByTestId('search-input')).toBeVisible()
    expect(getByPlaceholderText('Search bindings')).toBeInTheDocument()
  })

  it('Should call onChange with the value from the input', () => {
    const handleChange = jest.fn()
    const { getByTestId } = render(<SearchInput onChange={handleChange} />)
    const input = getByTestId('search-input') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'Howdy!' } })
    expect(handleChange).toHaveBeenCalled()
    expect(input.value).toBe('Howdy!')
  })
})
