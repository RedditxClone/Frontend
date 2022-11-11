import StyledTextField from './LoginInputField.style';

export default function LoginInputField({
  label,
  type,
  onFocus,
  onBlur,
  error,
  onChange,
  value,
  id,
  success
}) {
  return (
    <StyledTextField
      label={label}
      type={type}
      value={value}
      onBlur={onBlur}
      onFocus={onFocus}
      error={error}
      onChange={onChange}
      id={id}
      success={success}
    />
  );
}
