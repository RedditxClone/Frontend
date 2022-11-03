import StyledButton from './InfoButton.style';

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
