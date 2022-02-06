import styled from "styled-components";

export const Grid = styled.ul`
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export const Tile = styled.li`
  padding: 10px;
  height: 500px;
  background-color: white;
  border-radius: 5%;
`;

export const Poster = styled.div`
  height: 90%;
  background-color: grey;
  border-radius: 5%;
`;

export const Description = styled.div`
  text-align: center;
  padding: 3px;
`;
