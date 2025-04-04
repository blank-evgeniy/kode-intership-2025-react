import styled from "styled-components";

export const UserCardContainer = styled.article`
  padding: 6px 0;

  display: flex;
  align-items: center;
  gap: 16px;

  border-radius: 72px;

  cursor: pointer;

  &:hover {
    background-color: var(--background-secondary);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const DateText = styled.span`
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin-left: auto;
  padding-right: 12px;
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-end;
`;
