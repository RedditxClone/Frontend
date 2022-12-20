import StyledTextField from './InfoIput.style';

/**
 * @description This component is resposinble for styling mui input
 * @param {number} len  to set width of input
 * @param {string} label to set label of input
 * @returns {React.Component} styled input field
 */
function InfoInput({ len, label }) {
  return <StyledTextField label={label} len={len} />;
}

export default InfoInput;
