import ContentPreferences from './ContentPreferences/ContentPreferences';
import PostPreferences from './PostPreferences/PostPreferences';
import './FeedSettingsStyle.css';

/**
 * This component is main component of Feed Settings page
 */

function FeedSettings() {
  return (
    <div
      className="feed-settings"
      data-testid="feed-settings-container"
    >
      <h2 className="h2">Feed settings</h2>
      <ContentPreferences />
      <PostPreferences />
    </div>
  );
}
export default FeedSettings;
