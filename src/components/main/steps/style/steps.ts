import { styled, Box } from '@mui/material';

export const Content = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '@media (max-width: 900px)': {
    flexDirection: 'column',
  },
});

export const TextWrapper = styled(Box)(({ theme }) => ({
  order: 1,
  marginLeft: '4.5rem',
  color: theme.palette.text.secondary,
  '@media (max-width: 900px)': {
    marginLeft: '0',
    marginBottom: '4rem',
    width: '100%',
  },
}));

export const BlocksWrapper = styled(Box)({
  padding: '1.42rem',
  background: 'linear-gradient(165.85deg, rgba(255, 255, 255, 0.06) 5.96%, rgba(193, 193, 193, 0.06) 85.65%)',
  backdropFilter: 'blur(20px)',
  borderRadius: '1.42rem',
  maxWidth: '729px',
  width: '100%',
  position: 'relative',
  '@media (max-width: 900px)': {
    order: '2',
  },
});

export const MainGrid = styled(Box)({
  display: 'grid',
  justifyContent: 'space-between',
  gridTemplateColumns: 'minmax(200px, 410px) 1fr',
  marginBottom: '1.42rem',
  marginTop: '8rem',
  gap: '1rem',
  '@media (max-width: 575px)': {
    gridTemplateColumns: '1fr',
  },
});

export const FindOrdersWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '0 3.07rem 2.78rem',
  background: 'linear-gradient(165.85deg, rgba(255, 255, 255, 0.252) 5.96%, rgba(193, 193, 193, 0.252) 85.65%)',
  backdropFilter: 'blur(20)',
  border: '1px solid rgba(133, 108, 206, 1)',
  borderRadius: '1.71rem',
  color: theme.palette.text.secondary,
  '@media (max-width: 585px)': {
    padding: '0 1.85rem 2.78rem',
  },
}));

export const FindOrders = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(94px, 1fr))',
  gap: '5px',
});

export const FindOrderItem = styled(Box)({
  height: '8.35rem',
  backgroundColor: 'rgba(103, 105, 157, 0.75)',
  borderRadius: '.72rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 525px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});
