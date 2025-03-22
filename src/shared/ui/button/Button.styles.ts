import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;

  transition: opacity 0.3s ease, background-color 0.3s ease, color 0.3s ease;
`;

export const IconButton = styled(StyledButton)`
  border: none;
  background: none;
  cursor: pointer;
  color: var(--input-placeholder);

  aspect-ratio: 1/1;

  &:hover {
    color: var(--accent-color);
  }
`;

export const TextButton = styled(StyledButton)`
  border: none;
  background: none;
  cursor: pointer;
  color: var(--accent-color);

  &:hover {
    opacity: 0.8;
  }
`;
