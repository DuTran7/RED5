export const convertNumberToMoneyByCurrency = (price = 0) => {
  return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
