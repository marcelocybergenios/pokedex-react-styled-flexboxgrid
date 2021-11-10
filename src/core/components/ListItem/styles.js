import styled from "styled-components";

export const ItemContainer = styled.li`
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #282c34;
  cursor: pointer;
  &:hover {
    background-color: #666;
  }
`;

export const PokemonImage = styled.img`
  width: 72px;
  height: 72px;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: white;
  font-size: 0.8rem;
  text-transform: capitalize;
`;
