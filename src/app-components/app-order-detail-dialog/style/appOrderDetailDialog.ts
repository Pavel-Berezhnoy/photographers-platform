import {
  Box, Dialog, DialogContent, styled,
} from '@mui/material';

export const OrderDetail = styled(Dialog)({
  '& .MuiPaper-root': {
    background: 'linear-gradient(165.85deg, rgba(255, 255, 255, 0.06) 5.96%, rgba(193, 193, 193, 0.06) 85.65%)',
    backdropFilter: 'blur(20px)',
    borderRadius: '1.42rem',
    maxWidth: '700px',
    width: '100%',
    paddingBottom: '3rem',
  },
});

export const OrderDetailContent = styled(DialogContent)({
  padding: '0 4.28rem',
  '@media (max-width: 585px)': {
    padding: '0 2.28rem',
  },
});

export const OrderValue = styled(Box)(({ theme }) => ({
  borderRadius: '4px',
  backgroundColor: theme.palette.secondary.main,
  padding: '.3rem 1rem',
  display: 'flex',
  alignItems: 'center',
}));
