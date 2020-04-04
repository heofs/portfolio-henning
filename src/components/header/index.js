import React from 'react'
import styled from 'styled-components'
import Particles from './particles'
import { Row } from 'antd'
import { colors, sizes } from 'constants/theme'

const Wrapper = styled(Row)`
  /* background-color: red; */
  width: 100%;
  height: ${(props) => props.height};
  padding: 0;
  display: flex;
  justify-content: center;
`

const Column = styled.div`
  z-index: 2;
  h1,
  h2,
  p {
    color: ${colors.headerText};
  }
`

const Header = ({ children, height: headerHeight }) => {
  const height = headerHeight || sizes.headerHeight

  return (
    <Wrapper align="middle" height={height}>
      <Particles height={height} />
      <Column height={height}>{children}</Column>
    </Wrapper>
  )
}

export default Header
