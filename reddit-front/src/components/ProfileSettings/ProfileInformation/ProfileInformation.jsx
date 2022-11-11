/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
import './ProfileInformationStyle.css';
import { TextareaAutosize, Button, Box } from '@mui/material';
import { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import Box1 from '../ActionComponents.jsx/Box1';
import Box2 from '../ActionComponents.jsx/Box2';

export default function ProfileInformation() {
  const maxTextCount = 30;
  const maxTextCharCount = 200;
  const [isShownAdd, setIsShownAdd] = useState(false);
  const handleClickAdd = () => {
    setIsShownAdd(true);
  };
  const [isShownComp, setIsShownComp] = useState(false);
  const [countText, setCountText] = useState(maxTextCount);
  const [countChar, setCountChar] = useState(maxTextCharCount);
  // const [iconTitle, setIconTitle] = useState();
  // const [icon, setIcon] = useState();
  return (
    <>
      {(isShownAdd || isShownComp) && <div className="overlay"></div>}
      <div className="main-profile-info">
        <h3 className="main-h3">Profile Information</h3>
        <div className="cont-1">
          <h3 className="h3">Display name (optional)</h3>
          <p className="p">
            Set a display name. This does not change your username.
          </p>
          <div className="cont-2">
            <Box
              className="box"
              style={{ marginTop: 0 }}
            >
              <input
                placeholder="Display name (optional)"
                maxLength={maxTextCount}
                type="text"
                className="input-1"
                onChange={(e) =>
                  setCountText(maxTextCount - e.target.value.length)
                }
              />
            </Box>
            <p className="p">
              {countText}
              <span style={{ marginLeft: '2px' }}>Characters remaining</span>
            </p>
          </div>
        </div>
        <h3 className="h3">About (optional)</h3>
        <p className="p1">
          A brief description of yourself shown on your profile.
        </p>
        <TextareaAutosize
          placeholder="About(optional)"
          maxLength={maxTextCharCount}
          style={{ width: 685, height: 100 }}
          className="input-2"
          onChange={(e) =>
            setCountChar(maxTextCharCount - e.target.value.length)
          }
        />
        <p className="p2">
          {countChar}
          <span style={{ marginLeft: '2px' }}>Characters remaining</span>
        </p>
        <div className="last">
          <h3 className="h3">Social links (5 max)</h3>
          <p
            className="p3"
            style={{ marginBottom: '15px', marginTop: '2px' }}
          >
            People who visit your profile will see your social links.
          </p>
          <Box>
            <Button
              variant="contained"
              startIcon={<VscAdd />}
              onClick={handleClickAdd}
            >
              Add social link
            </Button>
          </Box>
          {isShownAdd && (
            <Box1
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
              // setIconTitle={setIconTitle}
              // setIcon={setIcon}
            />
          )}
          {isShownComp && (
            <Box2
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
        </div>
      </div>
    </>
  );
}
