import React from 'react'
import styled from 'styled-components'
import { Row, Divider } from 'antd'

import Layout from 'components/layout'
import SEO from 'components/seo'
import Header from 'components/header'
import Card from 'components/card'

import { colors, breakpoints } from 'constants/theme'

import IconJS from 'images/icon-js-2.svg'

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
        <Card image={IconJS}>
          <h2>Frontend</h2>
          <p>
            Experience in building blazing fast commercial applications using
            React.js.
          </p>
        </Card>
        <Card image={IconJS}>
          <h2>Backend</h2>
          <p>Building backend services using Node.js and Python.</p>
        </Card>
        <Card image={IconJS}>
          <h2>Cloud</h2>
          <p>
            Proficiency in using cloud providers like GCP and AWS to build
            highly scalable and secure services.
          </p>
        </Card>
      </PageRow>
      <Divider>Contributions</Divider>
      <PageRow gutter={gutter}>
        <Card image={IconJS}>
          <h2>Weight Boss</h2>
          <p>
            Web application for logging your body weight. Built with React and
            serverless functions.
          </p>
        </Card>
        <Card image={IconJS}>
          <h2>Author</h2>
          <p>
            Web application used by Office for National Statistics in the UK for
            building questionnaires.
          </p>
        </Card>
        <Card image={IconJS}>
          <h2>Blog</h2>
          <p>My personal blog with engineering projects.. Work in progress.</p>
        </Card>
      </PageRow>
    </Content>
  </Layout>
)

export default IndexPage
