/* eslint-disable prefer-template */
/* eslint-disable consistent-return */
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

/**
 * This function gets the difference of the today with the passes date
 * @param {date} date - The old date
 */
export const getDateDiff = (date) => {
  const today = new Date();
  const old = new Date(date);
  const diffMs = today - old; // milliseconds between now & old
  const diffDays = Math.floor(diffMs / 86400000); // days
  const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
  if (diffDays >= 1) return diffDays.toString() + ' days ago';
  if (diffDays === 0 && diffHrs >= 1) return diffHrs.toString() + ' hours ago';
  if (diffHrs === 0 && diffMins >= 1) {
    return diffDays.toString() + ' minutes ago';
  }
  return ' now';
};
