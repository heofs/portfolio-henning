import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Row as AntRow, Col } from 'antd'

import IconJs from 'src/images/icon-js-2.svg'
import IconReact from 'src/images/icon-react.svg'
import NodeIcon from 'src/images/icon-node-2.svg'
import GraphqlIcon from 'src/images/icon-graphql.svg'
import CloudIcon from 'src/images/icon-cloud.svg'
import DatabaseIcon from 'src/images/icon-database.svg'

const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: ${(props) => props.size}em;
    height: ${(props) => props.size}em;
  }
`

const Box = ({ span, children, image: Image, ...otherProps }) => {
  return (
    <StyledCol span={span} size={5} {...otherProps}>
      <Image />
      {children}
    </StyledCol>
  )
}

Box.propTypes = {
  span: PropTypes.number,
  children: PropTypes.array,
}

const Row = styled(AntRow)`
  margin: 2em 0;
`

const Title = styled.h2`
  font-size: 2em;
  margin: 0.1em;
`

const Text = styled.p`
  font-size: 1.4em;
  margin: 0;
`

const Wrapper = styled.div`
  margin: 1em 0;
`

const colSettings = {
  xs: { span: 24, offset: 0 },
  sm: { span: 12, offset: 0 },
  md: { span: 8, offset: 0 },
}

const ImageBoxGrid = () => {
  return (
    <Wrapper>
      <Row type="flex" justify="space-around" gutter={[24, 24]}>
        <Box {...colSettings} image={IconJs}>
          <Title>JavaScript</Title>
          <Text>
            Using the latest features of ES6 to build applications on both
            frontend and backend.
          </Text>
        </Box>
        <Box {...colSettings} image={NodeIcon}>
          <Title>Node.js</Title>
          <Text>
            Powerful backend services using Chrome's V8 JavaScript engine.
          </Text>
        </Box>
        <Box {...colSettings} image={IconReact}>
          <Title>React</Title>
          <Text>
            Experience in building blazing fast commercial applications using
            React.js.
          </Text>
        </Box>
        <Box {...colSettings} image={DatabaseIcon}>
          <Title>Databases</Title>
          <Text>
            Utilising both SQL and No-SQL database solutions to handle
            application data.
          </Text>
        </Box>
        <Box {...colSettings} image={GraphqlIcon}>
          <Title>GraphQL</Title>
          <Text>
            Creating awesome APIs using GraphQL as a communication layer.
          </Text>
        </Box>
        <Box {...colSettings} image={CloudIcon}>
          <Title>Cloud</Title>
          <Text>
            Using highly scaleable and secure services like GCP and AWS to build
            application infrastructure.
          </Text>
        </Box>
      </Row>
    </Wrapper>
  )
}

export default ImageBoxGrid
