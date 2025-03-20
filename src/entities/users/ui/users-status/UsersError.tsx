import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";
import { TextColors } from "@/shared/ui/text/types";
import { Button } from "@/shared/ui/button/Button";
import ErrorImage from "@/shared/images/flying-saucer.png";
import { StatusContainer, StatusTextContainer } from "./UsersStatus.styles";

export const UsersError = () => {
  const handleTryAgain = () => window.location.reload();

  return (
    <StatusContainer>
      <img src={ErrorImage} alt="Ошибка" />
      <StatusTextContainer>
        <Heading as="h3">Какой-то сверхразум все сломал</Heading>
        <Text $color={TextColors.secondary}>Постараемся быстро починить</Text>
        <Button onClick={handleTryAgain} variant="text">
          Попробовать снова
        </Button>
      </StatusTextContainer>
    </StatusContainer>
  );
};
