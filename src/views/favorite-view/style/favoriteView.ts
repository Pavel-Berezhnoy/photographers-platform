import { Box, styled } from '@mui/material';

export const CardsWrapper = styled(Box)({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 402px))',
  gap: '11px',
});
