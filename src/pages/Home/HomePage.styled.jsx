import styled from 'styled-components';
import telephoneImage from '../../pages/Home/telephone.jpg'
import { FcContacts } from 'react-icons/fc';


export const Wrap = styled.div`
background-image: url(${telephoneImage});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
width: 100%;
height: 100%;
`;


export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #d2f8d2;
  height: 500px;

`;

export const AppName = styled.div`
  font-size: 40px;
  font-weight: 500;
  font-family: 'Helvetica', Arial, sans-serif;
  color: #fff;
  text-align: center;
  margin-top: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const StyledFcContacts = styled(FcContacts)`
  display: block;
  width: 120px;
  height: auto;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 15px
  
`;
