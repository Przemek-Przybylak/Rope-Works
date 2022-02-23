import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0;
`;
export const HeaderBox = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

export const Tile = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  ${({ logo }) =>
    logo &&
    css`
      grid-area: 0/1 / 0/1;
      justify-content: center;
    `};
  ${({ item }) =>
    item &&
    css`
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      justify-content: center;
      align-items: center;
    `};
  ${({ contact }) =>
    contact &&
    css`
      grid-column-start: 7;
      grid-column-end: 9;
      justify-content: center;
    `};
`;
export const Logo = styled.h1`
  font-size: 25px;
  font-weight: 900;
  letter-spacing: 1.5;
`;
