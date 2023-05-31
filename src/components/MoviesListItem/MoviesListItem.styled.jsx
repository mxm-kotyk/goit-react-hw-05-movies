import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWrapper = styled.div`
  background-color: rgb(5, 10, 24);
  color: #fff;
  border: 1px solid rgb(5, 10, 24);
  transition: 0.14s ease-out;

  &:hover,
  &:focus-visible {
    background-color: #fff;
    color: rgb(5, 10, 24);
    transform: translate(-0.25rem, -0.25rem);
    box-shadow: 0.25rem 0.25rem 0 rgb(5, 10, 24);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  box-sizing: border-box;
  padding: 15px;
`;

export const InfoList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Poster = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const PosterPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
  aspect-ratio: 0.67;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Title = styled.p`
  margin: 0;
`;

export const InfoText = styled.span`
  font-size: 0.8rem;
`;
