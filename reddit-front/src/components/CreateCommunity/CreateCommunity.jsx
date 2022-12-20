/* eslint-disable react/jsx-wrap-multilines */
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
import { useNavigate } from 'react-router-dom';
import theme, {
  CenteredCard,
  CardHeaderUnderlined,
  StyledButton
} from './CreateCommunity.style';
import CommunityNameField from './CommunityNameField';
import ChooseCommunityType from './ChooseCommunityType';
import AdultContentCheckBox from './AdultContentCheckBox';
import createSubreddit from '../../services/requests/createSubreddit';
import AlertMessage from '../../utilities/AlertMessage/AlertMessage';
/**
 * This Card appears when click on create community button
 * , and you choose the properties for your community like name and type and the ability
 * of sharing adult content
 * @returns {React.Component}
 */

function CreateCommunity({ open, setOpen }) {
  // const [open, setOpen] = useState(show);
  const [communityType, setCommunityType] = useState('public');
  const [communityName, setCommunityName] = useState('');
  const [isAdultContent, setIsAdultContent] = useState(false);
  const [errorCommunityName, setErrorCommunityName] = useState(false);
  const [openAlertMessage, setOpenAlertMessage] = useState(false);
  const navigate = useNavigate();
  const onCloseHandler = () => {
    setOpenAlertMessage(false);
    setOpen(false);
    setCommunityName('');
  };

  const validCreation = communityName.length > 0 && !errorCommunityName;
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (validCreation) {
      const fulfilled = await createSubreddit(
        communityName,
        communityType,
        isAdultContent
      );
      console.log('fulfilled', fulfilled);
      if (fulfilled) {
        onCloseHandler();
        navigate(`r/${communityName}`);
      } else {
        setOpenAlertMessage(true);
        console.log('error in creating community');
      }
    } else {
      setOpenAlertMessage(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="subtitle1">
        <Modal
          open={open}
          onClose={onCloseHandler}
        >
          <CenteredCard variant="outlined">
            {openAlertMessage && (
              <AlertMessage
                type="error"
                message="server error, Cannot Create a community for"
                opnAlertMessage={openAlertMessage}
              />
            )}
            <CardHeaderUnderlined
              title={<Typography variant="h1">Create Community</Typography>}
              action={
                <IconButton onClick={onCloseHandler}>
                  <GrFormClose />
                </IconButton>
              }
            />
            <CardContent>
              <CommunityNameField
                onChangeCommunityName={setCommunityName}
                communityNameLength={communityName.length}
                setErrorCommunityName={setErrorCommunityName}
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
                onClick={onCloseHandler}
              >
                Cancel
              </StyledButton>
              <StyledButton
                variant="contained"
                color="primary"
                onClick={onSubmitHandler}
                disabled={!validCreation}
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
