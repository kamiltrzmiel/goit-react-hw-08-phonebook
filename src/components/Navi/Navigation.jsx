import { useAuth } from 'hooks';
import { FcAddressBook, FcHome } from 'react-icons/fc';
import { Nav, NavLinkStyled } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavLinkStyled to="/">
        <FcHome /> Home page
      </NavLinkStyled>

      {isLoggedIn && (
        <NavLinkStyled to="/contacts">
          <FcAddressBook />
          Phonebook
        </NavLinkStyled>
      )}
    </Nav>
  );
};

export default Navigation;
