import { Skeleton } from "@/shared/ui/skeleton/Skeleton";
import styled from "styled-components";

const UserCardSkeletonContainer = styled.div`
  padding: 6px 0;

  display: flex;
  align-items: center;
  gap: 16px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const UserCardSkeleton = () => {
  return (
    <UserCardSkeletonContainer>
      <Skeleton height="72px" width="72px" />

      <TextContainer>
        <Skeleton height="16px" width="144px" />
        <Skeleton height="12px" width="80px" />
      </TextContainer>
    </UserCardSkeletonContainer>
  );
};
