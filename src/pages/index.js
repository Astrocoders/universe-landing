import React from 'react'
import { graphql } from 'gatsby'

import Header from '../components/Header'

export default ({ data }) => (
  <Header
    hireLink={data.site.siteMetadata.hireLink}
    bugLink={data.site.siteMetadata.bugLink}
    githubLink={data.site.siteMetadata.githubLink}
  />
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
