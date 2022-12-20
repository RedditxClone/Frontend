import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import { RiCake3Line } from 'react-icons/ri';
import {
  CommunityCreatedDate,
  MembersTypography,
  OnlineMembersBox
} from '../../components/SubredditCards/AboutCard/AboutCard.Style';
import StyledHorizontalLine from '../../utilities/StyledHorizontalLine/StyledHorizontalLine';
import classes from './CreatePost.module.css';

function CommunityInfo({
  baseColor,
  communityName,
  communityIcon,
  communityDiscription,
  communityDate,
  communityMembers,
  communityOnlineMembers
}) {
  return (
    <div>
      <header
        style={{
          height: '7%',
          backgroundColor: baseColor,
          marginBottom: '1rem'
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <span className={classes['community-logo']}>
            <img
              src={communityIcon}
              alt=""
            />
          </span>
          <div className={classes['community-info']}>
            <span>{communityName}</span>
          </div>
        </div>
        <p>{communityDiscription}</p>
        <CommunityCreatedDate data-testid="community-info-create-post">
          <RiCake3Line fontSize="2rem" />
          <Typography
            variant="paragraph"
            style={{
              color: '#1c1c1c',
              marginLeft: '1rem'
            }}
          >
            {`Created ${communityDate}`}
          </Typography>
        </CommunityCreatedDate>
      </div>
      <StyledHorizontalLine
        marginTop="1.5"
        marginBottom="1.5"
        marginLeft="0"
        marginRight="0"
      />
      <Box
        className="members-count"
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box
          className="all-members-count"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <span
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              lineHeight: '2rem'
            }}
          >
            {divideBigNumber(communityMembers)}
          </span>
          <MembersTypography
            variant="paragraph"
            style={{ color: paragraphColor }}
          >
            Members
          </MembersTypography>
        </Box>
        <OnlineMembersBox className="members-online">
          <Box
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              lineHeight: '2rem',
              position: 'relative',
              textAlign: 'center'
            }}
          >
            <span
              style={{
                color: '#46d160',
                marginRight: '4px',
                position: 'absolute',
                left: '-15px',
                top: 0,
                height: '2rem',
                width: '2rem'
              }}
            >
              ●
            </span>
            {divideBigNumber(communityOnlineMembers)}
          </Box>
          <MembersTypography
            variant="paragraph"
            sx={{ color: paragraphColor }}
          >
            Online
          </MembersTypography>
        </OnlineMembersBox>
      </Box>
    </div>
  );
}

export default memo(CommunityInfo);
