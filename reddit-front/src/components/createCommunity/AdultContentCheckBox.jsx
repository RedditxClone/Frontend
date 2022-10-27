/* eslint-disable react/jsx-wrap-multilines */
// eslint-disable-next-line object-curly-newline
import { Box, Typography, FormGroup, FormControlLabel } from '@mui/material';
import { WiderCheckBox, FlairWrapper } from './CreateCommunity.style';

function AdultContentCheckBox(props) {
  const onChangeAdultContent = () => {
    props.onChangeAdultContent((prev) => !prev);
  };
  return (
    <Box>
      <Typography variant="h1">Adult Content</Typography>
      <FormGroup>
        <FormControlLabel
          sx={{ marginLeft: '0' }}
          control={
            <WiderCheckBox
              checked={props.checked}
              onChange={onChangeAdultContent}
            />
          }
          label={
            <div style={{ display: 'flex' }}>
              <FlairWrapper>NFSW</FlairWrapper>
              <Typography variant="h3">18+ year old community</Typography>
            </div>
          }
        />
      </FormGroup>
    </Box>
  );
}

export default AdultContentCheckBox;
