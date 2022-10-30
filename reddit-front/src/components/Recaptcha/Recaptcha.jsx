import ReCAPTCHA from 'react-google-recaptcha';

function Recaptcha() {
  const onChange = (value) => {
    console.log(value);
  };
  return (
    <ReCAPTCHA
      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
      onChange={onChange}
    />
  );
}

export default Recaptcha;
