import { User } from "../model/types/type";

export interface UserWithNextBirthdayYear extends User {
  nextBirthdayYear: string;
}

export const sortUsersByBirthday: (
  users: User[]
) => UserWithNextBirthdayYear[] = (users) => {
  const today = new Date();

  return [...users]
    .map((user) => {
      const birthDate = new Date(user.birthday);

      birthDate.setFullYear(today.getFullYear());

      if (birthDate < today) {
        birthDate.setFullYear(today.getFullYear() + 1);
      }

      return {
        ...user,
        nextBirthdayYear: birthDate.getFullYear().toString(),
      };
    })
    .sort((a, b) => a.nextBirthdayYear.localeCompare(b.nextBirthdayYear));
};
