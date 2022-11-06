/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-wrap-multilines */
// eslint-disable-next-line object-curly-newline
import { Box, Typography, FormGroup, FormControlLabel } from '@mui/material';
import { WiderCheckBox, FlairWrapper } from './CreateCommunity.style';

/**
 * @description This component is resposinble to render the checkBox of NSFW
 * @param {boolean} checked To check if the the adult content is allowed or not
 * @param {function} onChangeAdultContent This function sets the value of the checked preperty
 * @returns {React.Component} CheckBox with its label
 */
function AdultContentCheckBox({ onChangeAdultContent, checked }) {
  const chhangeAdultContentHandler = () => {
    onChangeAdultContent((prev) => !prev);
  };
  return (
    <Box>
      <Typography variant="h1">Adult Content</Typography>
      <FormGroup>
        <FormControlLabel
          sx={{ marginLeft: '0' }}
          control={
            <WiderCheckBox
              checked={checked}
              onChange={chhangeAdultContentHandler}
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
