import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const AuthContainer = styled('form')(({ theme }) => ({
  backdropFilter: 'blur(5px)',
  width: '50%',
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  padding: '4.28rem 7.14rem',
  position: 'relative',
  zIndex: '10',
  '@media (max-width: 992px)': {
    '&': {
      width: '100%',
    },
  },
}));

export const ImageContainer = styled('div')({
  width: '50%',
  height: '100%',
  '@media (max-width: 992px)': {
    '&': {
      width: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '9',
    },
  },
});

export const Agreement = styled('a')(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'underline',
}));

export const LoginLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'underline',
}));
