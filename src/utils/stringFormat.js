export const shortText = (string, number) => {
  return string?.length > number
    ? string?.slice(0, number).concat('...')
    : string;
};
