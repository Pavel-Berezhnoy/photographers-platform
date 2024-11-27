import { Dialog, DialogContent, styled } from '@mui/material';

export const ProfileDetail = styled(Dialog)({
  '& .MuiPaper-root': {
    background: 'linear-gradient(165.85deg, rgba(255, 255, 255, 0.06) 5.96%, rgba(193, 193, 193, 0.06) 85.65%)',
    backdropFilter: 'blur(20px)',
    borderRadius: '1.42rem',
    maxWidth: '900px',
    width: '100%',
    paddingBottom: '3rem',
  },
});

export const ProfileDetailContent = styled(DialogContent)({
  padding: '0 8rem',
  '@media (max-width: 767px)': {
    padding: '0 5rem',
  },
  '@media (max-width: 585px)': {
    padding: '0 2rem',
  },
});
