/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-wrap-multilines */
import { Button } from '@mui/material';
import './ActionComponents.css';
// import '../../imgs/imgsFile';
import { MdArrowBack } from 'react-icons/md';
import custom from '../../imgs/custom.png';
// import onlyFans from '../../imgs/onlyfans.png';
// import instagram from '../../imgs/instagram.png';
// import twitter from '../../imgs/twitter.png';
// import twitch from '../../imgs/twitch.png';
// import youtube from '../../imgs/youtube.png';
// import paypal from '../../imgs/paypal.png';
// import soundCloud from '../../imgs/soundcloud.png';
// import venmo from '../../imgs/venmo.png';
// import kofi from '../../imgs/kofi.png';
// import patreon from '../../imgs/patreon.png';
// import kickStarter from '../../imgs/kickstarter.png';
// import discord from '../../imgs/discord.png';
// import coffee from '../../imgs/buy_me_a_coffee.png';
// import linkTree from '../../imgs/linktree.png';
// import reddit from '../../imgs/reddit.png';
// import subStack from '../../imgs/substack.png';
// import cameo from '../../imgs/cameo.png';
// import beacons from '../../imgs/beacons.png';
// import tiktok from '../../imgs/tiktok.png';
// import facebook from '../../imgs/facebook.png';
// import tumblr from '../../imgs/tumblr.png';
// import spotify from '../../imgs/spotify.png';
// import cashApp from '../../imgs/cash_app.png';
// import shopify from '../../imgs/shopify.png';

export default function Box2({ setIsShownComp, setIsShownAdd }) {
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
