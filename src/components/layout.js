import React from 'react'
import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import 'styles/index.css'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 55em;
  padding: 0 1.0875rem 1.45rem;
`
const Main = styled.main``

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
      <footer>© {new Date().getFullYear()}, Built by H. Ofstad</footer>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
