import { Language } from "../types";

const ruMonths = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

const enMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const formatDate = (date: Date, language: Language = "ru") => {
  const day = date.getDate();
  const month =
    language === "ru" ? ruMonths[date.getMonth()] : enMonths[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
