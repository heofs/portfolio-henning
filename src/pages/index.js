import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import Layout from 'components/layout'
import SEO from 'components/seo'

import Header from 'components/header'

const TopText = styled(Row)`
  /* background-color: grey; */
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <TopText>
      <h2>Software Engineer</h2>
      <p>
        My name is Henning, I am a full stack software developer from Norway. I
        build awesome applications using the latest technologies.
      </p>
    </TopText>
  </Layout>
)

export default IndexPage
