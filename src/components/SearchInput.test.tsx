import '@testing-library/jest-dom/extend-expect'
import { cleanup, fireEvent, render } from '@testing-library/react'
import React from 'react'

import SearchInput from './SearchInput'

afterEach(cleanup)

const props = {
  input: '',
  items: [],
  setItems: jest.fn(),
}

describe('SearchInput test', () => {
  it('Should render the search input', () => {
    const { getByTestId, getByPlaceholderText } = render(<SearchInput onChange={jest.fn()} {...props} />)

    expect(getByTestId('search-icon')).toBeVisible()
    expect(getByTestId('search-input')).toBeVisible()
    expect(getByPlaceholderText('Search bindings')).toBeInTheDocument()
  })

  it('Should call onChange with the value from the input', () => {
    const handleChange = jest.fn()
    const { getByTestId } = render(<SearchInput onChange={handleChange} {...props} />)
    const input = getByTestId('search-input') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'Howdy!' } })
    expect(handleChange).toHaveBeenCalled()
    expect(input.value).toBe('Howdy!')
  })
})
