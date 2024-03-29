import { Box, Typography } from '@mui/material';
import { BsExclamationCircle } from 'react-icons/bs';
import { useState } from 'react';
import { CommunityNameTextField, InfoBox } from './CreateCommunity.style';

/**
 * Modified TextField with its label
 * @param {Number} communityNameLength The length of the community name to check on the
 * maximum length
 * @param {Function} onChangeCommunityName to set the remainig characters in community name field
 * @param {Function} setErrorCommunityName To check for validity of community name
 * @returns {React.Component}  - modified input for community name
 */

function CommunityNameField({
  communityNameLength,
  onChangeCommunityName,
  setErrorCommunityName
}) {
  // Regex to check that community name has only chars or numbers or underscores
  const COMMUNITY_NAME_REGEX = /^\w+$/;
  const [visited, setVisited] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [regexErrorName, setRegexErrorName] = useState(false);

  const onHoveringHandler = () => {
    setTimeout(setIsHovering(true), 20000);
  };
  const helperText = `${21 - communityNameLength} Characters remaining`;

  const changeCommunityNameHandler = (event) => {
    onChangeCommunityName(event.target.value);
  };

  const onBlurCommunityNameInput = (event) => {
    const regexError = !COMMUNITY_NAME_REGEX.test(event.target.value);
    setRegexErrorName(regexError);
    setErrorCommunityName(regexError || communityNameLength < 3);
  };
  return (
    <Box sx={{ marginBottom: '3rem' }}>
      <Box>
        <Typography variant="h1">Name</Typography>
        <Typography
          variant="subtitle1"
          sx={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}
        >
          <span style={{ marginRight: '1rem' }}>
            Community names including capitalization cannot be changed.
          </span>
          <div style={{ position: 'relative' }}>
            <BsExclamationCircle
              onMouseOver={onHoveringHandler}
              onMouseLeave={() => setIsHovering(false)}
            />
            {isHovering && (
              <InfoBox>
                Names cannot have spaces (e.g., &quot;r/bookclub&quot; not
                &quot;r/book club&quot;), must be between 3-21 characters, and
                underscores (&quot;_&quot;) are the only special characters
                allowed. Avoid using solely trademarked names (e.g.,
                &quot;r/FansOfAcme&quot; not &quot;r/Acme&quot;).
              </InfoBox>
            )}
          </div>
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: '1.2rem',
          marginBottom: '0',
          boxSizing: 'border-box'
        }}
      >
        <CommunityNameTextField
          testId
          maxLength={21}
          required
          onBlur={onBlurCommunityNameInput}
          onFocus={() => setVisited(true)}
          onChange={changeCommunityNameHandler}
        />
        <span
          style={{
            fontSize: '1.6rem',
            color: '#7c7c7c',
            position: 'relative',
            top: '-3.5rem',
            left: '0.8rem'
          }}
        >
          r/
        </span>
      </Box>
      <Typography
        variant="subtitle1"
        color={communityNameLength === 21 ? 'error' : ''}
      >
        {helperText}
      </Typography>
      {visited && communityNameLength === 0 && (
        <Typography
          variant="subtitle1"
          color="error"
        >
          A community name is required
        </Typography>
      )}

      {(regexErrorName || communityNameLength < 3) && communityNameLength > 0 && (
        <Typography
          variant="subtitle1"
          color="error"
        >
          Community names must be between 3–21 characters, and can only contain
          letters, numbers, or underscores.
        </Typography>
      )}
    </Box>
  );
}

export default CommunityNameField;
