import { styled } from 'styled-components';

export const Input = styled.input`
  box-sizing: border-box;
  padding: 0 10px;
  font-family: inherit;
  height: 40px;
  width: 400px;
  border: 1px solid rgb(5, 10, 24);
  border-right: none;
  transition: 0.14s ease-out;

  &:focus-visible {
    outline: 2px solid rgb(5, 10, 24);
  }
`;

export const Button = styled.button`
  padding: 0 16px;
  height: 40px;
  font-family: inherit;
  border: none;
  background-color: rgb(5, 10, 24);
  border: 1px solid rgb(5, 10, 24);
  color: #fff;
  transition: 0.14s ease-out;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background-color: #fff;
    color: rgb(5, 10, 24);
  }
`;
