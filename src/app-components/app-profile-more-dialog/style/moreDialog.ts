import { Dialog, styled } from '@mui/material';

export const More = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    backgroundColor: '#292931',
    backdropFilter: 'blur(20px)',
    borderRadius: '1.42rem',
    maxWidth: '700px',
    width: '100%',
  },
}));
