import React from 'react'
import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import 'styles/index.css'

const Wrapper = styled.div`
  margin: 0 auto;
  /* max-width: 55em; */
  /* padding: 0 1.0875rem 1.45rem; */
  padding: 0;
  background-color: rgb(247, 245, 245);
`
const Main = styled.main``

const Footer = styled.footer`
  color: black;
  margin: 1em;
  padding-bottom: 1em;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
      <Footer>© {new Date().getFullYear()}, Built by H. Ofstad</Footer>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
