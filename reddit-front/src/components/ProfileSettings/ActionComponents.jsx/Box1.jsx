/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable comma-dangle */
import CloseIcon from '@mui/icons-material/Close';
// import { Button } from '@mui/material';
import './ActionComponents.css';
import { Button } from '@mui/material';

import onlyFans from '../../../assets/Images/onlyfans.png';
import custom from '../../../assets/Images/custom.png';
import instagram from '../../../assets/Images/instagram.png';
import twitter from '../../../assets/Images/twitter.png';
import twitch from '../../../assets/Images/twitch.png';
import youtube from '../../../assets/Images/youtube.png';
import paypal from '../../../assets/Images/paypal.png';
import soundCloud from '../../../assets/Images/soundcloud.png';
import venmo from '../../../assets/Images/venmo.png';
import kofi from '../../../assets/Images/kofi.png';
import patreon from '../../../assets/Images/patreon.png';
import kickStarter from '../../../assets/Images/kickstarter.png';
import discord from '../../../assets/Images/discord.png';
import coffee from '../../../assets/Images/buy_me_a_coffee.png';
import linkTree from '../../../assets/Images/linktree.png';
import reddit from '../../../assets/Images/reddit.png';
import subStack from '../../../assets/Images/substack.png';
import cameo from '../../../assets/Images/cameo.png';
import beacons from '../../../assets/Images/beacons.png';
import tiktok from '../../../assets/Images/tiktok.png';
import facebook from '../../../assets/Images/facebook.png';
import tumblr from '../../../assets/Images/tumblr.png';
import spotify from '../../../assets/Images/spotify.png';
import cashApp from '../../../assets/Images/cash_app.png';
import shopify from '../../../assets/Images/shopify.png';

export default function Box1({ setIsShownAdd, setIsShownComp, setNumCom }) {
  const handleClickClose = () => {
    const ele = document.getElementById('confg1');
    ele.style.display = 'none';
    ele.style.visibility = 'hidden';
    setIsShownAdd(false);
  };
  const handleClickComp1 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(1);
  };
  const handleClickComp2 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(2);
  };
  const handleClickComp3 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(3);
  };
  const handleClickComp4 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(4);
  };
  const handleClickComp5 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(5);
  };
  const handleClickComp6 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(6);
  };
  const handleClickComp7 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(7);
  };
  const handleClickComp8 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(8);
  };
  const handleClickComp9 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(9);
  };
  const handleClickComp10 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(10);
  };
  const handleClickComp11 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(11);
  };
  const handleClickComp12 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(12);
  };
  const handleClickComp13 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(13);
  };
  const handleClickComp14 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(14);
  };
  const handleClickComp15 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(15);
  };
  const handleClickComp16 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(16);
  };
  const handleClickComp17 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(17);
  };
  const handleClickComp18 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(18);
  };
  const handleClickComp19 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(19);
  };
  const handleClickComp20 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(20);
  };
  const handleClickComp21 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(21);
  };
  const handleClickComp23 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(23);
  };
  const handleClickComp24 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(24);
  };
  const handleClickComp25 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(25);
  };
  const handleClickComp26 = () => {
    setIsShownComp(true);
    handleClickClose();
    setNumCom(26);
  };
  return (
    <div
      className="box1"
      id="confg1"
      data-testid="confirmation-box1"
    >
      <div className="contain">
        <div className="div-main-1">Add Social Link</div>
        <div
          className="icon-1"
          data-testid="close-i"
        >
          <CloseIcon onClick={handleClickClose} />
        </div>
      </div>
      <div className="contain-2">
        <Button
          data-testid="custom-btn"
          onClick={handleClickComp1}
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
        <Button
          onClick={handleClickComp2}
          variant="outlined"
          startIcon={
            <img
              src={reddit}
              alt="reddit"
            />
          }
        >
          Reddit
        </Button>
        <Button
          onClick={handleClickComp3}
          variant="outlined"
          startIcon={
            <img
              src={instagram}
              alt="instagram"
            />
          }
        >
          Instagram
        </Button>
        <Button
          onClick={handleClickComp4}
          variant="outlined"
          startIcon={
            <img
              src={twitter}
              alt="twitter"
            />
          }
        >
          Twitter
        </Button>
        <Button
          onClick={handleClickComp5}
          variant="outlined"
          startIcon={
            <img
              src={tiktok}
              alt="tiktok"
            />
          }
        >
          Tiktok
        </Button>
        <Button
          onClick={handleClickComp6}
          variant="outlined"
          startIcon={
            <img
              src={twitch}
              alt="twitch"
            />
          }
        >
          Twitch
        </Button>
        <Button
          onClick={handleClickComp7}
          variant="outlined"
          startIcon={
            <img
              src={facebook}
              alt="facebook"
            />
          }
        >
          Facebook
        </Button>
        <Button
          onClick={handleClickComp8}
          variant="outlined"
          startIcon={
            <img
              src={youtube}
              alt="youtube"
            />
          }
        >
          Youtube
        </Button>
        <Button
          onClick={handleClickComp9}
          variant="outlined"
          startIcon={
            <img
              src={tumblr}
              alt="tumblr"
            />
          }
        >
          Tumblr
        </Button>
        <Button
          onClick={handleClickComp10}
          variant="outlined"
          startIcon={
            <img
              src={spotify}
              alt="spotify"
            />
          }
        >
          Spotify
        </Button>
        <Button
          onClick={handleClickComp11}
          variant="outlined"
          startIcon={
            <img
              src={soundCloud}
              alt="soundcloud"
            />
          }
        >
          Soundcloud
        </Button>
        <Button
          onClick={handleClickComp12}
          variant="outlined"
          startIcon={
            <img
              src={beacons}
              alt="beacons"
            />
          }
        >
          Beacons
        </Button>
        <Button
          onClick={handleClickComp13}
          variant="outlined"
          startIcon={
            <img
              src={linkTree}
              alt="linktree"
            />
          }
        >
          Linktree
        </Button>
        <Button
          onClick={handleClickComp14}
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
        <Button
          onClick={handleClickComp15}
          variant="outlined"
          startIcon={
            <img
              src={venmo}
              alt="venmo"
            />
          }
        >
          Venmo
        </Button>
        <Button
          onClick={handleClickComp16}
          variant="outlined"
          startIcon={
            <img
              src={cashApp}
              alt="cashapp"
            />
          }
        >
          Cash app
        </Button>
        <Button
          onClick={handleClickComp17}
          variant="outlined"
          startIcon={
            <img
              src={patreon}
              alt="patreon"
            />
          }
        >
          Patreon
        </Button>
        <Button
          onClick={handleClickComp18}
          variant="outlined"
          startIcon={
            <img
              src={kofi}
              alt="kofi"
            />
          }
        >
          Kofi
        </Button>
        <Button
          onClick={handleClickComp19}
          variant="outlined"
          startIcon={
            <img
              src={paypal}
              alt="paypal"
            />
          }
        >
          PayPal
        </Button>
        <Button
          onClick={handleClickComp20}
          variant="outlined"
          startIcon={
            <img
              src={cameo}
              alt="cameo"
            />
          }
        >
          Cameo
        </Button>
        <Button
          onClick={handleClickComp21}
          variant="outlined"
          startIcon={
            <img
              src={onlyFans}
              alt="onlyfans"
            />
          }
        >
          OnlyFans
        </Button>
        <Button
          onClick={handleClickComp23}
          variant="outlined"
          startIcon={
            <img
              src={subStack}
              alt="substack"
            />
          }
        >
          Substack
        </Button>
        <Button
          onClick={handleClickComp24}
          variant="outlined"
          startIcon={
            <img
              src={kickStarter}
              alt="kickstarter"
            />
          }
        >
          Kickstarter
        </Button>
        <Button
          onClick={handleClickComp25}
          variant="outlined"
          startIcon={
            <img
              src={coffee}
              alt="coffee"
            />
          }
        >
          Buy Me a Coffee
        </Button>
        <Button
          onClick={handleClickComp26}
          variant="outlined"
          startIcon={
            <img
              src={shopify}
              alt="shopify"
            />
          }
        >
          Shopify
        </Button>
      </div>
    </div>
  );
}
