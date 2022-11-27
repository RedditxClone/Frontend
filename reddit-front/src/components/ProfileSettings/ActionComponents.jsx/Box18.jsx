/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-wrap-multilines */
import { Button } from '@mui/material';
import './ActionComponents.css';
// import '../../../assets/images/imgsFile';
import { MdArrowBack } from 'react-icons/md';
import { useState } from 'react';
import cashApp from '../../../assets/Images/cash_app.png';

export default function Box18({ setIsShownComp, setIsShownAdd }) {
  const [inpCount, setInpCount] = useState();
  const handleChange = (e) => {
    setInpCount(e.target.value.length);
  };
  const handleClickBack = () => {
    const ele = document.getElementById('confg18');
    ele.style.display = 'none';
    ele.style.visibility = 'hidden';
    setIsShownComp(false);
    setIsShownAdd(true);
  };
  return (
    <div
      className="box2"
      id="confg18"
      style={{ height: '200px' }}
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
              inpCount > 0
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
              src={cashApp}
              alt="cashApp"
            />
          }
        >
          Cash App
        </Button>
        <form className="form">
          <input
            placeholder="@username"
            className="inp1"
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}
