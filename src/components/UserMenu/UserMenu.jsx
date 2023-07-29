import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { userLogout } from 'redux/authentication/authOperations';
import { FcExport } from 'react-icons/fc';
import { UserContainer, User, Btn } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(userLogout());

  return (
    <UserContainer>
      <User>{user.email}</User>
      <Btn type="button" onClick={handleLogOut}>
        Logout
        <FcExport/>
      </Btn>
    </UserContainer>
  );
};

export default UserMenu;
