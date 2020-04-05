import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { Row } from 'antd'

import Layout from 'components/layout'
import SEO from 'components/seo'
import Header from 'components/header'
import Card from 'components/card/blog-card'
import CardContainer from 'components/card/card-container'

const PortfolioButton = styled.div`
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
      <PortfolioButton>
        <Link to="/">Go to portfolio page</Link>
      </PortfolioButton>
      <p>Page is still in progress. Welcome back later!</p>
      <CardContainer>
        <Row gutter={[20, 20]}>
          {posts.map((post) => {
            const frontmatter = post.node.frontmatter
            // console.log(frontmatter.featuredimage)
            return (
              <Card key={post.node.id}>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.description}</p>
                <Link to={post.node.fields.slug}>Go to post</Link>
              </Card>
            )
          })}
        </Row>
      </CardContainer>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            featuredimage
          }
        }
      }
    }
  }
`

export default BlogPage
