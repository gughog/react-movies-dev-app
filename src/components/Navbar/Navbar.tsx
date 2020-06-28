import * as React from 'react';
import logo from 'assets/movie_icon.svg';
import {
  NavbarContainer,
  NavbarRow,
  NavbarList,
  NavbarTitleContainer,
  NavbarTitle,
  NavbarLogo,
  NavbarItem,
  MainNavLink,
  CustomNavLink,
} from './styles';

export const Navbar: React.FC<NavbarProps> = ({ title }) => (
  <NavbarContainer>
    <NavbarRow>
      <MainNavLink to="/">
        <NavbarTitleContainer>
          <NavbarLogo src={logo} alt="Movie icon" />
          <NavbarTitle>
            {title}
          </NavbarTitle>
        </NavbarTitleContainer>
      </MainNavLink>
      <NavbarList>
        <NavbarItem>
          <CustomNavLink to="/watchlist">Watch Later</CustomNavLink>
        </NavbarItem>
        <NavbarItem>
          <CustomNavLink to="/favorites">Favorites</CustomNavLink>
        </NavbarItem>
      </NavbarList>
    </NavbarRow>
  </NavbarContainer>
);
