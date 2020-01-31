import React from 'react'
import { Link } from 'gatsby'
import { Button, Icon } from 'antd'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const H1 = styled.h1`
  margin-top: 2em;
  margin-bottom: 1em;
`

const BackButton = styled(Button)`
  margin: 1em 0;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <H1>NOT FOUND</H1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">
      <BackButton type="primary">
        <Icon type="left" />
        Go back..
      </BackButton>
    </Link>
  </Layout>
)

export default NotFoundPage
