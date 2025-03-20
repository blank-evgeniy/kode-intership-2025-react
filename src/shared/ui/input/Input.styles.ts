import styled from "styled-components";

export const StyledContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 10px;
  padding: 8px 12px;
  border-radius: 16px;
  height: var(--input-height);

  color: var(--input-placeholder);
  background: var(--background-secondary);

  &:has(input:focus) {
    color: var(--input-text);
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;

  caret-color: var(--accent-color);
  color: var(--input-text);

  &::placeholder {
    color: var(--input-placeholder);
  }
`;

export const StyledIconContainer = styled.div`
  height: 24px;
  width: 24px;
`;

export const StyledActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 4px;
  margin-left: auto;
`;
