import { Box, styled } from '@mui/material';
import { searchTheme } from '../../../pages/SearchResults/SearchCards.Style';

/**
 * @param {Box} - the default Box
 * @return {ResultsContainer} - The styled container
 */
export const ResultsContainer = styled(Box)({
  width: '100%',
  height: '100%'
});

/**
 * @param {Box} - the default Box
 * @return {SideCardsContainer} - The styled container
 */
export const SideCardsContainer = styled(Box)({
  width: '45%',
  [searchTheme.breakpoints.down('md')]: {
    display: 'none',
    visibility: 'hidden'
  }
});

/**
 * @param {span} - the default span
 * @return {PostTitle} - The styled title
 */
export const PostTitle = styled('span')({
  color: 'black',
  fontSize: '1.6rem',
  marginRight: '1rem',
  fontWeight: '500'
});

/**
 * @param {Box} - the default Box
 * @return {SearchResults} - The styled container
 */
export const SearchResults = styled(Box)({
  margin: '1rem 0',
  verticalAlign: 'baseline',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
});

/**
 * @param {span} - the default span
 * @return {Flair} - The styled flair
 */
export const Flair = styled('span')({
  display: 'inline-block',
  backgroundColor: 'lime',
  color: 'black',
  borderRadius: '20px',
  padding: '2px 8px',
  fontSize: '12px',
  fontWeight: '500',
  marginRight: '5px'
});

/**
 * @param {Box} - the default Box
 * @return {ImageContainer} - The styled container
 */
export const ImageContainer = styled(Box)({
  minWidth: '138px',
  height: '98px',
  borderRadius: '4px',
  overflow: 'hidden'
});
