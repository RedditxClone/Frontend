/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-wrap-multilines */
import { Button } from '@mui/material';
import './ActionComponents.css';
// import '../../../assets/images/imgsFile';
import { MdArrowBack } from 'react-icons/md';
import custom from '../../../assets/Images/custom.png';
// import onlyFans from '../../../assets/images/onlyfans.png';
// import instagram from '../../../assets/images/instagram.png';
// import twitter from '../../../assets/images/twitter.png';
// import twitch from '../../../assets/images/twitch.png';
// import youtube from '../../../assets/images/youtube.png';
// import paypal from '../../../assets/images/paypal.png';
// import soundCloud from '../../../assets/images/soundcloud.png';
// import venmo from '../../../assets/images/venmo.png';
// import kofi from '../../../assets/images/kofi.png';
// import patreon from '../../../assets/images/patreon.png';
// import kickStarter from '../../../assets/images/kickstarter.png';
// import discord from '../../../assets/images/discord.png';
// import coffee from '../../../assets/images/buy_me_a_coffee.png';
// import linkTree from '../../../assets/images/linktree.png';
// import reddit from '../../../assets/images/reddit.png';
// import subStack from '../../../assets/images/substack.png';
// import cameo from '../../../assets/images/cameo.png';
// import beacons from '../../../assets/images/beacons.png';
// import tiktok from '../../../assets/images/tiktok.png';
// import facebook from '../../../assets/images/facebook.png';
// import tumblr from '../../../assets/images/tumblr.png';
// import spotify from '../../../assets/images/spotify.png';
// import cashApp from '../../../assets/images/cash_app.png';
// import shopify from '../../../assets/images/shopify.png';

/**
 * @typedef PropType
 * @property {Function} setIsShownComp
 * @property {Function} setIsShownAdd
 */

/**
 * this is the component which appears when we click on any component in box-1 profile settings
 */

function Box2({ setIsShownComp, setIsShownAdd }) {
  const handleClickBack = () => {
    const ele = document.getElementById('confg2');
    ele.style.display = 'none';
    ele.style.visibility = 'hidden';
    setIsShownComp(false);
    setIsShownAdd(true);
  };
  return (
    <div
      className="box2"
      id="confg2"
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
              src={custom}
              alt="custom"
            />
          }
        >
          custom URL
        </Button>
        <form className="form">
          <input
            placeholder="Display text"
            className="inp1"
          />
          <input
            placeholder="https://website.com"
            className="inp1"
          />
        </form>
      </div>
    </div>
  );
}
export default Box2;
