import { CssSize } from "@/shared/types";
import { StyledSkeleton } from "./Skeleton.styles";

interface SkeletonProps {
  width?: CssSize;
  height?: CssSize;
  radius?: CssSize;
}

export const Skeleton = ({ width, height, radius }: SkeletonProps) => {
  return <StyledSkeleton $width={width} $height={height} $radius={radius} />;
};
