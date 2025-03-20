import styled from "styled-components";

export const ModalWrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export const ModalContent = styled.div`
  position: relative;

  background-color: var(--background-main);
  padding: 24px 16px 8px 16px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  max-width: 90vw;
  max-height: 90vh;
  min-width: 360px;

  overflow-y: auto;
`;

export const StyledModalHeading = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: var(--text-primary);
  text-align: center;
`;

export const CrossButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;

  border-radius: 50%;
  color: var(--gray-200);
  background: var(--background-secondary);
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
  width: 24px;
`;
