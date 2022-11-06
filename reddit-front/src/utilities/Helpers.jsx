/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/**
 * This function divides the number and gives it the right label.
 * Ex: 532834 = 532.8K, 999 = 999
 * @param {int} number - The number to be divided.
 */
export const divideBigNumber = function divideBigNumber(number) {
  if (number < 1000) return number;
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1).toString().concat(' M');
  }

  return (number / 1000).toFixed(1).toString().concat(' K');
};
