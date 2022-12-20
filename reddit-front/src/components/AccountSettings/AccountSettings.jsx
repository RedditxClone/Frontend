/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
// import { Container } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AccountPreference from './AccountPreference/AccountPreference';
import ConnectedAccounts from './ConnectedAccounts/ConnectedAccounts';
import BetaTests from './BetaTests/BetaTests';
import DeleteAccount from './DeleteAccount/DeleteAccount';
import './AccountSettingsStyle.css';
import { getSettings } from '../../store/slices/Settings';

export default function AccountSettings() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSettings());
  }, []);
  const { settings } = useSelector((state) => state.settings);
  return (
    <div className="account-settings">
      <h2 className="h2">Account settings</h2>
      <AccountPreference settings={settings} />
      <ConnectedAccounts />
      <BetaTests />
      <DeleteAccount />
    </div>
  );
}
