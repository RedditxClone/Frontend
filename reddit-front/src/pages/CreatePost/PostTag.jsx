/* eslint-disable object-curly-newline */
import { styled } from '@mui/material';

function PostTag({
  icon1,
  icon2,
  bgColor1,
  bgColor2,
  text,
  active,
  setActive
}) {
  const onClickHandler = () => {
    setActive((prev) => !prev);
  };
  return (
    <TagButton
      active={active}
      bgColor1={bgColor1}
      bgColor2={bgColor2}
      onClick={onClickHandler}
    >
      <span style={{ marginRight: '3px' }}>{active ? icon1 : icon2}</span>
      <span>{text}</span>
    </TagButton>
  );
}

const TagButton = styled('button')(({ active, bgColor1, bgColor2 }) => ({
  backgroundColor: active ? bgColor2 : bgColor1,
  color: active ? '#fff' : '#878A8C',
  border: '1px solid #878A8C',
  borderRadius: '2rem',
  padding: '4px 16px',
  margin: '0.5rem',
  textTransform: 'capitalize',
  alignSelf: 'flex-end'
}));
export default PostTag;
