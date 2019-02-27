import React, { useState } from 'react'
import styled from 'styled-components'

import SearchIcon from '../images/search-icon.png'

const Wrapper = styled.div`
  max-width: 50%;
  height: 76px;
  margin-left: 25%;
  margin-top: -38px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #000;
  transition: border 200ms ease-in, width 200ms ease-out;
  border: 2px solid ${props => (props.focused ? '#8773E3' : '#000')};
  border-radius: ${props => (props.focused ? '4px' : '0px')};
`

const SearchIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 4%;
  background-image: url(${SearchIcon});
  background-size: cover;
`

const Input = styled.input`
  background-color: inherit;
  border: none;
  margin-left: 5px;
  width: 90%;
  font-family: Roboto;
  font-size: 16px;
  color: #fff;

  @media (max-width: 650px) {
    text-align: center;
    margin-right: 10%;
  }

  &::placeholder {
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`

const SearchInput = props => {
  const [focused, setFocused] = useState(false)

  const handleChange = event => props.onChange(event.target.value)

  return (
    <Wrapper focused={focused}>
      <SearchIconWrapper data-testid="search-icon" />
      <Input
        placeholder="Search bindings"
        data-testid="search-input"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={handleChange}
      />
    </Wrapper>
  )
}

export default SearchInput
