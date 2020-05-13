import React from 'react'
import styled from 'styled-components'
import { colors } from 'constants/theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.secondary};
  border-bottom: thin solid ${colors.borderColor};
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 5px -6px #222;
  padding: 1em;
  p {
    margin: 0;
  }
`

export const Bio = () => {
  return <Wrapper>Henn</Wrapper>
}

export default Bio
