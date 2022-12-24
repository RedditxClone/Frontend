/* eslint-disable react/jsx-wrap-multilines */
// import { useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import GeneralButton from '../ContinueWithGoogle/GeneralButton';
/**
 * This is a regular button for continue with Github feature
 * @returns {React.Component}
 */
function ContinueWithGoogle() {
  return (
    <GeneralButton
      onClick={() => {
        'github clicked';
      }}
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
