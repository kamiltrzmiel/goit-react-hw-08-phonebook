import { Container, NavLinkStyled } from './AuthNav.styled';
import { StyledFcKey, StyledFcAddDatabase } from './AuthNav.styled';
const AuthNav = () => {
  return (
    <Container>
      <NavLinkStyled to="/register">
        <StyledFcAddDatabase/> Register new user
      </NavLinkStyled>
      <NavLinkStyled to="/login">
        <StyledFcKey/>
        User login
      </NavLinkStyled>
    </Container>
  );
};

export default AuthNav;
