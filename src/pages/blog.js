import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { Row, Divider } from 'antd'

import Layout from 'components/layout'
import SEO from 'components/seo'
import Header from 'components/header'

const StyledRow = styled.div`
  padding: 1em 0;
  display: flex;
  justify-content: center;
`

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />
      <Header height={'10rem'}>
        <h1>Blog</h1>
        <h2>Henning Ofstad</h2>
      </Header>
      <StyledRow>
        <Link to="/">Go to portfolio page</Link>
      </StyledRow>
      <p>Page is still in progress. Welcome back later!</p>
      {posts.map((post) => {
        const frontmatter = post.node.frontmatter
        return (
          <>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.description}</p>
          </>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query BlogPostsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`

export default BlogPage
