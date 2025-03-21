import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StatusContainer = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  opacity: 0;
  animation: ${fadeIn} 0.3s ease-in-out 0.3s forwards;
`;

export const StatusTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;
