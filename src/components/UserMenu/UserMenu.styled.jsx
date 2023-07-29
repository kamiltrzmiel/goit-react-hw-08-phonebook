import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const User = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const Btn = styled.button`
  cursor: pointer;

  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 80px;
  height: 35px;
  padding: 2px 8px;

  color: #fff;
  background-color: #008b8b;
  font-size: 14px;
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
