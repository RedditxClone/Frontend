/* eslint-disable linebreak-style */
import './ProfileSettingsStyle.css';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import Images from './Images/Images';
import ProfileCategory from './ProfileCategory/ProfileCategory';
import Advanced from './Advanced/Advanced';
import ProfileModeration from './ProfileModeration/ProfileModeration';

export default function ProfileSettings() {
  return (
    <div className="profile-settings">
      <h2 className="h2">Customize profile</h2>
      <ProfileInformation />
      <Images />
      <ProfileCategory />
      <Advanced />
      <ProfileModeration />
    </div>
  );
}
