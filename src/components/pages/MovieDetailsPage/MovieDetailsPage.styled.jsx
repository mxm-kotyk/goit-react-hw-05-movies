import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 1rem 1rem;
`;

export const StyledLink = styled(Link)`
  padding: 0.5rem 0.75rem;
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
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const BackLink = styled(StyledLink)`
  position: absolute;
  top: 16px;
  left: 270px;
  padding: 0.75rem 1rem;
`;

export const MovieWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Poster = styled.img`
  display: block;
  width: 500px;
  height: 100%;
`;

export const Text = styled.span`
  font-weight: 700;
`;

export const PosterPlaceholder = styled.div`
  min-width: 500px;
  aspect-ratio: 0.67;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
  border: 1px solid rgb(5, 10, 24);
`;
