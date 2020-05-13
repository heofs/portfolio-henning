import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Row, Divider } from 'antd'

import Layout from 'components/layout'
import SEO from 'components/seo'
import Header from 'components/header'
import Card from 'components/card'
import Avatar from 'components/avatar'
import CardContainer from 'components/card/card-container'

import { colors } from 'constants/theme'

import IconAuthor from 'images/author-logo.svg'
import IconConsole from 'images/console.svg'
import IconCloud from 'images/cloud-console.svg'
import IconWeb from 'images/front-end.svg'
import IconWeight from 'images/weight.svg'
import IconPages from 'images/blog-pages.svg'

const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.secondary};
  border-bottom: thin solid ${colors.borderColor};
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 5px -6px #222;
  padding: 1em;
  p {
    margin: 0;
  }
`

const PageRow = styled(Row)``

const gutter = [20, 20]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header>
      <Avatar />
      <h1>Henning Ofstad</h1>
      <p>Software Engineer</p>
    </Header>
    <IntroText>
      {/* <h2>About me</h2> */}
      <p>
        My name is Henning, I am a software engineer from Norway. I build
        software services and other engineering projects.
      </p>
    </IntroText>
    <CardContainer>
      <Divider>Software Skills</Divider>
      <PageRow gutter={gutter}>
        <Card image={IconWeb}>
          <h2>Frontend</h2>
          <p>
            Experience in building blazing fast commercial applications using
            React.js.
          </p>
        </Card>
        <Card image={IconConsole}>
          <h2>Backend</h2>
          <p>Building backend services using Node.js and Python.</p>
        </Card>
        <Card image={IconCloud}>
          <h2>Cloud</h2>
          <p>
            Proficiency in using cloud providers like GCP and AWS to build
            highly scalable and secure services.
          </p>
        </Card>
      </PageRow>
      <Divider>Projects and Contributions</Divider>
      <PageRow gutter={gutter}>
        <Card image={IconWeight}>
          <h2>Weight Boss</h2>
          <p>
            Web application for logging your body weight. Built with React and
            serverless functions.
          </p>
          <a
            href="https://weight.ofstad.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
          {' | '}
          <a
            href="https://github.com/heofs/weight-boss"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Card>
        <Card image={IconAuthor}>
          <h2>Author</h2>
          <p>
            Web application used by Office for National Statistics in the UK for
            building questionnaires.
          </p>
          <a
            href="https://github.com/ONSdigital/eq-author-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Card>
        <Card image={IconPages}>
          <h2>Blog</h2>
          <p>My personal blog with engineering projects.. Work in progress.</p>
          <Link to="/blog">Go to blog</Link>
        </Card>
      </PageRow>
    </CardContainer>
  </Layout>
)

export default IndexPage
