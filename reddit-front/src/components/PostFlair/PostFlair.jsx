/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line object-curly-newline
import { IoPricetagsOutline } from 'react-icons/io5';
import { useState, useEffect } from 'react';
// import { Divider } from '@mui/material';
import { AiOutlineDelete } from 'react-icons/ai';
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
  LastPartAddFlair,
  AllFlairs,
  FlairsAction,
  Flairs,
  SecondRowFlairs,
  SecondRowText
  //   SecondRowText,
  //   Flairs
} from './PostFlair.Style';
import DeletePostFlair from './DeletePostFlairCard';
import CancelCard from './CancelCard';
import PostFlairSettingsCard from './PostFlairSettingsCard';
import {
  getFlairs,
  deleteFlair,
  createFlair
} from '../../services/requests/flairs';

function PostFlair({ subredditName }) {
  const [addFlair, setAddFlair] = useState(false);
  const [TextColor, setTextColor] = useState(false);
  const [textbackgroundcolor, setTextBackGroundColor] = useState(false);
  const [TextMessage, setTextMessage] = useState(true);
  const [Remainings, setRemainings] = useState(65);
  const [settingscard, setSettingsCard] = useState(false);
  const [flairs, setFlair] = useState([
    // {
    //   text: 'nada',
    //   backgroundColor: 'red',
    //   textColor: 'green'
    // }
  ]);
  const [flairId, setFlairId] = useState('');
  //   const [deletecard, setDeleteCard] = useState(false);
  const [cancelcard, setCancelCard] = useState(false);
  const [deleteCard, setDeleteCard] = useState(false);

  useEffect(() => {
    // Fetching all the flairs of subreddit
    const fetchFlairs = async () => {
      const results = await getFlairs(subredditName);
      setFlair(results);
    };
    fetchFlairs();
  }, []);

  const clickSettingsHandler = () => {
    const temp = !settingscard;
    setSettingsCard(temp);
  };
  /// /for deletion
  const deleteHandler = (id) => {
    const temp = !deleteCard;
    setDeleteCard(temp);
    setFlairId(id);
  };
  const deleteFlairHandler = () => {
    /// ///request of deletion
    const info = { id: flairId };
    setFlair((current) => current.filter((flair) => flair.id !== flairId));
    deleteFlair(info);
    deleteHandler();
  };

  const clickAddFlairHandler = () => {
    const AddTemp = !addFlair;
    setAddFlair(AddTemp);
  };

  /// /for cancel card
  const cancelHandler = () => {
    const temp = !cancelcard;
    setCancelCard(temp);
  };

  const discardHandler = () => {
    clickAddFlairHandler();
    cancelHandler();
  };
  // create new flair
  const clickSaveFlairHandler = () => {
    const flair = {
      text: document.getElementById('flair_text').value,
      backgroundColor: document.getElementById('flair_background').value,
      textColor: TextColor ? 'white' : 'black'
    };
    setFlair([...flairs, flair]);

    createFlair(
      flair.textColor,
      flair.text,
      flair.backgroundColor,
      subredditName
    );
    clickAddFlairHandler();
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
    else clickAddFlairHandler();
    // console.log('nada');
    // console.log(Remainings);
  };

  const all_Flairs = flairs.map((flair) => (
    <AllFlairs key={flair.id}>
      <p
        style={{
          backgroundColor: flair.backgroundColor,
          color: flair.textColor,
          margin: 0,
          fontSize: '1.3rem',
          padding: '0.2rem',
          borderRadius: '0.2rem',
          marginLeft: '1rem'
        }}
      >
        {flair.text}
      </p>
      <FlairsAction>
        <button
          type="button"
          style={{ color: '#0272C4', fontSize: '1.3rem', margin: '0' }}
        >
          COPYID
        </button>
        <button
          type="button"
          style={{ color: '#0272C4', fontSize: '1.3rem', margin: '0' }}
        >
          EDIT
        </button>
        <button
          type="button"
          style={{ color: '#0272C4', fontSize: '1.3rem', margin: '0' }}
          onClick={() => deleteHandler(thisflair.id)}
        >
          <AiOutlineDelete style={{ color: '#7E8183', fontSize: '2rem' }} />
        </button>
      </FlairsAction>
      {/* <Divider /> */}
    </AllFlairs>
  ));
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
          sx={{
            color: '#FFFFFF',
            backgroundColor: '#0079D3',
            '&.hover:': {
              backgroundColor: addFlair ? '#7E8183' : '',
              color: addFlair ? '#D6D6D6' : ''
            }
          }}
          onClick={clickAddFlairHandler}
          disabled={addFlair}
        >
          Add flair
        </StyledButton>
      </Head>
      <Body>
        <StyledText sx={{ padding: '1.5rem' }}>Post flair managment</StyledText>
        {addFlair || flairs.length ? (
          <Content>
            <FirstRow>
              <FirstRowText sx={{ marginLeft: '3rem' }}>
                POST FLAIR PREVIEW
              </FirstRowText>
              <FirstRowText sx={{ marginLeft: '35rem' }}>
                CSS CLASS
              </FirstRowText>
              <FirstRowText sx={{ marginLeft: '8rem' }}>SETTINGS</FirstRowText>
              <FirstRowText sx={{ marginLeft: '30rem' }}>FLAIR ID</FirstRowText>
            </FirstRow>
            {all_Flairs}
            {addFlair ? (
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
                  id="flair_text"
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
                    id="flair_background"
                    name="flair_background"
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
                      borderRadius: '0.2rem',
                      textTransform: 'none',
                      margin: '0',
                      padding: '0.5rem'
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
                    onClick={clickSaveFlairHandler}
                    // disabled
                  >
                    Save
                  </StyledButton>
                </LastPartAddFlair>
              </AddFlairLayout>
            ) : null}
          </Content>
        ) : null}
        {!addFlair && !flairs.length ? (
          <SecondRowFlairs>
            <Flairs>
              <IoPricetagsOutline size="5rem" />
              <SecondRowText sx={{ fontSize: '2rem' }}>
                you dont have any post flair
              </SecondRowText>
              <SecondRowText>
                Create post flair in your community today
              </SecondRowText>
            </Flairs>
          </SecondRowFlairs>
        ) : null}
      </Body>
      <DeletePostFlair
        opened={deleteCard}
        handleClose={deleteHandler}
        deleteFlair={deleteFlairHandler}
      />
      <CancelCard
        opened={cancelcard}
        handleClose={cancelHandler}
        discard={discardHandler}
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
