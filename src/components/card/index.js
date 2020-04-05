import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Col, Card as AntCard } from 'antd'

import { colors, sizes } from 'constants/theme'

export const StyledCard = styled(AntCard)`
  border: none;
  border-radius: ${sizes.borderRadius};
  .ant-card-body {
    border: thin solid ${colors.borderColor};
    height: 100%;
    border-radius: ${sizes.borderRadius};
    svg {
      width: ${sizes.cardImageSize};
      height: ${sizes.cardImageSize};
    }
    -webkit-box-shadow: 2px 2px 9px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 9px -7px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 9px -7px rgba(0, 0, 0, 0.75);
  }
  height: 100%;
`

const cardColSpan = { xs: 24, md: 8, lg: 8 }

const Card = ({ children, image: Image }) => {
  return (
    <Col {...cardColSpan}>
      <StyledCard>
        {Image && <Image />}
        {children}
      </StyledCard>
    </Col>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.any.isRequired,
}

export default Card
