import React from 'react'
import { graphql } from 'gatsby'

import Header from '../components/Header'
import Hero from '../components/Hero'

export default ({ data }) => (
  <div>
    <Header
      hireLink={data.site.siteMetadata.hireLink}
      bugLink={data.site.siteMetadata.bugLink}
      githubLink={data.site.siteMetadata.githubLink}
    />
    <Hero />
  </div>
)

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
