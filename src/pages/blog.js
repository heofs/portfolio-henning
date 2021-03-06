import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import styled from 'styled-components'
import { Row } from 'antd'

import Layout from 'components/layout'
import SEO from 'components/seo'
import Header from 'components/header'
import BlogCard from 'components/card/blog-card'
import CardContainer from 'components/card/card-container'

const StyledCardContainer = styled(CardContainer)`
  &&& {
    margin-top: 1em;
  }
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
      <StyledCardContainer>
        <Row gutter={[20, 20]}>
          {posts.map((post) => {
            const frontmatter = post.node.frontmatter
            return (
              <BlogCard
                key={post.node.id}
                image={frontmatter.featuredImage}
                alt={frontmatter.featuredImageAlt}
                onClick={() => navigate(post.node.fields.slug)}
              >
                <h2>{frontmatter.title}</h2>
                <p>{frontmatter.description}</p>
                <Link to={post.node.fields.slug}>Read post</Link>
              </BlogCard>
            )
          })}
        </Row>
      </StyledCardContainer>
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
            featuredImage
            featuredImageAlt
          }
        }
      }
    }
  }
`

export default BlogPage
