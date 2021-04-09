import React from 'react';
import styled from '@emotion/styled';

const ErrorText = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
  border-radius: 5px;
`;

const Error = ({ message }) => {
  return <ErrorText>{message}</ErrorText>;
};

export default Error;
