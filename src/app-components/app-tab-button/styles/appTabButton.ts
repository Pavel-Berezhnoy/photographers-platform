import { Button, styled } from '@mui/material';

interface AppTabBtnProps {
  active: boolean,
}

export const AppTabBtn = styled(Button, { shouldForwardProp: (props) => props !== 'active' })<AppTabBtnProps>(({ theme, active }) => ({
  backgroundColor: active
    ? theme.palette.secondary.main
    : theme.palette.text.secondary,
  color: active
    ? theme.palette.text.secondary
    : theme.palette.text.primary,
  transition: '.2s',
  ':hover': {
    backgroundColor: active
      ? theme.palette.secondary.main
      : theme.palette.text.secondary,
    opacity: '.8',
  },
  '&.MuiButton-outlined': {
    backgroundColor: active
      ? theme.palette.secondary.main
      : 'inherit',
    color: theme.palette.text.secondary,
  },
}));
