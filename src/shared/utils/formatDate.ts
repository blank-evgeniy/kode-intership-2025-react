import { Language } from "../types";

//TODO: move months to constants

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

const shortRuMonths = [
  "янв",
  "фев",
  "мар",
  "апр",
  "май",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];

const shortEnMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (
  date: Date,
  language: Language = "ru",
  short = false
) => {
  const day = date.getDate();
  let month = "";

  if (short) {
    month =
      language === "ru"
        ? shortRuMonths[date.getMonth()]
        : shortEnMonths[date.getMonth()];
    return `${day} ${month}`;
  } else {
    month =
      language === "ru" ? ruMonths[date.getMonth()] : enMonths[date.getMonth()];
  }

  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
