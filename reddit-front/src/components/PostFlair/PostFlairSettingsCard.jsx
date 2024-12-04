import { AiOutlineClose } from 'react-icons/ai';
import SimpleDialog from '@mui/material/Dialog';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import { useState } from 'react';
import {
  StyledButton,
  DeleteCardThird,
  DeleteCardSecond,
  DeleteCardFirst
  //   DeleteCard
} from './PostFlair.Style';

function PostFlairSettingsCard({ opened, handleClose }) {
  const [Enable, setEnable] = useState(false);
  //   const [open, setOpen] = React.useState(opened);
  const EnableHandler = () => {
    const EnableTemp = !Enable;
    setEnable(EnableTemp);
  };
  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  return (
    <SimpleDialog
      open={opened}
      PaperProps={{ sx: { width: '25%', height: '25%', margin: '0' } }}
    >
      {/* <DeleteCard> */}
      <DeleteCardFirst>
        <p style={{ fontSize: '1.5rem', marginLeft: '2rem' }}>
          Post flair settings
        </p>
        <button
          type="button"
          style={{
            border: 'none',
            marginRight: '2rem',
            backgroundColor: 'white'
          }}
          onClick={handleClose}
        >
          <AiOutlineClose size="1.5rem" />
        </button>
      </DeleteCardFirst>
      <DeleteCardSecond
        onClick={EnableHandler}
        sx={{ justifyContent: 'space-between' }}
      >
        <p
          style={{
            fontSize: '1.5rem',
            marginLeft: '2rem',
            marginTop: '0',
            marginBottom: '0'
          }}
        >
          Enable post flair in this community
        </p>
        {Enable ? (
          <BsToggleOn
            color="#249FEC"
            size="3.8rem"
            style={{ marginRight: '2rem' }}
          />
        ) : (
          <BsToggleOff
            color="#DFDFDF"
            size="3.8rem"
            style={{ marginRight: '2rem' }}
          />
        )}
      </DeleteCardSecond>
      <DeleteCardThird>
        <StyledButton
          sx={{ color: '#0079D3', padding: '1rem 2rem' }}
          onClick={handleClose}
        >
          Cancel
        </StyledButton>
        <StyledButton
          sx={{
            color: '#FFFFFF',
            backgroundColor: '#0079D3',
            padding: '1rem 2rem'
          }}
        >
          Save
        </StyledButton>
      </DeleteCardThird>
      {/* </DeleteCard> */}
    </SimpleDialog>
  );
}
export default PostFlairSettingsCard;
