import { useState } from 'react';

/**
 * @typedef {Object} InputStat
 * @property {string} enteredValue - the value entered in the input
 * @property {Function} valueChangeHandler - Function that handles changes to this input
 * @property {boolean} isTouched - To determine if the user has touched this input or not
 * @property {string} enteredValue - the value entered in the input
 * @property {Function} inputBlurHandler - Function that handles when the user leave the input
 * @property {Function} inputFocusHandler - Function that handles focusing on the input
 * @property {Function} reset - Function to reset the input field and its states
 * @property {boolean} hasError - To indicate if the input is invalid
 */

/**
 * This is a custom hook made to deal easily with the inputs
 * @param {Function} validateFn - To determine the validity of the entered value in the input
 * @returns {InputStat}  - state object contains the entered value of the input, bo
 */
function useInput(validateFn) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [hasError, setHasError] = useState(false);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setHasError(!validateFn(enteredValue));
  };

  const inputFocusHandler = () => {
    setIsTouched(true);
    setHasError(!validateFn(enteredValue));
  };

  const inputBlurHandler = () => {
    setHasError(!validateFn(enteredValue));
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    valueChangeHandler,
    isTouched,
    inputBlurHandler,
    inputFocusHandler,
    reset,
    hasError
  };
}

export default useInput;
