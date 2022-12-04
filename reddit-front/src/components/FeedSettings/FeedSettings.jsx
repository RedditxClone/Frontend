/* eslint-disable linebreak-style */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContentPreferences from './ContentPreferences/ContentPreferences';
import PostPreferences from './PostPreferences/PostPreferences';
import './FeedSettingsStyle.css';
import { getSettings } from '../../store/slices/Settings';

export default function FeedSettings() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSettings());
  }, []);
  const { settings } = useSelector((state) => state.settings);
  return (
    <div className="feed-settings">
      <h2 className="h2">Feed settings</h2>
      <ContentPreferences settings={settings} />
      <PostPreferences />
    </div>
  );
}
