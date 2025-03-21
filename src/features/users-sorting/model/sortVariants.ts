import { SortType } from "@/entities/users";

interface SortVariant {
  value: SortType;
  label: string;
}

export const sortVariants: SortVariant[] = [
  { value: "alphabetical", label: "byAlphabet" },
  { value: "birthday", label: "byBirthday" },
];
