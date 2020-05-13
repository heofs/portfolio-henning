import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { sizes, colors } from 'constants/theme'
import Logo from 'images/logo-cloud.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* background-color: black; */
  height: ${sizes.navbarHeight};
  /* justify-content: center; */
`

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 600px;
  max-width: 100%;
  padding: 0 0;
  height: 100%;
`

const Link = styled(GatsbyLink)`
  padding: 1em;
  justify-self: flex-end;
`

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  /* justify-self: start; */
  color: ${colors.dark};
  padding: 0 1em;
  font-size: 1.4em;

  transition: transform 0.1s;
  :hover {
    transform: scale(1.08);
    color: rgb(30, 30, 30);
  }
  svg {
    padding-right: 0.3em;
    height: 1.5em;
  }
`

const Navbuttons = styled.div`
  margin-left: auto;
  display: flex;
`

const NavItemWrapper = styled.div`
  margin: 0 0.5em;
  :hover {
    transform: scale(1.15);
  }
`

const NavItem = ({ children, to, ...otherProps }) => (
  <NavItemWrapper>
    <Link to={to} {...otherProps}>
      {children}
    </Link>
  </NavItemWrapper>
)

export const Navbar = () => {
  return (
    <Wrapper>
      <Content>
        <Brand to={'/'}>
          <Logo />
          Ofstad
        </Brand>
        <Navbuttons>
          <NavItem to={'/'}>Home</NavItem>
          <NavItem to={'/blog'}>Blog</NavItem>
        </Navbuttons>
      </Content>
    </Wrapper>
  )
}

export default Navbar
