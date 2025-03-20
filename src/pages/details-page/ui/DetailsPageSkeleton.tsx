import { ArrowRightIcon } from "@/shared/icons/ArrowRightIcon";
import { Container } from "@/shared/ui/container/Container";
import { useNavigate } from "react-router";
import { StarIcon } from "@/shared/icons/StarIcon";
import { PhoneIcon } from "@/shared/icons/PhoneIcon";
import { Skeleton } from "@/shared/ui/skeleton/Skeleton";
import {
  PageTopBackButton,
  PageTopCard,
  PageTopContainer,
  PageTopInfo,
} from "./details-top-menu/DetailsTopMenu.styles";
import {
  DetailsContainer,
  DetailsItem,
  TextWithIcon,
} from "./user-details-info/UserDetailsInfo.style";

export const DetailsPageSkeleton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <main>
      <PageTopContainer>
        <PageTopBackButton onClick={handleBack}>
          <ArrowRightIcon style={{ paddingTop: "12px" }} />
        </PageTopBackButton>
        <PageTopCard>
          <Skeleton height="104px" width="104px" radius="50%" />

          <PageTopInfo>
            <Skeleton height="28px" width="180px" />
            <Skeleton height="20px" width="120px" />
          </PageTopInfo>
        </PageTopCard>
      </PageTopContainer>

      <Container>
        <DetailsContainer>
          <DetailsItem>
            <TextWithIcon>
              <StarIcon />
              <Skeleton height="16px" width="120px" />
            </TextWithIcon>

            <Skeleton height="16px" width="60px" />
          </DetailsItem>
          <DetailsItem>
            <TextWithIcon>
              <PhoneIcon />
              <Skeleton height="16px" width="120px" />
            </TextWithIcon>
          </DetailsItem>
        </DetailsContainer>
      </Container>
    </main>
  );
};
