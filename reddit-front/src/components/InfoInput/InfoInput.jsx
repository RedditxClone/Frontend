import StyledTextField from './InfoIput.style';

/**
 * @description This component is resposinble for styling mui input
 * @typedef PropType
 * @property {number} len
 * @property {string} label
 */

/**
 *
 * @param {PropType}  props
 */
export default function InfoInput(props) {
  return <StyledTextField label={props.label} len={props.len} />;
}
