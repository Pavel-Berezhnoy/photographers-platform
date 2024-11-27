import { AppBar, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled(AppBar)(({ theme }) => ({
  color: theme.palette.text.secondary,
  width: '100%',
  boxShadow: 'none',
}));

export const LogoLink = styled(Link)(({ theme }) => ({
  maxWidth: '7.64rem',
  width: '100%',
  display: 'block',
}));
