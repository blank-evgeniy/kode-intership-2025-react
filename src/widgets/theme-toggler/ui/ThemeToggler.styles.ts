import styled from "styled-components";

export const StyledThemeToggler = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 8px;
  color: var(--text-main);

  &:hover {
    color: var(--accent-color);
  }
`;
