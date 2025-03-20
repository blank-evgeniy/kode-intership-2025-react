import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: var(--page-container);
  margin: 0 auto;
  padding: 16px;

  @media (min-width: 420px) {
    padding: 8px;
  }
`;

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
