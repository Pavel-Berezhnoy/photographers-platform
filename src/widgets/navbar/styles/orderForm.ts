import { styled, Dialog, Box } from '@mui/material';

export const OrderDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    background: 'linear-gradient(165.85deg, rgba(255, 255, 255, 0.06) 5.96%, rgba(193, 193, 193, 0.06) 85.65%)',
    backdropFilter: 'blur(20px)',
    borderRadius: '1.42rem',
    maxWidth: '1042px',
    width: '100%',
  },
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, .2)',
  },
});

export const TypeContainer = styled(Box)({
  backgroundColor: 'rgba(255, 255, 255, 0.63)',
  backdropFilter: 'blur(20px)',
  borderRadius: '.71rem',
  padding: '.5rem 1rem',
  display: 'flex',
  whiteSpace: 'nowrap',
  overflowY: 'auto',
  gap: '1.28rem',
  marginBottom: '1.14rem',
});
