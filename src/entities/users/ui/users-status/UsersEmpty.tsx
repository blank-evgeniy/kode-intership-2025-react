import { Heading } from "@/shared/ui/heading/Heading";
import { StatusContainer, StatusTextContainer } from "./UsersStatus.styles";
import { Text } from "@/shared/ui/text/Text";
import { TextColors } from "@/shared/ui/text/types";
import EmptyImage from "@/shared/images/left-pointing-magnifying-glass.png";

export const UsersEmpty = () => {
  return (
    <StatusContainer>
      <img src={EmptyImage} alt="Пусто" />
      <StatusTextContainer>
        <Heading as="h3">Мы никого не нашли</Heading>
        <Text $color={TextColors.secondary}>
          Попробуй скорректировать запрос
        </Text>
      </StatusTextContainer>
    </StatusContainer>
  );
};
