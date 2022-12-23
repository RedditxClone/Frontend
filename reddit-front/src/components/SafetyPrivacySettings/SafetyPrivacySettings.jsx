/* eslint-disable linebreak-style */
import './SafetyPrivacySettingsStyle.css';
import { Link } from 'react-router-dom';
import Safety from './Safety/Safety';
import Privacy from './Privacy/Privacy';
import AdvancedSecurity from './AdvancedSecurity/AdvancedSecurity';

/**
 * This component is main component of Safety & Privace Settings page
 */

function SafetyPrivacySettings() {
  return (
    <div
      className="safety-privacy"
      data-testid="safety-settings-container"
    >
      <h2 className="h2">Safety & Privacy</h2>
      <p
        className="p"
        style={{ width: '95%' }}
      >
        Manage how we use data to personalize your Reddit experience, and
        control how other redditors interact with you. To learn more, visit our
        <Link
          to="##"
          style={{ color: '#0079d3', textDecoration: 'none' }}
        >
          {' '}
          Privacy & Security FAQs.
        </Link>
      </p>
      <Safety />
      <Privacy />
      <AdvancedSecurity />
    </div>
  );
}
export default SafetyPrivacySettings;
