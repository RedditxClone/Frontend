/* eslint-disable linebreak-style */
import ContentPreferences from './ContentPreferences/ContentPreferences';
import PostPreferences from './PostPreferences/PostPreferences';
import './FeedSettingsStyle.css';

/**
 * this is the feed settings component
 */
function FeedSettings() {
  return (
    <div
      data-testid="feed-settings-container"
      className="feed-settings"
    >
      <h2 className="h2">Feed settings</h2>
      <ContentPreferences />
      <PostPreferences />
    </div>
  );
}
export default FeedSettings;
