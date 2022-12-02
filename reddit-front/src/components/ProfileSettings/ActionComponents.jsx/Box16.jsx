/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-wrap-multilines */
import { Button } from '@mui/material';
import './ActionComponents.css';
// import '../../../assets/images/imgsFile';
import { MdArrowBack } from 'react-icons/md';
import { useState } from 'react';
import discord from '../../../assets/Images/discord.png';

export default function Box16({ setIsShownComp, setIsShownAdd }) {
  const [inpCount1, setInpCount1] = useState();
  const [inpCount2, setInpCount2] = useState();
  const handleClickBack = () => {
    const ele = document.getElementById('confg16');
    ele.style.display = 'none';
    ele.style.visibility = 'hidden';
    setIsShownComp(false);
    setIsShownAdd(true);
  };
  const handleChange1 = (e) => {
    setInpCount1(e.target.value.length);
  };
  const handleChange2 = (e) => {
    setInpCount2(e.target.value.length);
  };
  return (
    <div
      className="box2"
      id="confg16"
    >
      <div className="contain">
        <div className="arrow">
          <MdArrowBack onClick={handleClickBack} />
        </div>
        <div className="div-main-1">Add Social Link</div>
        <div className="icon-1">
          <Button
            className="save"
            variant="outlined"
            style={
              inpCount1 > 0 && inpCount2 > 0
                ? {
                    cursor: 'pointer',
                    backgroundColor: '3293db',
                    filter: 'grayscale(0)'
                  }
                : {}
            }
          >
            Save
          </Button>
        </div>
      </div>
      <div className="ctn">
        <Button
          className="btn1"
          variant="outlined"
          startIcon={
            <img
              src={discord}
              alt="discord"
            />
          }
        >
          Discord
        </Button>
        <form className="form">
          <input
            placeholder="Display text"
            className="inp1"
            onChange={handleChange1}
          />
          <input
            placeholder="https://discord.com"
            className="inp1"
            onChange={handleChange2}
          />
        </form>
      </div>
    </div>
  );
}
