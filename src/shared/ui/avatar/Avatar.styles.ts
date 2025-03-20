import styled from "styled-components";
import { AvatarSizes } from "./AvatarSizes";

export const StyledAvatar = styled.img<{ $variant: AvatarSizes }>`
  width: ${(props) => {
    return {
      [AvatarSizes.md]: "72px",
      [AvatarSizes.lg]: "104px",
    }[props.$variant];
  }};

  aspect-ratio: 1/1;

  border-radius: 50%;
  object-fit: cover;
`;
