import { styled, Button, Box } from '@mui/material';

interface AccountTypeProps {
  accountType: 'model' | 'photo',
  accountCurrentType: 'model' | 'photo',
}

export const AccountTypeBtn = styled(Button)<AccountTypeProps>(
  ({ theme, accountType, accountCurrentType }) => ({
    border: '1px solid',
    borderColor: theme.palette.secondary.main,
    textTransform: 'inherit',
    backgroundColor: accountType === accountCurrentType
      ? theme.palette.secondary.main
      : 'inherit',
    color: accountType === accountCurrentType
      ? theme.palette.text.secondary
      : theme.palette.text.secondary,
    transition: '.2s',
    ':hover': {
      backgroundColor: accountType === accountCurrentType
        ? theme.palette.secondary.main
        : 'inherit',
      color: accountType === accountCurrentType
        ? theme.palette.text.secondary
        : theme.palette.text.secondary,
      opacity: '.8',
    },
  }),
);

export const ContentWrapper = styled(Box)({
  display: 'flex',
  gap: '11px',
  '@media (max-width: 767px)': {
    '&': {
      flexDirection: 'column',
    },
  },
});

export const CardsWrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 390px))',
  gap: '11px',
  width: '100%',
});
