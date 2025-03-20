import styled, { keyframes } from "styled-components";

// Анимация для переливающегося градиента
const skeletonAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
;`;

export const StyledSkeleton = styled.div<{
  $width?: string;
  $height?: string;
  $radius?: string;
}>`
  display: inline-block;
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "20px"};
  border-radius: ${({ $radius }) => $radius || "50px"};
  background: linear-gradient(270deg, #f3f3f6, #fafafa, #f3f3f6);
  background-size: 400% 100%;
  animation: ${skeletonAnimation} 3s infinite linear;
`;
