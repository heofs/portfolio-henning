import styled from 'styled-components'
import { breakpoints } from 'constants/theme'

export const Container = styled.div`
  margin: 0 1em;

  @media (min-width: ${breakpoints.md}) {
    margin: auto;
    max-width: 700px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`

export default Container
