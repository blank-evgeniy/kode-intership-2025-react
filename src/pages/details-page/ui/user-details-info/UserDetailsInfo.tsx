import { User } from "@/entities/users/model/types/type";
import { StarIcon } from "@/shared/icons/StarIcon";
import { Text } from "@/shared/ui/text/Text";
import { formatDate } from "@/shared/utils/formatDate";
import { calculateAge } from "@/shared/utils/calculateAge";
import { TextColors } from "@/shared/ui/text/types";
import { formatPhoneNumber } from "@/shared/utils/formatPhoneNumber";
import { PhoneIcon } from "@/shared/icons/PhoneIcon";

import {
  DetailsContainer,
  DetailsItem,
  LinkWithIcon,
  TextWithIcon,
} from "./UserDetailsInfo.style";
import { useTranslation } from "react-i18next";
import { Language } from "@/shared/types";

interface UserDetailsInfoProps {
  user: User;
}

export const UserDetailsInfo = ({ user }: UserDetailsInfoProps) => {
  const { i18n } = useTranslation();

  return (
    <DetailsContainer>
      <DetailsItem>
        <TextWithIcon>
          <StarIcon />
          <Text $weight="500">
            {formatDate(new Date(user.birthday), i18n.language as Language)}
          </Text>
        </TextWithIcon>

        <Text $color={TextColors.tertiary} $weight="500">
          {calculateAge(new Date(user.birthday), i18n.language as Language)}
        </Text>
      </DetailsItem>
      <DetailsItem>
        <LinkWithIcon href={`tel:${user.phone}`}>
          <PhoneIcon />
          {formatPhoneNumber(user.phone)}
        </LinkWithIcon>
      </DetailsItem>
    </DetailsContainer>
  );
};
