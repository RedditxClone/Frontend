/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line object-curly-newline
// import { IoPricetagsOutline } from 'react-icons/io5';
import { useState } from 'react';
import {
  StyledButton,
  Head,
  StyledText,
  Body,
  PostFlairTab,
  Content,
  FirstRow,
  //   SecondRowFlairs,
  FirstRowText,
  StyledTextField,
  AddFlairLayout,
  FlairBackGround,
  FlairTextColor
  //   SecondRowText,
  //   Flairs
} from './PostFlair.Style';

function PostFlair() {
  //   const [AddFlair, setAddFlair] = useState(false);
  const [TextColor, setTextColor] = useState(false);
  const [TextMessage, setTextMessage] = useState(true);

  const clickAddFlairHandler = () => {
    const AddTemp = !AddFlair;
    setAddFlair(AddTemp);
  };
  const textBackGroundHandler = (event) => {
    console.log(event.target.value);
  };
  const textColorHandler = () => {
    const ColorTextTemp = !TextColor;
    setTextColor(ColorTextTemp);
  };
  const textHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value === '') {
      setTextMessage(true);
    } else {
      setTextMessage(false);
    }
  };
  return (
    <PostFlairTab>
      <Head>
        <StyledButton sx={{ color: '#0079D3' }}>
          Post flair settings
        </StyledButton>
        <StyledButton>Reorder</StyledButton>
        <StyledButton
          sx={{ color: '#FFFFFF', backgroundColor: '#0079D3' }}
          onClick={clickAddFlairHandler}
        >
          Add flair
        </StyledButton>
      </Head>
      <Body>
        <StyledText sx={{ padding: '1.5rem' }}>Post flair managment</StyledText>
        <Content>
          <FirstRow>
            <FirstRowText sx={{ marginLeft: '3rem' }}>
              POST FLAIR PREVIEW
            </FirstRowText>
            <FirstRowText sx={{ marginLeft: '35rem' }}>CSS CLASS</FirstRowText>
            <FirstRowText sx={{ marginLeft: '8rem' }}>SETTINGS</FirstRowText>
            <FirstRowText sx={{ marginLeft: '30rem' }}>FLAIR ID</FirstRowText>
          </FirstRow>
          <AddFlairLayout>
            <FirstRow
              sx={{
                paddingTop: '2rem',
                fontSize: '1rem',
                color: '#7C7C7C',
                fontWeight: 'bold'
              }}
            >
              FLAIR APPEARANCE
            </FirstRow>
            <FirstRowText
              sx={{
                margin: '0.7rem 0 0.7rem 0',
                fontSize: '1.5rem',
                color: 'black'
              }}
            >
              Flair text
            </FirstRowText>
            <StyledTextField onChange={textHandler} />
            <FirstRowText
              sx={{
                fontSize: '1.2rem',
                color: 'red',
                margin: '0.5rem 0 0.5rem 0'
              }}
            >
              {TextMessage
                ? 'error:text is required'
                : '65 character is remaining'}
            </FirstRowText>
            <FlairBackGround>
              <FirstRowText sx={{ fontSize: '1.5rem', color: 'black' }}>
                Flair background color
              </FirstRowText>
              <input
                type="color"
                id="head"
                name="head"
                onChange={textBackGroundHandler}
              />
            </FlairBackGround>
            <FlairTextColor>
              <FirstRowText sx={{ fontSize: '1.5rem', color: 'black' }}>
                Flair text color
              </FirstRowText>
              <button
                type="button"
                onClick={textColorHandler}
                style={{
                  color: TextColor ? 'white' : 'black',
                  backgroundColor: TextColor ? '#878A8C' : 'white',
                  border: '0.03rem solid #878A8C',
                  borderRadius: '0.2rem'
                }}
              >
                Aa
              </button>
            </FlairTextColor>
          </AddFlairLayout>
          {/* <SecondRowFlairs>
            <Flairs>
              <IoPricetagsOutline size="5rem" />
              <SecondRowText sx={{ fontSize: '2rem' }}>
                you dont have any post flair
              </SecondRowText>
              <SecondRowText>
                Create post flair in your community today
              </SecondRowText>
            </Flairs>
          </SecondRowFlairs> */}
        </Content>
      </Body>
    </PostFlairTab>
  );
}
export default PostFlair;
// {
//   /* <div>
//               <FirstRowText>COPYID</FirstRowText>
//               <FirstRowText>EDIT</FirstRowText>
//             </div> */
// }
// {
//   /* <AddFlairLayout>
//               <FirstRow>FLAIR APPEARANCE</FirstRow>
//               <FirstRow>Flair text</FirstRow>
//               <StyledTextField /> */
// }
// {
//   /* </AddFlairLayout> */
// }
// {
//   /* {AddFlair? */
// }
