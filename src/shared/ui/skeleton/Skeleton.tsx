import { StyledSkeleton } from "./Skeleton.styles";

interface SkeletonProps {
  width?: string;
  height?: string;
  radius?: string;
}

export const Skeleton = ({ width, height, radius }: SkeletonProps) => {
  return <StyledSkeleton $width={width} $height={height} $radius={radius} />;
};
