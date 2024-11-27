import { styled, Box } from '@mui/material';

export const ContentWrapper = styled(Box)({
  display: 'flex',
  gap: '11px',
  '@media (max-width: 767px)': {
    '&': {
      flexDirection: 'column',
    },
  },
});

export const CardsWrapper = styled(Box)({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 299px))',
  gap: '11px',
  alignItems: 'flex-start',
});
