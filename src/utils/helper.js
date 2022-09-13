export const convertNumberToMoneyByCurrency = (price = 0) => {
  return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
export const getInitials = (name = '') =>
  name
    .replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join('');
