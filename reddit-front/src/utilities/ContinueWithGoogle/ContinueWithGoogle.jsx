// import React from 'react';

import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import GeneralButton from './GeneralButton';
import continueWithGoogle from '../../services/requests/continueWithGoogle';
import ErrorMessage from '../CustomStyling/CustomStyling';

const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID;
// const GOOGLE_SECRET = process.env.REACT_APP_GOOGLE_SECRET;
function ContinueWithGoogle() {
  const navigate = useNavigate();
  const [unAuthorized, setUnAuthorized] = useState(false);
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: GOOGLE_ID,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = async (res) => {
    const userData = await continueWithGoogle(res.tokenObj.id_token);
    if (userData) {
      setUnAuthorized(false);
      navigate('/');
    } else {
      setUnAuthorized(true);
    }
  };
  const onFailure = (err) => {
    console.log('failed:', err);
  };
  return (
    <>
      {' '}
      <GoogleLogin
        clientId={GOOGLE_ID}
        render={(renderProps) => (
          <GeneralButton
            onClick={renderProps.onClick}
            text="Continue With Google"
            icon={<FcGoogle size={25} />}
          />
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        isSignedIn={false}
      />
      {unAuthorized && <ErrorMessage>Error in authorization</ErrorMessage>}
    </>
  );
}
export default ContinueWithGoogle;
