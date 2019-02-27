import React, { useState } from 'react'
import { graphql } from 'gatsby'

import { GlobalStyle } from '../theme/globalStyle'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SearchInput from '../components/SearchInput'

export default ({ data }) => {
  const [input, setInput] = useState('')

  return (
    <div>
      <GlobalStyle />
      <Header
        hireLink={data.site.siteMetadata.hireLink}
        bugLink={data.site.siteMetadata.bugLink}
        githubLink={data.site.siteMetadata.githubLink}
      />
      <Hero />
      <SearchInput onChange={setInput} />
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        hireLink
        bugLink
        githubLink
      }
    }
  }
`
