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
} from './styles';

export const Navbar: React.FC<NavbarProps> = ({ title }) => (
  <NavbarContainer>
    <NavbarRow>
      <NavbarTitleContainer>
        <NavbarLogo src={logo} alt="Movie icon" />
        <NavbarTitle>
          {title}
        </NavbarTitle>
      </NavbarTitleContainer>
      <NavbarList>
        <NavbarItem>
          <a href="#/">Watch Later</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#/">Favorites</a>
        </NavbarItem>
      </NavbarList>
    </NavbarRow>
  </NavbarContainer>
);
