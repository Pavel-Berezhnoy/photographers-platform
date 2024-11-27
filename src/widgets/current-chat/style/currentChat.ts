import { styled, Box } from '@mui/material';

export const MessagesArea = styled(Box)({
  background: 'linear-gradient(114.17deg, rgba(255, 179, 207, 0.3075) 12.81%, rgba(255, 174, 223, 0.3) 107.92%)',
  borderRadius: '2rem',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  flex: '1',
  padding: '2rem 0',
});

export const Wrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
});

export const ActionsArea = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  width: '100%',
  display: 'flex',
  padding: '0 2rem',
  marginTop: '1rem',
  alignItems: 'center',
  gap: '1rem',
}));

export const SendMessageForm = styled('form')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const MediaArea = styled(Box)(({ theme }) => ({
  marginTop: '1rem',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat( auto-fit, minmax(100px, 150px) )',
  gap: '1rem',
}));

export const MediaImage = styled('img')({
  objectFit: 'cover',
  borderRadius: '.71rem',
});
