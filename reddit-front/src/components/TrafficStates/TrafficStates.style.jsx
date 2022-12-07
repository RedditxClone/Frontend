import { Tab, styled } from '@mui/material';

/**
 * Modify the style of the default div
 * @param {div} div - the default div
 * @return {div} - The styled div
 */

export const ChartDiv = styled('div')({
  width: '100%',
  height: '56rem',
  backgroundColor: '#ffffff',
  padding: '16px',
  borderRadius: '5px',
  marginBottom: '1rem'
});

/**
 * Modify the style of the default div to be a small transperant card
 * @param {div} div - the default div
 * @return {div} - The styled div
 */

export const ChartCard = styled('div')({
  width: '40%',
  border: '1px solid #EDEFF1',
  borderRadius: '2px',
  height: '10rem',
  padding: '16px',
  margin: '16px'
});

/**
 * Modify the style of the default Tab
 * @param {Tab} Tab - the default Tab
 * @return {Tab} - The styled Tab
 */

export const TrafficTab = styled(Tab)({
  fontSize: '13px',
  textTransform: 'none',
  fontWeight: '700',
  color: '#1c1c1c'
});
