/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
import './ProfileInformationStyle.css';
import { TextareaAutosize, Button, Box } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { VscAdd } from 'react-icons/vsc';
import Box1 from '../ActionComponents.jsx/Box1';
import Box2 from '../ActionComponents.jsx/Box2';
import Box4 from '../ActionComponents.jsx/Box4';
import Box5 from '../ActionComponents.jsx/Box5';
import Box6 from '../ActionComponents.jsx/Box6';
import Box7 from '../ActionComponents.jsx/Box7';
import Box8 from '../ActionComponents.jsx/Box8';
import Box9 from '../ActionComponents.jsx/Box9';
import Box10 from '../ActionComponents.jsx/Box10';
import Box11 from '../ActionComponents.jsx/Box11';
import Box12 from '../ActionComponents.jsx/Box12';
import Box13 from '../ActionComponents.jsx/Box13';
import Box14 from '../ActionComponents.jsx/Box14';
import Box15 from '../ActionComponents.jsx/Box15';
import Box16 from '../ActionComponents.jsx/Box16';
import Box17 from '../ActionComponents.jsx/Box17';
import Box18 from '../ActionComponents.jsx/Box18';
import Box19 from '../ActionComponents.jsx/Box19';
import Box20 from '../ActionComponents.jsx/Box20';
import Box21 from '../ActionComponents.jsx/Box21';
import Box23 from '../ActionComponents.jsx/Box23';
import Box24 from '../ActionComponents.jsx/Box24';
import Box25 from '../ActionComponents.jsx/Box25';
import Box26 from '../ActionComponents.jsx/Box26';
import Box27 from '../ActionComponents.jsx/Box27';
import Box28 from '../ActionComponents.jsx/Box28';
import { UpdateSettings } from '../../../store/slices/Settings';

/**
 * @param {object} settings
 */

/**
 * this is component in profile information page
 * it contains the features : display name, about, social links
 */

function ProfileInformation({ settings }) {
  const dispatch = useDispatch();
  const maxTextCount = 30;
  const maxTextCharCount = 200;
  const [isShownAdd, setIsShownAdd] = useState(false);
  const [numCom, setNumCom] = useState();
  const handleClickAdd = () => {
    setIsShownAdd(true);
  };
  const [isShownComp, setIsShownComp] = useState(false);
  const [countText, setCountText] = useState(maxTextCount);
  const [countChar, setCountChar] = useState(maxTextCharCount);
  const handleChangeNameDisply = (e) => {
    dispatch(UpdateSettings({ displayName: e.target.value }));
    setCountText(maxTextCount - e.target.value.length);
  };
  const handleChangeAbout = (e) => {
    dispatch(UpdateSettings({ about: e.target.value }));
    setCountChar(maxTextCharCount - e.target.value.length);
  };
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
              data-testid="display-cont"
              className="box"
              style={{ marginTop: 0 }}
            >
              <input
                placeholder="Display name (optional)"
                maxLength={maxTextCount}
                type="text"
                className="input-1"
                value={settings.displayName}
                onChange={handleChangeNameDisply}
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
          data-testid="about-cont"
          placeholder="About(optional)"
          maxLength={maxTextCharCount}
          style={{ width: 685, height: 100 }}
          className="input-2"
          value={settings.about}
          onChange={handleChangeAbout}
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
              data-testid="social-btn"
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
              setNumCom={setNumCom}
            />
          )}
          {isShownComp && numCom === 1 && (
            <Box2
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 2 && (
            <Box4
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 3 && (
            <Box5
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 4 && (
            <Box6
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 5 && (
            <Box7
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 6 && (
            <Box8
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 7 && (
            <Box9
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 8 && (
            <Box10
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 9 && (
            <Box11
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 10 && (
            <Box12
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 11 && (
            <Box13
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 12 && (
            <Box14
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 13 && (
            <Box15
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 14 && (
            <Box16
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 15 && (
            <Box17
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 16 && (
            <Box18
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 17 && (
            <Box19
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 18 && (
            <Box20
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 19 && (
            <Box21
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 20 && (
            <Box23
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 21 && (
            <Box24
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 23 && (
            <Box25
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 24 && (
            <Box26
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 25 && (
            <Box27
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
          {isShownComp && numCom === 26 && (
            <Box28
              setIsShownAdd={setIsShownAdd}
              setIsShownComp={setIsShownComp}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default ProfileInformation;
