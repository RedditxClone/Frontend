import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { VscGear, VscAdd } from 'react-icons/vsc';
import { TbCameraPlus } from 'react-icons/tb';
import { MdOutlineChevronRight } from 'react-icons/md';
import pic from '../../assets/Images/1166721.jpg';
// import {IoAddOutline} from "react-icons/io5";
// import { Button, CardHeader } from '@mui/material';

import {
  SettingsIconDiv,
  UserName,
  CreateAvatar,
  CakeDayTitle,
  CakeDay,
  ProfileImage,
  SocialLinkButton,
  OptionsButton,
  NewPostButton
} from './MyProfileCard.style';

export default function MyProfileCard({
  arr, optionsButtonTitle, socialLinksArray, click
}) {
  return (
    <Card sx={{ width: '31rem', position: 'relative' }}>
      <CardMedia data-testid="communities_card_media" component="img" height="94" image={pic} alt="green iguana" />
      <SettingsIconDiv><TbCameraPlus className="settingsIcon" /></SettingsIconDiv>
      <SettingsIconDiv sx={{ border: '1px solid transparent', top: '10rem' }}><VscGear /></SettingsIconDiv>
      <ProfileImage>
        <img src="https://th.bing.com/th/id/OIP.Rk5ey97iXBm9NABOD_AVkwHaFH?pid=ImgDet&rs=1" alt="trophy" width="80" height="80" />
      </ProfileImage>
      <SettingsIconDiv sx={{ top: '7.5rem', left: '7.5rem' }}><TbCameraPlus className="settingsIcon" /></SettingsIconDiv>
      <UserName>u/Salma_Ragab</UserName>
      <CardContent sx={{ padding: '1.2rem', marginTop: '1.2rem' }}>
        <CreateAvatar>
          Create Avatar
          <MdOutlineChevronRight />
        </CreateAvatar>
        <CakeDayTitle>
          Cake day
        </CakeDayTitle>
        <CakeDay>
          <span>10/10/22</span>
        </CakeDay>
        {socialLinksArray.map((text) => (
          <SocialLinkButton>
            {text}
          </SocialLinkButton>
        ))}
        <SocialLinkButton>
          <VscAdd style={{ fontSize: '2.2rem' }} />
          Add social link
        </SocialLinkButton>
        <NewPostButton>New Post</NewPostButton>
        {arr.map((text) => (

          <OptionsButton>
            {text}
          </OptionsButton>

        ))}

        <OptionsButton
          sx={{
            float: 'right', fontSize: '1.4rem', padding: '0.4rem 1.6rem', marginBottom: '1.8rem'
          }}
          onClick={click}
        >
          {optionsButtonTitle}
        </OptionsButton>
      </CardContent>

    </Card>
  );
}
