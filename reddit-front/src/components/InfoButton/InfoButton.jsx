import StyledButton from './InfoButton.style';

/**
 * @description This component is resposinble for styling mui button
 * @typedef PropType
 * @property {number} len
 * @property {boolean} outlined
 * @property {string} align
 * @property {number} hlen
 */

/**
 *
 * @param {PropType}  props
 */
export default function InfoButton(props) {
  return (
    <StyledButton
      outlined={props.outlined}
      len={props.len}
      align={props.align}
      hlen={props.hlen}
    >
      {props.children}
    </StyledButton>
  );
}
