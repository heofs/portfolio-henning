import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import ImageBoxGrid from 'components/ImageBoxGrid'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ImageBoxGrid />
    <p>Welcome to my website.</p>
  </Layout>
)

export default IndexPage
