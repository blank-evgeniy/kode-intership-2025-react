import {
  Separator,
  SeparatorContainer,
  SeparatorText,
} from "@/shared/ui/separator/Separator";

import { UserCard } from "./UserCard";
import { UserWithNextBirthdayYear } from "../../lib/sortUsersByBirthday";

export const UserCardsWithSeparator = ({
  users,
}: {
  users: UserWithNextBirthdayYear[];
}) => {
  const currentYear = new Date().getFullYear().toString();

  const usersWithBirthdayThisYear = users.filter(
    (user) => user.nextBirthdayYear === currentYear
  );
  const usersWithBirthdayNextYear = users.filter(
    (user) => user.nextBirthdayYear !== currentYear
  );

  return (
    <>
      {usersWithBirthdayThisYear.map((user) => (
        <UserCard showDate user={user} key={user.id} />
      ))}
      {usersWithBirthdayThisYear.length > 0 &&
        usersWithBirthdayNextYear.length > 0 && (
          <SeparatorContainer>
            <Separator />
            <SeparatorText>{`${+currentYear + 1}`}</SeparatorText>
            <Separator />
          </SeparatorContainer>
        )}
      {usersWithBirthdayNextYear.map((user) => (
        <UserCard showDate user={user} key={user.id} />
      ))}
    </>
  );
};
