export const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = phoneNumber.replace(/D/g, "");

  const areaCode = cleaned.slice(1, 4);
  const firstPart = cleaned.slice(4, 7);
  const secondPart = cleaned.slice(7, 9);
  const thirdPart = cleaned.slice(9, 11);

  return `+7 (${areaCode}) ${firstPart} ${secondPart} ${thirdPart}`;
};
