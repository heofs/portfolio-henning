import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from 'components/layout'
import Header from 'components/header'
import SEO from 'components/seo'

const BlogContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  margin-top: 2em;
`

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title="Blog" />
      <Header height={'8rem'}>
        <h1>{post.frontmatter.title}</h1>
      </Header>
      <BlogContent>
        <Link to={'/blog'}>Back to blog</Link>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />

        {/* <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul> */}
      </BlogContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html

      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

export default BlogPostTemplate
