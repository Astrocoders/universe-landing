import { graphql } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'

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
    allUniverseJson: {
      edges: IPackage[]
    }
  }
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex: 1;
  margin-bottom: 20px;
`

const Home = ({ data }: IQueryProps) => {
  const [input, setInput] = useState('')
  const [filteredItems, setFilteredItems] = useState<IPackage[]>(data.allUniverseJson.edges)

  return (
    <>
      <GlobalStyle />
      <Page>
        <Content>
          <Header
            hireLink={data.site.siteMetadata.hireLink}
            bugLink={data.site.siteMetadata.bugLink}
            githubLink={data.site.siteMetadata.githubLink}
          />
          <Hero />
          <SearchInput
            input={input}
            onChange={setInput}
            items={data.allUniverseJson.edges}
            setItems={setFilteredItems}
          />
          <List items={filteredItems} />
        </Content>
        <Footer link={data.site.siteMetadata.weAreHiringLink} />
      </Page>
    </>
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
    allUniverseJson {
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
