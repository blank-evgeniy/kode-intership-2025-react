export const calculateAge = (birthDate: Date) => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  let ageString = `${age} `;
  if (age % 10 === 1 && age % 100 !== 11) {
    ageString += "год";
  } else if (
    age % 10 >= 2 &&
    age % 10 <= 4 &&
    (age % 100 < 10 || age % 100 >= 20)
  ) {
    ageString += "года";
  } else {
    ageString += "лет";
  }

  return ageString;
};
