import axios from 'axios'
import { graphql } from 'gatsby'
import { map } from 'ramda'
import React, { useEffect, useState } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import List from '../components/List'
import SearchInput from '../components/SearchInput'
import packages from '../packages'
import { GlobalStyle } from '../theme/globalStyle'

export interface IQueryProps {
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
  id: string
  url: string
}

const Home = ({ data }: IQueryProps) => {
  const [input, setInput] = useState('')
  const [items, setItems] = useState<IPackage[]>([])
  const [filteredItems, setFilteredItems] = useState<IPackage[]>([])

  const fetchData = async () => {
    const result = await axios({
      method: 'post',
      url: 'https://api.github.com/graphql',
      headers: { Authorization: 'bearer e4ed0fb51ef797f89549da18ac1e41cab26415ee' },
      data: {
        query: `
          query {
            organization(login: "astrocoders") {
              repositories(first: 100) {
                nodes {
                  name
                  description
                  id
                  url
                }
              }
            }
        }
        `,
      },
    })

    const fetchedItems: IPackage[] = map(
      repo => ({ title: repo.name, description: repo.description, id: repo.id, url: repo.url }),
      result.data.data.organization.repositories.nodes,
    )

    setItems(fetchedItems)
    setFilteredItems(fetchedItems)
  }
  useEffect(() => {
    fetchData()
  }, [])

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
      <List items={filteredItems} />
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
