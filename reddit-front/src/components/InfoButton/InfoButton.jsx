import StyledButton from './InfoButton.style';

/**
 * @description This component is resposinble for styling mui button
 * @param {number} len -to set width of button
 * @param {boolean} outlined  boolean to know if the boolean would be outlined or not
 * @param {string} align to know how to align label of the button
 * @param {number} hlen to set the height of the button
 * @param {object} children to set the height of the button
 * @returns {React.Component} styled button
 */
function InfoButton({
  len,
  outlined,
  align,
  hlen,
  children
}) {
  return (
    <StyledButton
      outlined={outlined}
      len={len}
      align={align}
      hlen={hlen}
    >
      {children}
    </StyledButton>
  );
}
// export default function InfoButton(props) {
//   return (
//     <StyledButton
//       outlined={props.outlined}
//       len={props.len}
//       align={props.align}
//       hlen={props.hlen}
//     >
//       {props.children}
//     </StyledButton>
//   );
// }
export default InfoButton;
