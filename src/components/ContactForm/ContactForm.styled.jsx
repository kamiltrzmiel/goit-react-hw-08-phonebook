import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding: 30px;
`;

export const FormInput = styled.input`
  width: 300px;
  font-size: 14px;
  padding: 4px;
`;


export const FormBtn = styled.button`
  cursor: pointer;

  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-top: 6px;

  width: 100%;
  max-width: 140px;
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
    background-color: #f6b26b;
  }
`;
