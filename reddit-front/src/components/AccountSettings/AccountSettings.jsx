/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
// import { Container } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import AccountPreference from './AccountPreference/AccountPreference';
import ConnectedAccounts from './ConnectedAccounts/ConnectedAccounts';
import BetaTests from './BetaTests/BetaTests';
import DeleteAccount from './DeleteAccount/DeleteAccount';
import './AccountSettingsStyle.css';

export default function AccountSettings() {
  return (
    <div
      className="account-settings"
      data-testid="account-settings-container"
    >
      <h2 className="h2">Account settings</h2>
      <AccountPreference />
      <ConnectedAccounts />
      <BetaTests />
      <DeleteAccount />
    </div>
  );
}
