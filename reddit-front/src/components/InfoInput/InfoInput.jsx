import StyledTextField from './InfoIput.style';

export default function InfoInput(props) {
  return <StyledTextField label={props.label} len={props.len} />;
}
