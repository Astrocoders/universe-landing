import axios from 'axios'
import { graphql } from 'gatsby'
import { map } from 'ramda'
import React, { useState } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import List from '../components/List'
import SearchInput from '../components/SearchInput'
import { GlobalStyle } from '../theme/globalStyle'

export interface IPackage {
  node: {
    title: string
    description: string
    url: string
  }
}

export interface IQueryProps {
  data: {
    site: {
      siteMetadata: {
        hireLink: string
        bugLink: string
        githubLink: string
        weAreHiringLink: string
      }
    }
    allUniverse: {
      edges: IPackage[]
    }
  }
}

const Home = ({ data }: IQueryProps) => {
  const [input, setInput] = useState('')
  const [filteredItems, setFilteredItems] = useState<IPackage[]>(data.allUniverse.edges)

  return (
    <div>
      <GlobalStyle />
      <Header
        hireLink={data.site.siteMetadata.hireLink}
        bugLink={data.site.siteMetadata.bugLink}
        githubLink={data.site.siteMetadata.githubLink}
      />
      <Hero />
      <SearchInput input={input} onChange={setInput} items={data.allUniverse.edges} setItems={setFilteredItems} />
      <List items={filteredItems} />
      <Footer link={data.site.siteMetadata.weAreHiringLink} />
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
        weAreHiringLink
      }
    }
    allUniverse {
      edges {
        node {
          title
          description
          url
        }
      }
    }
  }
`

export default Home
