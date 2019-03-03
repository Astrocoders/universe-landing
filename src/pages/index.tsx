import { graphql } from 'gatsby'
import React, { useState } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import List from '../components/List'
import SearchInput from '../components/SearchInput'
import packages from '../packages'
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

export interface IPackage {
  title: string
  description: string
  id: number
}

const Home = ({ data }: IQueryProps) => {
  const [input, setInput] = useState('')
  const [items, setItems] = useState(packages)
  const [filteredItems, setFilteredItems] = useState(packages)

  return (
    <div>
      <GlobalStyle />
      <Header
        hireLink={data.site.siteMetadata.hireLink}
        bugLink={data.site.siteMetadata.bugLink}
        githubLink={data.site.siteMetadata.githubLink}
      />
      <Hero />
      <SearchInput input={input} onChange={setInput} items={items} setItems={setFilteredItems} />
      <List input={input} items={filteredItems} />
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

export default Home
