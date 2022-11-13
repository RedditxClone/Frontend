/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable comma-dangle */
import CloseIcon from '@mui/icons-material/Close';
// import { Button } from '@mui/material';
import './ActionComponents.css';
import { Button } from '@mui/material';
// import LinkIcon from '@mui/icons-material/Link';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import {
//   FaTiktok,
//   FaReddit,
//   FaTwitch,
//   FaFacebook,
//   FaYoutube,
//   FaTumblrSquare,
//   FaSpotify,
//   FaSoundcloud,
//   FaBraille,
//   FaTree,
//   FaDiscord,
//   FaPatreon,
// } from 'react-icons/fa';
// import { SiKofi } from 'react-icons/si';
// import { IoLogoVenmo } from 'react-icons/io5';
// import { BiDollarCircle } from 'react-icons/bi';
// import { BsPaypal } from 'react-icons/bs';
// import { MdCamera } from 'react-icons/md';
// import '../../../assets/Images/imgsFile';
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

/**
 * @typedef PropType
 * @property {Function} setIsShownAdd
 * @property {Function} setIsShownComp
 */

/**
 * this is the component which appears when we press on add social links button in profile settings
 */

function Box1({
  setIsShownAdd,
  setIsShownComp
  // setIconTitle,
  // setIcon,
}) {
  const handleClickClose = () => {
    const ele = document.getElementById('confg1');
    ele.style.display = 'none';
    ele.style.visibility = 'hidden';
    setIsShownAdd(false);
  };
  const handleClickComp = () => {
    setIsShownComp(true);
    handleClickClose();
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
          onClick={handleClickComp}
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
export default Box1;
