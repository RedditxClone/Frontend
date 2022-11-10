import { useState } from 'react';

export default function useInput(validateFn) {
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
