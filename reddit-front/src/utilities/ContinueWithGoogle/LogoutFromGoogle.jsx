import { GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID;
// const GOOGLE_SECRET = process.env.REACT_APP_GOOGLE_SECRET;
function LogoutFromGoogle() {
  // const navigate = useNavigate();
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
    console.log(res);
  };
  const onFailure = (err) => {
    console.log('failed:', err);
  };
  return (
    <GoogleLogout
      id="google-logout-btn"
      clientId={GOOGLE_ID}
      onLogoutSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
}
export default LogoutFromGoogle;
