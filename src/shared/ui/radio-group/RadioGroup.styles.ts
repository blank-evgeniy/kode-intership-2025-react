import styled from "styled-components";

export const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioWrapper = styled.label`
  padding: 20px 0;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-black);

  &:hover {
    color: var(--accent-color);
  }
`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--accent-color);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;

  &:checked {
    border-width: 6px;
  }
`;
