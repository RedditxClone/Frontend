import ContentPreferences from './ContentPreferences/ContentPreferences';
import PostPreferences from './PostPreferences/PostPreferences';
import './FeedSettingsStyle.css';

export default function FeedSettings() {
  return (
    <div className="feed-settings">
      <h2 className="h2">Feed settings</h2>
      <ContentPreferences />
      <PostPreferences />
    </div>
  );
}
