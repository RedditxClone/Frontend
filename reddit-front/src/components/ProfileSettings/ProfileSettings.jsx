/* eslint-disable linebreak-style */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './ProfileSettingsStyle.css';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import Images from './Images/Images';
import ProfileCategory from './ProfileCategory/ProfileCategory';
import Advanced from './Advanced/Advanced';
import ProfileModeration from './ProfileModeration/ProfileModeration';
import { getSettings } from '../../store/slices/Settings';

export default function ProfileSettings() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSettings());
  }, []);
  const { settings } = useSelector((state) => state.settings);
  return (
    <div className="profile-settings">
      <h2 className="h2">Customize profile</h2>
      <ProfileInformation settings={settings} />
      <Images />
      <ProfileCategory settings={settings} />
      <Advanced settings={settings} />
      <ProfileModeration />
    </div>
  );
}
