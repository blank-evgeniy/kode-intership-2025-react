import { useNavigate } from "react-router";
import { ArrowRightIcon } from "@/shared/icons/ArrowRightIcon";
import { Avatar } from "@/shared/ui/avatar/Avatar";
import { Heading } from "@/shared/ui/heading/Heading";
import { TextColors } from "@/shared/ui/text/types";
import { Text } from "@/shared/ui/text/Text";
import { User } from "@/entities/users/model/types/type";

import {
  PageTopBackButton,
  PageTopCard,
  PageTopContainer,
  PageTopInfo,
} from "./DetailsTopMenu.styles";

interface DetailsTopMenuProps {
  user: User;
}

export const DetailsTopMenu = ({ user }: DetailsTopMenuProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <PageTopContainer>
      <PageTopBackButton onClick={handleBack}>
        <ArrowRightIcon style={{ paddingTop: "12px" }} />
      </PageTopBackButton>
      <PageTopCard>
        <Avatar size="lg" src={user.avatarUrl} />

        <PageTopInfo>
          <Heading as="h1">{`${user.firstName} ${user.lastName}`}</Heading>
          <Text $color={TextColors.tertiary}>{user.position}</Text>
        </PageTopInfo>
      </PageTopCard>
    </PageTopContainer>
  );
};
