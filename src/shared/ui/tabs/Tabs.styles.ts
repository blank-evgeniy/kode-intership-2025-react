import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabList = styled.div`
  display: flex;
  overflow-x: auto;
`;

export const Tab = styled.button<{ $isActive: boolean }>`
  padding: 8px 12px;
  height: var(--tab-height);

  background: transparent;
  border: none;
  cursor: pointer;

  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  color: var(--text-secondary);

  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s;

  &:hover {
    color: var(--text-tertiary);
  }

  &:focus {
    color: var(--text-primary);
  }

  ${({ $isActive }) =>
    $isActive &&
    `border-bottom: 2px solid var(--accent-color);
    color: var(--text-primary) !important;`}
`;

export const TabContent = styled.div`
  padding-top: 16px;
`;

export const TabsSeparator = styled.div`
  height: 1px;
  background: var(--separator-color);

  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
`;
