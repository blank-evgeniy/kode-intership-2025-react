import styled from "styled-components";

export const DetailsContainer = styled.section`
  padding-top: 8px;

  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const DetailsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 60px;
`;

export const TextWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LinkWithIcon = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;

  color: var(--text-black);

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--accent-color);
  }
`;
