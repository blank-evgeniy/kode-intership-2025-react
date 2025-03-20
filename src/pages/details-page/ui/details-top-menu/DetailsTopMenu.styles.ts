import styled from "styled-components";

export const PageTopContainer = styled.section`
  background-color: var(--background-secondary);
  display: flex;
  flex-direction: column;

  padding-bottom: 24px;
  gap: 24px;
`;

export const PageTopBackButton = styled.button`
  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;

  padding: 0 32px;
  color: var(--text-black);

  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    color: var(--background-main);
    background-color: var(--accent-color);
  }
`;

export const PageTopCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 24px;
`;

export const PageTopInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;
`;
