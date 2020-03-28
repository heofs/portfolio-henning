import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Col, Card as AntCard } from 'antd'

import { colors, sizes } from 'constants/theme'

const StyledCard = styled(AntCard)`
  border: none;
  .ant-card-body {
    background: ${colors.secondary};
    border: thin solid ${colors.borderColor};
    height: 100%;
    border-radius: 10px;
    svg {
      width: ${sizes.cardImageSize};
      height: ${sizes.cardImageSize};
    }
  }
  height: 100%;

  /* margin: 0 1em; */
  /* margin: 2em; */
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
