import React from 'react'
import { Col } from 'antd'
import { StyledCard } from './index'

const cardColSpan = { xs: 24, md: 8, lg: 8 }

export const BlogCard = ({ children }) => {
  return (
    <Col {...cardColSpan}>
      <StyledCard>{children}</StyledCard>
    </Col>
  )
}

export default BlogCard
