import { styled, Box } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  paddingBottom: '2.57rem',
  display: 'flex',
  height: '100%',
  gap: '2rem',
  color: theme.palette.text.secondary,
}));
