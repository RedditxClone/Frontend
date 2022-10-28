import { Box, Typography } from '@mui/material';
import { BsExclamationCircle } from 'react-icons/bs';
import { useState } from 'react';
import { CommunityNameTextField, InfoBox } from './CreateCommunity.style';

/**
 * Modified TextField with its label
 * @param {protoType} props
 * @property {visited} boolen - to indicate the input was focused or not
 * @property {isHovering} boolen - to indicate the input was hovering over a specific element
 * @returns {input}  - modified input
 */

function CommunityNameField(props) {
  const [visited, setVisited] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const onHoveringHandler = () => {
    setTimeout(setIsHovering(true), 20000);
  };
  const helperText = `${21 - props.communityNameLength} Characters remaining`;

  const changeCommunityNameHandler = (event) => {
    props.onChangeCommunityName(event.target.value);
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
          onBlur={() => setVisited(true)}
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
        color={props.communityNameLength === 21 ? 'error' : ''}
      >
        {helperText}
      </Typography>
      {visited && props.communityNameLength === 0 && (
        <Typography
          variant="subtitle1"
          color="error"
        >
          A community name is required
        </Typography>
      )}
    </Box>
  );
}

export default CommunityNameField;
