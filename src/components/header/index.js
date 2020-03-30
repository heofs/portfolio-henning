import React from 'react'
import styled from 'styled-components'
import Particles from './particles'
import Avatar from 'components/avatar'
import { Row } from 'antd'
import { colors, sizes } from 'constants/theme'

const Wrapper = styled(Row)`
  /* background-color: red; */
  width: 100%;
  height: ${sizes.headerHeight};
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: flex;
  flex-direction: column; */
`

const Column = styled.div`
  z-index: 2;
  h1,
  p {
    color: ${colors.headerText};
  }
`

const Header = () => (
  <Wrapper align="middle">
    <Particles height={sizes.headerHeight} />
    <Column>
      <Avatar />
      <h1>Henning Ofstad</h1>
      <p>Engineer</p>
    </Column>
  </Wrapper>
)

export default Header
