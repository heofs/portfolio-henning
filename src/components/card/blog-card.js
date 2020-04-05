import React from 'react'
import styled from 'styled-components'
import { Col } from 'antd'
import { StyledCard } from './index'
import { sizes } from 'constants/theme'

const Card = styled(StyledCard)`
  .ant-card-body {
    padding: 0;
  }

  h2 {
    font-size: 1.2em;
    text-align: left;
  }
  p {
    font-size: 1em;
    text-align: left;
  }
  img {
    width: 100%;
    height: 9em;
    object-fit: cover;
    border-top-left-radius: ${sizes.borderRadius};
    border-top-right-radius: ${sizes.borderRadius};
    cursor: pointer;
  }
`

const TextContainer = styled.div`
  padding: 1em;
`

const cardColSpan = { xs: 24, md: 8, lg: 8 }

export const BlogCard = ({ children, image, onClick }) => {
  return (
    <Col {...cardColSpan}>
      <Card>
        <img src={image} onClick={onClick} />
        <TextContainer>{children}</TextContainer>
      </Card>
    </Col>
  )
}

export default BlogCard
