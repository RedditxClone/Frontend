import api from './api';

const continueWithGithub = async (code) => {
  const GITHUB_ID = process.env.REACT_APP_GITHUB_ID;
  const GITHUB_SECRET = process.env.REACT_APP_GITHUB_SECRET;
  const response = await api.post(
    'https://github.com/login/oauth/access_token',
    {
      client_id: GITHUB_ID,
      client_secret: GITHUB_SECRET,
      code
    },
    {
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      }
    }
  );
  console.log(response);
};
export default continueWithGithub;
