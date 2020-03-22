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
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: flex;
  flex-direction: column; */
`

const StyledCol = styled.div`
  /* background-color: blue; */
  z-index: 2;
  h1 {
  }
`

const Header = () => (
  <Wrapper align="middle">
    <Particles height={headerHeight} />
    <StyledCol>
      <Avatar />
      <h1>Henning Ofstad</h1>
      <p>Engineer</p>
    </StyledCol>
  </Wrapper>
)

export default Header
