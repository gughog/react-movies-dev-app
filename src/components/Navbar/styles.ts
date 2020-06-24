import styled from 'styled-components';

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
`;

export const NavbarRow = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 1rem 2.5rem;

  background-color: ${({ theme }) => theme.darkDeep};

  @media only screen and (max-width: 526px) {
    flex-direction: column;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  @media only screen and (max-width: 526px) {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const NavbarTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bolder;
`;

export const NavbarLogo = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

export const NavbarItem = styled.li`
  margin-left: 1rem;
  a {
    padding: calc(1.5rem - 0.4rem) 1rem;
    text-decoration: none;
    color: ${({ theme }) => theme.light};

    &:hover {
      border-bottom: 0.2rem solid ${({ theme }) => theme.emphasys};
      background: rgb(246,201,14);
      background: linear-gradient(0deg, rgba(246,201,14,0.24831931063441004) 0%, rgba(80,140,164,0) 100%);
    }

  }
  @media only screen and (max-width: 526px) {
    margin-left: 0;
  }
`;
