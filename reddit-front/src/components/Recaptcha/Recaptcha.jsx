import ReCAPTCHA from 'react-google-recaptcha';

/**
 * @description Recaptcha is a component from googl to check if you are a robot or not
 * @param {propType} props this props contains a function that set a boolean value
 *  indicates that the recaptcha returned successfully
 * @returns Google Recaptcha component
 */

function Recaptcha(props) {
  /**
   * @description The handler for changing the recaptch state,
   * it set the props from the parent depending on the value of the recaptcha
   * @param {token} value
   */
  const onChange = (value) => {
    if (value) props.setRecaptch(true);
    else props.setRecaptch(false);
  };
  return (
    <ReCAPTCHA
      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
      onChange={onChange}
    />
  );
}

export default Recaptcha;
