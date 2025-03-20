import { Avatar } from "@/shared/ui/avatar/Avatar";
import { User } from "../../model/types/type";
import { Heading } from "@/shared/ui/heading/Heading";
import { Link } from "react-router";
import { Text } from "@/shared/ui/text/Text";
import { TextColors } from "@/shared/ui/text/types";
import {
  InfoContainer,
  NameContainer,
  UserCardContainer,
} from "./UserCard.styles";
import { RoutePath } from "@/app/config/routes";

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  const { avatarUrl, lastName, firstName, userTag, position } = user;

  return (
    <Link to={RoutePath.DETAILS.replace(":id", user.id)}>
      <UserCardContainer>
        <Avatar alt={`${firstName} ${lastName}`} size="md" src={avatarUrl} />

        <InfoContainer>
          <NameContainer>
            <Heading
              style={{ lineHeight: "16px" }}
              as="h4"
            >{`${firstName} ${lastName}`}</Heading>
            <Text $color={TextColors.secondary} $size="14px" $weight="500">
              {userTag}
            </Text>
          </NameContainer>
          <Text $color={TextColors.tertiary}>{position}</Text>
        </InfoContainer>
      </UserCardContainer>
    </Link>
  );
};
