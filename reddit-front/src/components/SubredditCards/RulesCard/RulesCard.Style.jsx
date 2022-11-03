/* eslint-disable import/prefer-default-export */
import { Box, styled } from '@mui/material';

/**
 * @param {Box} - the default Box
 * @return {RulesCardContainer} - The styled container
 */
export const RulesCardContainer = styled(Box)({
  backgroundColor: 'white',
  marginTop: '1rem',
  marginBottom: '1rem',
  border: '1px solid #ccc',
  borderTopLeftRadius: '5px',
  borderTopRightRadius: '5px'
});

/**
 * @param {Box} - the default Link
 * @return {RuleContainer} - The styled container
 */
export const RuleContainer = styled(Box)({
  paddingTop: '7px',
  marginBottom: '1rem',
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  cursor: 'pointer'
});

/**
 * @param {Box} - the default Box
 * @return {RuleTitle} - The styled title
 */
export const RuleTitle = styled(Box)({
  flex: '1 1 100%',
  width: '100%',
  margin: 0,
  padding: '0 8px 0 0',
  wordBreak: 'break-word',
  fontSize: '1.5rem'
});

/**
 * @param {Box} - the default Box
 * @return {ShowRuleDescription} - The styled description of the rule
 */
export const ShowRuleDescription = styled(Box)({
  flex: '0 0',
  margin: 0,
  padding: '2px 0 0 0',
  cursor: 'pointer'
});

/**
 * @param {Box} - the default Box
 * @return {RuleDescription} - The styled description of the rule
 */
export const RuleDescription = styled(Box)({
  fontSize: '1.2rem',
  fontWeight: '400',
  lineHeight: '1.6rem',
  padding: '0 8px 0 1.6rem',
  cursor: 'pointer'
});
