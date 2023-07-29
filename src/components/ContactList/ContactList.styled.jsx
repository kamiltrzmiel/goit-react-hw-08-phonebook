import styled from 'styled-components';

export const ContactsList = styled.ul`
  max-width: 100%;
  width: 720px;

  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #90ee90;
  padding: 2px 16px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: rgb(255, 255, 255) -2px -2px 5px,
      rgba(0, 0, 0, 0.24) 2px 2px 5px;
  }
`;

export const Span = styled.span`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
`;

export const WrapBtn = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const Btn = styled.button`
  cursor: pointer;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 35px;
  padding: 3px 8px;

  color: #fff;
  background-color: #329932;
  font-size: 16px;
  font-weight: 500;

  border: none;
  border-radius: 3px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #010101;
    background-color: #f6b26b;
  }
`;

export const DelBtn = styled.button`
  cursor: pointer;
  display: flex;
  gap: 0px;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 35px;
  padding: 3px 8px;
  color: #fff;
  background-color: #ff3232;
  font-size: 16px;
  font-weight: 500;

  border: none;
  border-radius: 3px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #010101;
    background-color: #f6b26b;
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
  padding-bottom: 20px;
`;

export const ModalForm = styled.form`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const ModalInput = styled.input`
  width: 200px;
  font-size: 14px;
  padding: 4px;
`;

export const ModalLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  font-size: 16px;
  font-weight: 500;
`;

export const WrapModalBtn = styled.div`
  margin-top: 6px;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const ModalBtn = styled.button`
  cursor: pointer;

  width: 80px;
  height: 30px;
  padding: 2px 5px;

  color: #fff;
  background-color: #008b8b;
  font-size: 14px;
  font-weight: 700;

  border: none;
  border-radius: 3px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #010101;
    background-color: #f6b26b
  }
`;
