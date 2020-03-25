import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Col, Card as AntCard } from 'antd'
import { colors } from 'constants/theme'

const StyledCard = styled(AntCard)`
  .ant-card-body {
    background: ${colors.secondary};
    border: thin solid ${colors.borderColor};
    height: 100%;
  }
  height: 100%;
  /* margin: 0 1em; */
  /* margin: 2em; */
`

const cardColSpan = { xs: 24, md: 8, lg: 8 }

const Card = ({ children }) => {
  return (
    <Col {...cardColSpan}>
      <StyledCard>{children}</StyledCard>
    </Col>
  )
}

Card.propTypes = { children: PropTypes.node.isRequired }

export default Card
