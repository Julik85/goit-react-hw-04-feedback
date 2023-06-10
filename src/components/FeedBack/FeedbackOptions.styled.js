import styled from '@emotion/styled';

export const ButtonsList = styled.ul`
  display: flex;
  gap: 100px;
  align-items: center;
  justify-content: center;
  padding:50px 0;
`;

export const Button = styled.button`
  padding: 20px;
  background-color: #eae747;
  font-size: 24px;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  border: thick double red;
  &:hover {
    color: blue;
  }
`;