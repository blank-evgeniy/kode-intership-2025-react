import { Heading } from "@/shared/ui/heading/Heading";
import styled from "styled-components";

export const HeaderContainer = styled.div<{
  $isOnline?: boolean;
  $showNotification?: boolean;
}>`
  color: var(--white-100);

  ${({ $isOnline }) =>
    $isOnline
      ? "background-color: var(--accent-color);"
      : "background-color: var(--danger-color);"}

  ${({ $showNotification }) =>
    !$showNotification &&
    "background-color: inherit; color: var(--text-primary);"}
`;

export const StyledHeader = styled.header`
  max-width: var(--page-container);

  padding: 16px 16px 12px 16px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 420px) {
    padding: 16px 8px 12px 8px;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const StatusMessage = styled.p`
  max-width: var(--page-container);
  margin: 0 auto;
  padding: 0 8px 12px 8px;

  height: 32px;

  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
`;

export const HeaderHeading = styled(Heading)`
  color: inherit;
`;
