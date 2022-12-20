/* eslint-disable react/jsx-wrap-multilines */
// import { useEffect } from 'react';
import { useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
// import continueWithGithub from '../../services/requests/continueWithGithub';
import GeneralButton from '../ContinueWithGoogle/GeneralButton';

function ContinueWithGoogle() {
  const GITHUB_ID = process.env.REACT_APP_GITHUB_ID;

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get('code');
    console.log(codeParam);
  }, []);

  const githubClicked = () => {
    // window.location.assign(
    //   `https://github.com/login/oauth/authorize?client_id=${GITHUB_ID}`
    // );
    console.log('github clicked', GITHUB_ID);
  };
  return (
    <GeneralButton
      onClick={githubClicked}
      text="Continue With Github"
      icon={
        <BsGithub
          size={25}
          color="#000"
        />
      }
    />
  );
}
export default ContinueWithGoogle;
