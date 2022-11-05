/* eslint-disable max-len */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StyledHorizontalLine from '../../utilities/StyledHorizontalLine/StyledHorizontalLine';
import {
  StyledLink, StyledRowBox, StyledColBox, Root
} from './HomePageCards.style';
/**
 * this function returns Langues and policy Card ,the one that is displayed in the home screen
 */
export default function HomeLanguagesCard() {
  return (
    <Root>
      <Card sx={{ padding: '1rem', maxWidth: 345 }}>
        <CardContent
          sx={{
            padding: '0',
            margin: '0',
            '&:last-child': {
              paddingBottom: '0'
            }

          }}
        >
          <StyledRowBox>
            <StyledColBox>
              <StyledLink underline="none">User Agreement</StyledLink>
              <StyledLink underline="none">Privacy Policy</StyledLink>
            </StyledColBox>
            <StyledColBox>
              <StyledLink underline="none">Content Policy</StyledLink>
              <StyledLink underline="none" sx={{ marginRight: '3.5rem' }}>
                Moderator Code of
                {' '}
                <br />
                {' '}
                Conduct
              </StyledLink>
            </StyledColBox>
          </StyledRowBox>
          <StyledHorizontalLine
            marginTop={1.6}
            marginBottom={1.6}
            marginLeft={0}
            marginRight={0.7}
          />
          <StyledRowBox>
            <StyledColBox>
              <StyledLink underline="none">English</StyledLink>
              <StyledLink underline="none">Français</StyledLink>
              <StyledLink underline="none">Italiano</StyledLink>
            </StyledColBox>
            <StyledColBox>
              <StyledLink underline="none"> Deutsh</StyledLink>
              <StyledLink underline="none" sx={{ marginRight: '9rem' }}>
                Español
              </StyledLink>
              <StyledLink underline="none"> Português</StyledLink>
            </StyledColBox>
          </StyledRowBox>
          <StyledHorizontalLine
            marginTop={1.6}
            marginBottom={1.6}
            marginLeft={0}
            marginRight={0.7}
          />
          <Typography
            variant="h5"
            sx={{
              color: '#1c1c1c',
              fontSize: '1.2rem',
              textTransform: 'none',
              marginLeft: '1px'
            }}
            data-testid="rights"
          >
            Reddit Inc © 2022. All rights reserved
          </Typography>

        </CardContent>
      </Card>
    </Root>
  );
}
/*
<div class="_34dh2eyzMvJfjCBLeoWiDD">Reddit Inc © 2022. All rights reserved</div>

*/
