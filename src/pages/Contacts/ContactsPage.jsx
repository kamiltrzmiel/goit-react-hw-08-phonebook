import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectItems, selectIsLoading, selectError } from 'redux/contacts/selectors';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Container, Message } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Message>No items</Message>
      )}
      {isLoading && !error && <b>Request in progress...</b>}
      {error && error}
    </Container>
  );
};

export default ContactsPage;
