import { useState } from "react";
import { StyledAvatar } from "./Avatar.styles";
import { AvatarSizes } from "./AvatarSizes";
import AvatarPlaceholder from "@/shared/images/avatar-placeholder.jpg";

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: AvatarSizes;
}

export const Avatar = ({
  size = AvatarSizes.md,
  src,
  ...props
}: AvatarProps) => {
  const [avatarSrc, setAvatarSrc] = useState(src || AvatarPlaceholder);

  return (
    <StyledAvatar
      $variant={size}
      src={avatarSrc}
      onError={() => setAvatarSrc(AvatarPlaceholder)}
      {...props}
    />
  );
};
