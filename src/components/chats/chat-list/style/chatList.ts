import { styled, Box, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(114.17deg, rgba(255, 174, 204, 0.3075) 12.81%, rgba(255, 208, 236, 0.3) 107.92%)',
  borderRadius: '2rem',
  maxWidth: '320px',
  width: '100%',
  display: 'flex',
  paddingBottom: '2rem',
  flexDirection: 'column',
  '@media (max-width: 600px)': {
    '&': {
      maxWidth: '100%',
      borderRadius: '.71rem',
    },
  },
}));

export const ChatItemButton = styled(ListItemButton)({
  display: 'flex',
});

export const ChatItemLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});
