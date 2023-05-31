import { styled } from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:not(:first-child)::before {
    display: block;
    content: '';
    width: 100%;
    height: 3px;
    background-color: rgb(5, 10, 24);
  }
`;

export const Text = styled.span`
  font-weight: 700;
`;
