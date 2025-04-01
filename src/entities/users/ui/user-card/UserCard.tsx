import { Avatar } from "@/shared/ui/avatar/Avatar";
import { User } from "../../model/types/type";
import { Heading } from "@/shared/ui/heading/Heading";
import { Link } from "react-router";
import { Text } from "@/shared/ui/text/Text";
import { TextColors } from "@/shared/ui/text/types";
import {
  DateText,
  InfoContainer,
  NameContainer,
  UserCardContainer,
} from "./UserCard.styles";
import { RoutePath } from "@/app/config/routes";
import { generatePath } from "react-router";
import { formatDate } from "@/shared/utils/formatDate";
import { useTranslation } from "react-i18next";
import { Language } from "@/shared/types";

interface UserCardProps {
  user: User;
  showDate?: boolean;
}

export const UserCard = ({ user, showDate }: UserCardProps) => {
  const { i18n } = useTranslation();
  const { avatarUrl, lastName, firstName, userTag, position, birthday } = user;

  return (
    <Link to={generatePath(RoutePath.DETAILS, { id: user.id })}>
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
        <DateText>
          {showDate &&
            formatDate(new Date(birthday), i18n.language as Language, true)}
        </DateText>
      </UserCardContainer>
    </Link>
  );
};
