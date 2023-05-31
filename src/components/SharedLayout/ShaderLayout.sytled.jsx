import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;

export const NavigationLink = styled(NavLink)`
  padding: 0.75rem 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: rgb(5, 10, 24);
  border: 1px solid rgb(5, 10, 24);
  color: #fff;
  transition: 0.14s ease-out;
  &:hover,
  &:focus-visible {
    background-color: #fff;
    color: rgb(5, 10, 24);
    transform: translate(-0.25rem, -0.25rem);
    box-shadow: 0.25rem 0.25rem 0 rgb(5, 10, 24);
  }
  &.active {
    background-color: rgb(255, 144, 232);
  }
`;
