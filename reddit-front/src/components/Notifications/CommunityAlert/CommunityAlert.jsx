/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './CommunityAlertStyle.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function CommunityAlert({ setIsForward }) {
  const handleClickBack = () => {
    setIsForward(false);
  };
  return (
    <div className="community-alert">
      <div className="comm-parent-1">
        <ArrowBackIcon
          className="a-back-icon"
          style={{ marginRight: '5px', cursor: 'pointer', marginLeft: '-4px' }}
          onClick={handleClickBack}
        />
        <h2
          className="com-h2"
          style={{ cursor: 'pointer' }}
          onClick={handleClickBack}
        >
          Back
        </h2>
      </div>
      <h2
        className="com-h2"
        style={{ marginTop: '42px' }}
      >
        Community alerts
      </h2>
      <p
        className="com-alert-p"
        style={{ marginTop: '40px' }}
      >
        You do not have subscribed subreddits.
      </p>
    </div>
  );
}
