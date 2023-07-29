import styled from 'styled-components';
import { FcKey, FcAddDatabase } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 25px;
  
`;
export const StyledFcKey = styled(FcKey)`
  margin-right: 1px;
`
export const StyledFcAddDatabase = styled(FcAddDatabase)`
  margin-right: 1px;
`
export const NavLinkStyled = styled(NavLink)`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 4px 0;
  text-decoration: none;
  color: #000;

  &:hover,
  &:focus {
    color: #f6b26b;
  }

  &.active {
    color: #bf9000;
  }
`;

