/* eslint-disable object-curly-newline */
import { styled } from '@mui/material';
import { useState } from 'react';

function PostTag({ icon1, icon2, bgColor1, bgColor2, text }) {
  const [choosed, setChoosed] = useState(false);
  const onClickHandler = () => {
    setChoosed((prev) => !prev);
  };
  return (
    <TagButton
      choosed={choosed}
      bgColor1={bgColor1}
      bgColor2={bgColor2}
      onClick={onClickHandler}
    >
      <span style={{ marginRight: '3px' }}>{choosed ? icon1 : icon2}</span>
      <span>{text}</span>
    </TagButton>
  );
}

const TagButton = styled('button')(({ choosed, bgColor1, bgColor2 }) => ({
  backgroundColor: choosed ? bgColor2 : bgColor1,
  color: choosed ? '#fff' : '#878A8C',
  border: '1px solid #878A8C',
  borderRadius: '2rem',
  padding: '4px 16px',
  margin: '0.5rem',
  textTransform: 'capitalize',
  alignSelf: 'flex-end'
}));
export default PostTag;
