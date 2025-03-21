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
      const nextBirthday = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
      );

      if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
      }

      return {
        ...user,
        nextBirthdayDate: nextBirthday,
      };
    })
    .sort((a, b) => a.nextBirthdayDate.getTime() - b.nextBirthdayDate.getTime())
    .map((user) => ({
      ...user,
      nextBirthdayYear: user.nextBirthdayDate.getFullYear().toString(),
    }));
};
