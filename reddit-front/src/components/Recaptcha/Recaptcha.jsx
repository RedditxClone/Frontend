import ReCAPTCHA from 'react-google-recaptcha';

/**
 * Recaptcha is a component from googl to check if you are a robot or not
 *
 * @returns
 */

function Recaptcha(props) {
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
