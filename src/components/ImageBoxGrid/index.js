import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Row as AntRow, Col } from 'antd'

import IconJs from 'src/images/icon-js.svg'
import IconReact from 'src/images/icon-react.svg'
import NodeIcon from 'src/images/icon-node-2.svg'
import GraphqlIcon from 'src/images/icon-graphql.svg'
import CloudIcon from 'src/images/icon-cloud.svg'

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
    <StyledCol span={span} size={2.8} {...otherProps}>
      <Image />
      {children}
    </StyledCol>
  )
}

Box.propTypes = {
  span: PropTypes.number,
}

const Row = styled(AntRow)`
  margin: 2em 0;
`

const Title = styled.h2`
  font-size: 1.6em;
  margin: 0.1em;
`

const Text = styled.p`
  font-size: 1em;
  margin: 0;
`

const ImageBoxGrid = (props) => {
  return (
    <div>
      <Row type="flex" justify="space-around">
        <Box span={8} image={IconJs}>
          <Title>JavaScript</Title>
          <Text>Building applications with JavaScript ES6.</Text>
        </Box>
        <Box span={8} image={NodeIcon}>
          <Title>Node.js</Title>
          <Text>Creating backend web services in Node.js.</Text>
        </Box>
        <Box span={8} image={IconReact}>
          <Title>React</Title>
          <Text>
            Experience in building blazing fast commercial applications using
            React.js.
          </Text>
        </Box>
      </Row>
      <Row type="flex" justify="space-around">
        <Col span={4} />
        <Box span={8} image={GraphqlIcon}>
          <Title>GraphQL</Title>
          <Text>Building and designing applications that use GraphQL.</Text>
        </Box>
        <Box span={8} image={CloudIcon}>
          <Title>Cloud</Title>
          <Text>
            Using services like GCP and AWS to build cloud infrastructure.
          </Text>
        </Box>
        <Col span={4} />
      </Row>
    </div>
  )
}

ImageBoxGrid.propTypes = {}

export default ImageBoxGrid
