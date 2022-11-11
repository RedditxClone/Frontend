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
// import '../../../assets/images/imgsFile';
import onlyFans from '../../../assets/images/onlyfans.png';
import custom from '../../../assets/images/custom.png';
import instagram from '../../../assets/images/instagram.png';
import twitter from '../../../assets/images/twitter.png';
import twitch from '../../../assets/images/twitch.png';
import youtube from '../../../assets/images/youtube.png';
import paypal from '../../../assets/images/paypal.png';
import soundCloud from '../../../assets/images/soundcloud.png';
import venmo from '../../../assets/images/venmo.png';
import kofi from '../../../assets/images/kofi.png';
import patreon from '../../../assets/images/patreon.png';
import kickStarter from '../../../assets/images/kickstarter.png';
import discord from '../../../assets/images/discord.png';
import coffee from '../../../assets/images/buy_me_a_coffee.png';
import linkTree from '../../../assets/images/linktree.png';
import reddit from '../../../assets/images/reddit.png';
import subStack from '../../../assets/images/substack.png';
import cameo from '../../../assets/images/cameo.png';
import beacons from '../../../assets/images/beacons.png';
import tiktok from '../../../assets/images/tiktok.png';
import facebook from '../../../assets/images/facebook.png';
import tumblr from '../../../assets/images/tumblr.png';
import spotify from '../../../assets/images/spotify.png';
import cashApp from '../../../assets/images/cash_app.png';
import shopify from '../../../assets/images/shopify.png';

export default function Box1({
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
    >
      <div className="contain">
        <div className="div-main-1">Add Social Link</div>
        <div className="icon-1">
          <CloseIcon onClick={handleClickClose} />
        </div>
      </div>
      <div className="contain-2">
        <Button
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
