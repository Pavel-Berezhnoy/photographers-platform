import { styled, List, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';

export const NavListWrapper = styled(List)({
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  backgroundColor: 'rgba(89, 85, 138, 0.12)',
  justifyContent: 'center',
  borderRadius: '4.71rem',
  padding: '0 1rem',
});

export const NavListMobileWrapper = styled(Drawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
  },
}));

export const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  transition: '.2s',
  padding: '1.57rem 1.28rem',
  justifyContent: 'center',
  borderRadius: '4.71rem',
  position: 'relative',
  '&.active': {
    ':before': {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      right: '0',
      width: '80%',
      content: "''",
      height: '2px',
      borderRadius: '1px',
      bottom: '0',
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

export const MenuLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: '6px 16px',
}));
