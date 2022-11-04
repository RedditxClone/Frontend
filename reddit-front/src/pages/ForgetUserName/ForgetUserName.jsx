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
} from './ForgetUserName.style';

export default function ForgetUserName() {
  const outLined = true;
  const len = 38;
  const blen = 15;
  const dlen = 10;
  const lhlen = 3;
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
            account, and we&#8217;ll send you an email with your username.
          </p>
        </DescriptionDiv>
        <form action="/forgetusername" method="post">
          <DotDiv len={dlen}>
            <InfoInput id="loginUserEmail" label="email address" len={len} />
            <span className="Dot"> </span>
          </DotDiv>
          <InfoButton outlined={!outLined} len={blen} align="center" hlen={lhlen}>EMAIL ME</InfoButton>
          <ForgetFooterDiv>
            <p id="Forget">
              Don&#8217;t have an email or need assistance logging in?
              <a className="BottomLink" href="https://reddithelp.com/hc/en-us/sections/360008917491-Account-Security"> GET HELP </a>
            </p>
            <p>
              <a className="BottomLink" href=" ">
                LOG IN
                <div> .</div>
              </a>
              <a className="BottomLink" href=" "> SIGN UP</a>
            </p>
          </ForgetFooterDiv>
        </form>
      </ContentDiv>
    </AllDiv>
  );
}
