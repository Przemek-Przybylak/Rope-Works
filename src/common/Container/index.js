import styled from "styled-components";

export const Container = styled.main`
  max-width: 1350px;
  background-color: rgba(50, 50, 50, 0.6);
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};
`;
