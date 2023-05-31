import { styled } from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
  gap: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 15px;
`;

export const CardWrapper = styled.div`
  width: 185px;
  background-color: #fff;
  color: rgb(5, 10, 24);
  border: 1px solid rgb(5, 10, 24);
`;

export const Text = styled.p`
  font-weight: 500;
`;

export const Foto = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const FotoPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 0.67;
`;
