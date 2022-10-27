import { useState } from 'react';
import {
  CardActions,
  ThemeProvider,
  IconButton,
  CardContent,
  Typography,
  Modal
} from '@mui/material';
import { GrFormClose } from 'react-icons/gr';
import theme, {
  CenteredCard,
  CardHeaderUnderlined,
  StyledButton
} from './CreateCommunity.style';
import CommunityNameField from './CommunityNameField';
import ChooseCommunityType from './ChooseCommunityType';
import AdultContentCheckBox from './AdultContentCheckBox';

function CreateCommunity() {
  const [open, setOpen] = useState(true);
  const [communityType, setCommunityType] = useState('public');
  const [communityName, setCommunityName] = useState('');
  const [isAdultContent, setIsAdultContent] = useState(false);

  const onSubmitHandler = () => {
    // For Test only
    console.log(communityName, communityType, isAdultContent);
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="subtitle1">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
        >
          <CenteredCard variant="outlined">
            <CardHeaderUnderlined
              title={<Typography variant="h1">Create Community</Typography>}
              action={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <IconButton onClick={() => setOpen(false)}>
                  <GrFormClose />
                </IconButton>
              }
            />
            <CardContent>
              <CommunityNameField
                onChangeCommunityName={setCommunityName}
                communityNameLength={communityName.length}
              />
              <ChooseCommunityType onChangeCommunityType={setCommunityType} />
              <AdultContentCheckBox
                onChangeAdultContent={setIsAdultContent}
                checked={isAdultContent}
              />
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                backgroundColor: '#edeff1',
                padding: '1.6rem',
                margin: '1.6rem -1.6rem -1.6rem',
                borderBottomRightRadius: '0.4rem'
              }}
            >
              <StyledButton
                variant="outlined"
                color="primary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </StyledButton>
              <StyledButton
                variant="contained"
                color="primary"
                onClick={onSubmitHandler}
              >
                Create Community
              </StyledButton>
            </CardActions>
          </CenteredCard>
        </Modal>
      </Typography>
    </ThemeProvider>
  );
}

export default CreateCommunity;
