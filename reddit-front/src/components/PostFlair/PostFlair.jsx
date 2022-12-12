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
  FlairTextColor,
  LastPartAddFlair
  //   SecondRowText,
  //   Flairs
} from './PostFlair.Style';
import DeletePostFlair from './DeletePostFlairCard';
import CancelCard from './CancelCard';
import PostFlairSettingsCard from './PostFlairSettingsCard';

function PostFlair() {
  //   const [AddFlair, setAddFlair] = useState(false);
  const [TextColor, setTextColor] = useState(false);
  const [textbackgroundcolor, setTextBackGroundColor] = useState(false);
  const [TextMessage, setTextMessage] = useState(true);
  const [Remainings, setRemainings] = useState(65);
  const [settingscard, setSettingsCard] = useState(false);

  //   const [deletecard, setDeleteCard] = useState(false);
  const [cancelcard, setCancelCard] = useState(false);

  const clickSettingsHandler = () => {
    const temp = !settingscard;
    setSettingsCard(temp);
  };
  //   const clickDeleteHandler = () => {
  //     const temp = !deletecard;
  //     setDeleteCard(temp);
  //   };
  const cancelHandler = () => {
    const temp = !cancelcard;
    setCancelCard(temp);
  };
  const clickAddFlairHandler = () => {
    const AddTemp = !AddFlair;
    setAddFlair(AddTemp);
  };
  const textBackGroundHandler = (event) => {
    const temp = !textbackgroundcolor;
    setTextBackGroundColor(temp);
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
      const RemainingsTemp = 65;
      setRemainings(RemainingsTemp);
    } else {
      const RemainingsTemp = 65 - event.target.value.length;
      setRemainings(RemainingsTemp);
      //   console.log(RemainingsTemp);
      setTextMessage(false);
    }
  };
  const cancelLogicandler = () => {
    if (Remainings !== 65 || textbackgroundcolor) cancelHandler();
    // console.log('nada');
    // console.log(Remainings);
  };
  const saveFlairHandler = () => {
    console.log('hima');
  };
  return (
    <PostFlairTab>
      <Head>
        <StyledButton
          sx={{ color: '#0079D3' }}
          onClick={clickSettingsHandler}
        >
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
            <StyledTextField
              onChange={textHandler}
              inputProps={{
                maxLength: 65
              }}
              sx={{
                '&.MuiInputBase-root': {
                  fontSize: '3rem'
                }
              }}
            />
            <FirstRowText
              sx={{
                fontSize: '1.2rem',
                color: 'red',
                margin: '0.5rem 0 0.5rem 0'
              }}
            >
              {TextMessage
                ? 'error:text is required'
                : `${Remainings} character is remaining`}
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
            <LastPartAddFlair>
              <StyledButton
                sx={{ color: '#0079D3' }}
                onClick={cancelLogicandler}
              >
                Cancel
              </StyledButton>
              <StyledButton
                sx={{ color: '#FFFFFF', backgroundColor: '#0079D3' }}
                onClick={saveFlairHandler}
                disabled
              >
                Save
              </StyledButton>
            </LastPartAddFlair>
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
      <DeletePostFlair />
      <CancelCard
        opened={cancelcard}
        handleClose={cancelHandler}
      />
      <PostFlairSettingsCard
        opened={settingscard}
        handleClose={clickSettingsHandler}
      />
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
