import { useDispatch } from 'react-redux';
import { register } from 'redux/authentication/authOperations';
import { FcAddDatabase} from 'react-icons/fc';
import { Container, Form, FormLabel, FormInput, FormBtn } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const Form = event.currentTarget;
    dispatch(
      register({
        name: Form.elements.name.value,
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
            Username:
            <FormInput type="text" name="name" />
          </FormLabel>
          <FormLabel>
            E-mail:
            <FormInput type="email" name="email" />
          </FormLabel>
          <FormLabel>
            Password:
            <FormInput type="password" name="password" />
          </FormLabel>
          <FormBtn type="submit">
            <FcAddDatabase />
            Register
          </FormBtn>
        </Form>
      </Container>
    </>
  );
};

export default RegisterForm;
