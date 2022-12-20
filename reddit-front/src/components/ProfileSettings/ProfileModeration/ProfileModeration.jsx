/* eslint-disable linebreak-style */
import './ProfileModerationStyle.css';
import { Link } from 'react-router-dom';

export default function ProfileModeration() {
  return (
    <div className="profile-mod">
      <h3 className="main-h3">Profile Moderation</h3>
      <div className="ctn-div">
        <p className="pm-h3">For moderation tools please visit our</p>
        <Link
          href="##"
          style={{ color: '#0079d3' }}
        >
          Profile Moderation page
        </Link>
      </div>
    </div>
  );
}
