import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 35px;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  gap: 4px;
  align-items: flex-end;
  padding: 4px 0;
  text-decoration: none;
  color: #000000;

  &:hover,
  &:focus {
    color: #f6b26b;
  }

  &.active {
    color: #bf9000;
  }
`;
