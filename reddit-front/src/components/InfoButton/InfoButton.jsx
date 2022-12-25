import StyledButton from './InfoButton.style';
import Loader from '../Loader/Loader';
/**
 * @description This component is resposinble for styling mui button
 * @param {number} len -to set width of button
 * @param {string} align to know how to align label of the button
 * @param {number} hlen to set the height of the button
 * @param {object} children to set the height of the button
 * @param {string} type the type of the button
 * @param {boolean} disabled to make the button disabled or enabled
 * @returns {React.Component} styled button
 */
function InfoButton({
  len,
  hlen,
  children,
  type,
  disabled,
  loading
}) {
  const bgcolor = disabled
    ? 'nternal-light-dark(rgba(239, 239, 239, 0.3), rgba(19, 1, 1, 0.3));'
    : '#0079d3';
  const color = disabled ? 'rgba(0, 0, 0, 0.26)' : '#fff';
  return (
    <StyledButton
      len={len}
      hlen={hlen}
      type={type}
      bgcolor={bgcolor}
      colortext={color}
      disabled={disabled}
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      {loading ? <Loader /> : children}
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
