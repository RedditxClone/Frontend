/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */

import { Button, Box } from '@mui/material';
// import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import './DeleteAccount.css';
import { useState } from 'react';
import Box4 from '../ActionComponents/Box4';
import Box5 from '../ActionComponents/Box5';

export default function DeleteAccount() {
  const [isDelete, setIsDelete] = useState(false);
  const handleClickDelete = () => {
    setIsDelete(true);
  };
  const [isShownDelContinue, setIsShownDelContinue] = useState(false);
  return (
    <>
      {(isDelete || isShownDelContinue) && <div className="overlay"></div>}
      <div className="delete-account">
        <h3 className="main-h3">Delete Account</h3>
        <Box className="del">
          <Button
            data-testid="delete-button"
            onClick={handleClickDelete}
            startIcon={<RiDeleteBin5Fill style={{ color: '#ff585b' }} />}
            variant="text"
            style={{ color: '#ff585b' }}
          >
            Delete Account
          </Button>
          {isDelete && (
            <Box4
              setIsDelete={setIsDelete}
              setIsShownDelContinue={setIsShownDelContinue}
            />
          )}
          {isShownDelContinue && (
            <Box5 setIsShownDelContinue={setIsShownDelContinue} />
          )}
        </Box>
      </div>
    </>
  );
}
