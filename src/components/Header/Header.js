import React from 'react'
import styled from 'styled-components/macro'

import {COLORS, WEIGHTS} from '../../constants'
import LogoComponent from '../Logo'
import SuperHeader from '../SuperHeader'

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Logo />
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
      </MainHeader>
    </header>
  )
}

const Logo = styled(LogoComponent)``

const MainHeader = styled.div`
  padding: 26px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  justify-content: center;
  position: relative;

  ${Logo} {
    position: absolute;
    top: 21px;
    left: 32px;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 48.6%;
  align-self: center;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`

export default Header
