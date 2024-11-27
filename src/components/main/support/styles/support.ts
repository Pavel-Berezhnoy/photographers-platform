import { styled, Box } from '@mui/material';

export const SupportWrapper = styled(Box)({
  background: 'url("./assets/support-bg.png")',
  padding: '7.14rem 0 9.5rem',
  marginTop: '13.92rem',
  display: 'flex',
  width: ' 100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media (max-width: 767px)': {
    '&': {
      marginTop: '6.92rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
});

export const ImageContainer = styled(Box)({
  marginLeft: '2rem',
  maxWidth: '686px',
  maxHeight: '570px',
  '@media (max-width: 767px)': {
    '&': {
      marginLeft: '0',
      marginTop: '3rem',
    },
  },
});
