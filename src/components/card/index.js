import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Col, Card as AntCard } from 'antd'

import { colors, sizes } from 'constants/theme'

const StyledCard = styled(AntCard)`
  border: none;
  .ant-card-body {
    border: thin solid ${colors.borderColor};
    height: 100%;
    border-radius: 10px;
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

const StyledCol = styled(Col)``

const cardColSpan = { xs: 24, md: 8, lg: 8 }

const Card = ({ children, image: Image }) => {
  return (
    <StyledCol {...cardColSpan}>
      <StyledCard>
        {Image && <Image />}
        {children}
      </StyledCard>
    </StyledCol>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.any.isRequired,
}

export default Card
