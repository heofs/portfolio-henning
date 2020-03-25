import React from 'react'
import styled from 'styled-components'
import Particles from './particles'
import Avatar from 'components/avatar'
import { Row } from 'antd'

const headerHeight = '20rem'

const Wrapper = styled(Row)`
  /* background-color: red; */
  width: 100%;
  height: ${headerHeight};
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
    color: #dedede;
  }
`

const Header = () => (
  <Wrapper align="middle">
    <Particles height={headerHeight} />
    <Column>
      <Avatar />
      <h1>Henning Ofstad</h1>
      <p>Engineer</p>
    </Column>
  </Wrapper>
)

export default Header
