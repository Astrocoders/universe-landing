import { graphql } from 'gatsby'
import React, { useState } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import List from '../components/List'
import SearchInput from '../components/SearchInput'
import { GlobalStyle } from '../theme/globalStyle'

interface IQueryProps {
  data: {
    site: {
      siteMetadata: {
        hireLink: string
        bugLink: string
        githubLink: string
      }
    }
  }
}

export default ({ data }: IQueryProps) => {
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
      <List />
      <Footer />
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
