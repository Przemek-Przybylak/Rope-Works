import styled from "styled-components";

export const Container = styled.main`
  max-width: 1350px;
  background-color: ${({ theme }) => theme.colors.opacityGrey};
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};
`;
