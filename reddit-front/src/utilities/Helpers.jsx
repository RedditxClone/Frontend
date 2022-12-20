/* eslint-disable operator-linebreak */
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

export const checkEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};
