import { AiOutlineClose } from 'react-icons/ai';
import SimpleDialog from '@mui/material/Dialog';
import {
  StyledButton,
  DeleteCardThird,
  DeleteCardSecond,
  DeleteCardFirst
  //   DeleteCard
} from './PostFlair.Style';

function CancelCard({ opened, handleClose }) {
  //   const [open, setOpen] = React.useState(opened);
  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  return (
    <SimpleDialog
      open={opened}
      //   onClose={handleClose}
      PaperProps={{ sx: { width: '38%', height: '25%', margin: '0' } }}
    >
      {/* <DeleteCard> */}
      <DeleteCardFirst>
        <p style={{ fontSize: '1.5rem', marginLeft: '2rem' }}>
          Discard new flair ?
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
      <DeleteCardSecond>
        <p
          style={{
            fontSize: '1.5rem',
            marginLeft: '2rem',
            marginTop: '0',
            marginBottom: '0'
          }}
        >
          You have a new flair that has not been saved, do you wish to discard
          this new flair?
        </p>
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
          Discard
        </StyledButton>
      </DeleteCardThird>
      {/* </DeleteCard> */}
    </SimpleDialog>
  );
}
export default CancelCard;
