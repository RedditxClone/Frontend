/* eslint-disable linebreak-style */
import { Box, Switch } from '@mui/material';
import './PrivacyStyle.css';

export default function Privacy() {
  return (
    <div className="privacy">
      <h3 className="main-h3">Privacy</h3>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">Show up in search results</h3>
          <p className="p">
            Allow search engines like Google to link to your profile in their
            search results.
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">
            Personalize all of Reddit based on the outbound links you click on
          </h3>
          <p className="p">
            Allow us to use the links to other sites you click on for
            operational purposes (that help us better understand how you and
            others use Reddit) and to show you better ads and recommendations.
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">
            Personalize ads based on information from our partners
          </h3>
          <p className="p">
            Allow us to use information that our advertising partners send us to
            show you better ads.
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">
            Personalize ads based on your activity with our partners
          </h3>
          <p className="p">
            Allow us to use your interactions with sites and apps we partner
            with to show you better ads.
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">
            Personalize recommendations based on your general location
          </h3>
          <p className="p">
            Allow us to use your city, state, or country (based on your IP) to
            recommend better posts and communities.
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">
            Personalize recommendations based on your activity with our partners
          </h3>
          <p className="p">
            Allow us to use your interactions with sites and apps we partner
            with to recommend better posts and communities..
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
    </div>
  );
}
