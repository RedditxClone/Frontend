import { AiOutlineClose } from 'react-icons/ai';
import SimpleDialog from '@mui/material/Dialog';
import {
  StyledButton,
  DeleteCardThird,
  DeleteCardSecond,
  DeleteCardFirst
  //   DeleteCard
} from './PostFlair.Style';

function DeletePostFlair({ opened, handleClose, deleteFlair }) {
  //   const [open, setOpen] = React.useState(opened);
  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  return (
    <SimpleDialog
      //   open={open}
      //   onClose={handleClose}
      PaperProps={{ sx: { width: '25%', height: '25%', margin: '0' } }}
      open={opened}
    >
      {/* <DeleteCard> */}
      <DeleteCardFirst>
        <p style={{ fontSize: '1.5rem', marginLeft: '2rem' }}>
          Delete post flair ?
        </p>
        <button
          type="button"
          style={{
            border: 'none',
            marginRight: '2rem',
            backgroundColor: 'white'
          }}
        >
          <AiOutlineClose size="1.5rem" />
        </button>
      </DeleteCardFirst>
      <DeleteCardSecond>
        <p
          style={{
            fontSize: '1.5rem',
            marginLeft: '2rem',
            marginTop: '0',
            marginBottom: '0'
          }}
        >
          Do you wish to delete this post flair ?
        </p>
      </DeleteCardSecond>
      <DeleteCardThird>
        <StyledButton
          sx={{
            color: '#0079D3',
            padding: '1rem 2rem'
          }}
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
          onClick={deleteFlair}
        >
          Delete
        </StyledButton>
      </DeleteCardThird>
      {/* </DeleteCard> */}
    </SimpleDialog>
  );
}
export default DeletePostFlair;
