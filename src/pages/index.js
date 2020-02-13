import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'

import Header from 'components/header'
import Avatar from 'components/avatar'
import ImageBoxGrid from 'components/ImageBoxGrid'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Avatar />
    <Header />
    <ImageBoxGrid />
  </Layout>
)

export default IndexPage
