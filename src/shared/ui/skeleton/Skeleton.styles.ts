import { CssSize } from "@/shared/types";
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
  $width?: CssSize;
  $height?: CssSize;
  $radius?: CssSize;
}>`
  display: inline-block;
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "20px"};
  border-radius: ${({ $radius }) => $radius || "50px"};
  background: linear-gradient(
    270deg,
    var(--skeleton-gradient-to),
    var(--skeleton-gradient-from),
    var(--skeleton-gradient-to)
  );
  background-size: 400% 100%;
  animation: ${skeletonAnimation} 3s infinite linear;
`;
