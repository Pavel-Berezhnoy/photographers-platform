import { Dialog, styled } from '@mui/material';

export const ReviewDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    background: 'linear-gradient(165.85deg, rgba(255, 255, 255, 0.06) 5.96%, rgba(193, 193, 193, 0.06) 85.65%)',
    backdropFilter: 'blur(20px)',
    borderRadius: '1.42rem',
    maxWidth: '800px',
    width: '100%',
  },
});
