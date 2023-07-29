import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact, updateContact } from 'redux/contacts/contactsOperations';
import Modal from '../Modal';
import { FcSettings, FcFullTrash } from 'react-icons/fc';
import {ContactsList, ContactItem, Span, WrapBtn, Btn, DelBtn, ModalForm, ModalLabel, ModalInput, WrapModalBtn, ModalBtn,} from './ContactList.styled';

const ContactList = () => {
  const [subName, setSubName] = useState('');
  const [subNumber, setSubNumber] = useState('');
  const [subId, setSubId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const showModal = (name, number, id) => {
    setSubNumber(number);
    setSubName(name);
    setSubId(id);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    setIsModalOpen(false);
    dispatch(updateContact({ id: subId, name: subName, number: subNumber }));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ContactsList>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <Span> {name}: </Span>
            <Span> {number} </Span>
            <WrapBtn>
              <Btn type="button" onClick={() => showModal(name, number, id)}>
                <FcSettings />
                Edit
              </Btn>
              <DelBtn type="button" onClick={() => handleDeleteContact(id)}>
                <FcFullTrash />
                Delete
              </DelBtn>
            </WrapBtn>
          </ContactItem>
        ))}

        {!filteredContacts?.length && <div>No contacts found.</div>}
      </ContactsList>
      {isModalOpen && (
        <Modal onClose={handleCancel}>
          <ModalForm>
            <ModalLabel>
              Name:
              <ModalInput
                type="text"
                name="name"
                value={subName}
                onChange={event => {
                  setSubName(event.target.value);
                }}
                placeholder='Name'
              />
            </ModalLabel>
            <ModalLabel>
              Number:
              <ModalInput
                type="tel"
                name="number"
                value={subNumber}
                onChange={event => {
                  setSubNumber(event.target.value);
                }}
                placeholder='Number'
              />
            </ModalLabel>
            <WrapModalBtn>
              <ModalBtn type="button" onClick={handleSave}>
                Update
              </ModalBtn>
              <ModalBtn type="button" onClick={handleCancel}>
                Cancel
              </ModalBtn>
            </WrapModalBtn>
          </ModalForm>
        </Modal>
      )}
    </>
  );
};

export default ContactList;
