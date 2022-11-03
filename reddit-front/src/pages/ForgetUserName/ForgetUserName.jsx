import { Typography } from '@mui/material';
import SideImage from '../../components/SideImage/SideImage';
import InfoInput from '../../components/InfoInput/InfoInput';
import InfoButton from '../../components/InfoButton/InfoButton';
import {
  AllDiv,
  ContentDiv,
  DotDiv
} from '../../components/GlobalStyles/GlobalStyles.style';
import {
  RedditImageDiv,
  DescriptionDiv,
  ForgetFooterDiv
} from './ForgerUserName.style';

export default function ForgetUserName() {
  const outLined = true;
  const len = 36;
  const blen = 100;
  return (
    <AllDiv>
      <SideImage />
      <ContentDiv>
        <RedditImageDiv />
        <Typography variant="h1">Recover your username</Typography>
        <DescriptionDiv>
          <p>
            Tell us the email address associated with your Reddit
            <br />
            account, and we’ll send you an email with your username.
          </p>
        </DescriptionDiv>
        <form action="/forgetusername" method="post">
          <DotDiv>
            <InfoInput id="loginUserEmail" label="email address" len={len} />
            <span className="Dot"> </span>
          </DotDiv>
          <InfoButton outlined={!outLined} len={blen}>EMAIL ME</InfoButton>
          <ForgetFooterDiv>
            <p id="Forget">
              Dont have an email or need assistance logging in?
              <a className="BottomLink" href="https://reddithelp.com/hc/en-us/sections/360008917491-Account-Security"> GET HELP </a>
            </p>
            <p>
              <a className="BottomLink" href=" ">LOG IN .</a>
              <a className="BottomLink" href=" "> SIGN UP</a>
            </p>
          </ForgetFooterDiv>
        </form>
      </ContentDiv>
    </AllDiv>
  );
}
