import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/authentication/authOperations';
import { Link } from 'react-router-dom';
import { FcKey } from 'react-icons/fc';
import { Container, Form, FormLabel, FormInput, FormBtn } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const Form = event.currentTarget;
    dispatch(
      userLogin({
        email: Form.elements.email.value,
        password: Form.elements.password.value,
      })
    );
    Form.reset();
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormLabel>
            E-mail:
            <FormInput type="email" name="email" />
          </FormLabel>
          <FormLabel>
            Password:
            <FormInput type="password" name="password" />
          </FormLabel>
          <FormBtn type="submit">
            <FcKey />
            Login
          </FormBtn>
        </Form>
        <p>Don't have a account?
          <Link to="/register">Register</Link>
        </p>
      </Container>
    </>
  );
};

export default LoginForm;
