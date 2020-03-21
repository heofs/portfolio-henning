import React from 'react'
import styled from 'styled-components'
import Particles from './particles'
import Avatar from 'components/avatar'
import { Row, Col } from 'antd'

const headerHeight = '20rem'

const Wrapper = styled(Row)`
  /* background-color: red; */
  width: 100%;
  height: ${headerHeight};
  padding: 0;
  /* display: flex;
  flex-direction: column; */
`

const Header = () => (
  <Wrapper align="middle">
    <Col>
      <Particles height={headerHeight} />
      <Avatar />
      <h1>Henning Ofstad</h1>
    </Col>
  </Wrapper>
)

export default Header
