import styled from "styled-components";

export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--input-placeholder);

  aspect-ratio: 1/1;

  &:hover {
    color: var(--accent-color);
  }
`;

export const TextButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--accent-color);

  font-size: 16px;
  font-weight: 600;
  line-height: 20px;

  &:hover {
    opacity: 0.8;
  }
`;
