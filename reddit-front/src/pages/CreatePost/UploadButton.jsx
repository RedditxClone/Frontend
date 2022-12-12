import { IconButton, Stack } from '@mui/material';
import { BsPlusLg } from 'react-icons/bs';

function UploadButton({ setCurrentFiles }) {
  const handleImages = (e) => {
    console.log(e.target.files);
    setCurrentFiles((prev) => [...prev].concat(e.target.files));
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
    >
      <label htmlFor="icon-button-file">
        <input
          accept="image/*,video/*"
          id="icon-button-file"
          type="file"
          onChange={handleImages}
          multiple
          hidden
        />
        <IconButton
          aria-label="upload picture"
          component="span"
        >
          <BsPlusLg size={20} />
        </IconButton>
      </label>
    </Stack>
  );
}
export default UploadButton;
