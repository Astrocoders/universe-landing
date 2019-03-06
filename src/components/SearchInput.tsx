import { filter } from 'ramda'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import SearchIcon from '../images/search-icon.png'
import { IPackage } from '../utils/data'

const Wrapper = styled.div<{ focused: boolean }>`
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
  height: 74px;
  margin-left: 5px;
  width: 90%;
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

export interface IProps {
  input: string
  items: IPackage[]
  onChange(input: string): void
  setItems(items: IPackage[]): void
}

const SearchInput = (props: IProps) => {
  const [focused, setFocused] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event.target.value)

  const filterPackages = () => {
    props.setItems(
      filter(item => {
        const title = item.title.toLowerCase()
        const description = item.description ? item.description.toLowerCase() : ''
        const input = props.input.toLowerCase()

        return title.includes(input) || description.includes(input)
      }, props.items),
    )
  }
  useEffect(filterPackages, [props.input])

  return (
    <Wrapper focused={focused} data-testid="input">
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
