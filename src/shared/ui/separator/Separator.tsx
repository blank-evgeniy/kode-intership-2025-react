import styled from "styled-components";

export const SeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 24x;

  height: 68px;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--separator-color);
`;

export const SeparatorText = styled.span`
  margin: 0 8px;
  color: var(--text-secondary);
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  width: 160px;
  text-align: center;
`;
