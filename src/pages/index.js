import React from 'react'
import styled from 'styled-components'
import { Row, Divider } from 'antd'

import Layout from 'components/layout'
import SEO from 'components/seo'
import Header from 'components/header'
import Card from 'components/card'
import Avatar from 'components/avatar'
import CardContainer from 'components/card/card-container'
import ProjectCard from 'components/card/project-card'

import { colors } from 'constants/theme'

import IconAuthor from 'images/author-logo.svg'
import IconConsole from 'images/console.svg'
import IconCloud from 'images/cloud-console.svg'
import IconWeb from 'images/front-end.svg'
import IconWeight from 'images/weight.svg'
import IconPages from 'images/blog-pages.svg'
import IconChip from 'images/icon-chip.svg'
import IconNetwork from 'images/icon-network.svg'
import IconGreenhouse from 'images/icon-greenhouse.svg'

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
        services and other engineering projects using code.
      </p>
    </IntroText>
    <CardContainer>
      <Divider id="skills">Software Skills</Divider>
      <PageRow gutter={gutter}>
        <Card image={IconWeb}>
          <h2>Frontend</h2>
          <p>
            Experience in building blazing fast commercial applications using
            React.js and GraphQL.
          </p>
        </Card>
        <Card image={IconConsole}>
          <h2>Backend</h2>
          <p>
            Building backend services using Node.js and Python. Using both NoSQL
            and SQL based database services.
          </p>
        </Card>
        <Card image={IconCloud}>
          <h2>Cloud</h2>
          <p>
            Proficiency in using cloud providers like GCP and AWS to build
            scalable and secure services.
          </p>
        </Card>
      </PageRow>
      <Divider id="projects">Projects and Contributions</Divider>
      <PageRow gutter={gutter}>
        <ProjectCard
          title="Weight Boss"
          image={IconWeight}
          links={[
            {
              text: 'Live',
              href: 'https://weight.ofstad.io/',
            },
            {
              text: 'GitHub',
              href: 'https://github.com/heofs/weight-boss',
            },
          ]}
        >
          Web application for logging your body weight. Built with React and
          serverless functions.
        </ProjectCard>

        <ProjectCard
          title="Author"
          image={IconAuthor}
          links={[
            {
              text: 'GitHub',
              href: 'https://github.com/ONSdigital/eq-author-app',
            },
          ]}
        >
          Web application used by Office for National Statistics in the UK for
          building electronic questionnaires.
        </ProjectCard>

        <ProjectCard
          title="Portfolio"
          image={IconPages}
          links={[
            {
              text: 'Live',
              href: 'https://henning.ofstad.io/',
            },
            {
              text: 'GitHub',
              href: 'https://github.com/heofs/portfolio-henning',
            },
          ]}
        >
          My personal website. Written using React.js and Gatsby.
        </ProjectCard>

        <ProjectCard
          title="greenhouse-mqtt"
          image={IconNetwork}
          links={[
            {
              text: 'GitHub',
              href: 'https://github.com/heofs/greenhouse-mqtt',
            },
          ]}
        >
          Data harvesting from sensors using Google Cloud IoT Core with Pub/Sub
          and MQTT. Visualising data using BigQuery and Grafana.
        </ProjectCard>

        <ProjectCard
          title="esp32-sensor"
          image={IconChip}
          links={[
            {
              text: 'GitHub',
              href: 'https://github.com/heofs/esp32-sensor',
            },
          ]}
        >
          Using a ESP32 microcontroller with integrated WiFi to upload sensor
          data to an API endpoint.
        </ProjectCard>

        <ProjectCard
          title="Plantager"
          // image={IconChip}
          image={IconGreenhouse}
          links={[
            {
              text: 'GitHub',
              href: 'https://github.com/heofs/plantager-system',
            },
          ]}
        >
          My latest creation is a work in progress. When finished it will be a
          complete greenhouse controller system with a web interface for
          controlling and monitoring.
        </ProjectCard>
      </PageRow>
    </CardContainer>
  </Layout>
)

export default IndexPage
