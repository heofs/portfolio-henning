import React from 'react'
import styled from 'styled-components'
import { Row, Divider } from 'antd'

import Layout from 'components/layout'
import SEO from 'components/seo'
import Header from 'components/header'
import Card from 'components/card'

import { colors, breakpoints } from 'constants/theme'

const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.secondary};
  padding-top: 1em;
  border-bottom: thin solid ${colors.borderColor};
`

const PageRow = styled(Row)``

const Content = styled.div`
  margin: 0 1em;

  @media (min-width: ${breakpoints.md}) {
    margin: auto;
    max-width: 700px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`

const gutter = [20, 20]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <IntroText>
      <h2>About me</h2>
      <p>
        My name is Henning, I am a software engineer from Norway. I build
        software services and other engineering projects.
      </p>
    </IntroText>
    <Content>
      <Divider>Software Skills</Divider>
      <PageRow gutter={gutter}>
        <Card>
          <h2>Frontend</h2>
          <p>Creating intuitive user interfaces using React.</p>
        </Card>
        <Card>
          <h2>Backend</h2>
          <p>
            Building reliable backend services using JavaScript Node.js and
            Python.
          </p>
        </Card>
        <Card>
          <h2>Cloud</h2>
          <p>Electronics projects..</p>
        </Card>
      </PageRow>
      <Divider>Contributions</Divider>
      <PageRow gutter={gutter}>
        <Card>
          <h2>Weight Boss</h2>
          <p>Electronics projects..</p>
        </Card>
        <Card>
          <h2>Author</h2>
          <p>Electronics projects..</p>
        </Card>
        <Card>
          <h2>Blog</h2>
          <p>Electronics projects..</p>
        </Card>
      </PageRow>
    </Content>
  </Layout>
)

export default IndexPage
