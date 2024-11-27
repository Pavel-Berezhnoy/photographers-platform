import {
  Dialog, styled, TextField, Box,
} from '@mui/material';

export const ChangeProfileDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#292931',
    backdropFilter: 'blur(20px)',
    borderRadius: '1.42rem',
    maxWidth: '700px',
    width: '100%',
  },
}));

export const ProfileInput = styled(TextField)(({ theme }) => ({
  marginTop: '.71rem',
  paddingBottom: '.71rem',
  minHeight: '58px',
  '& .MuiInputBase-root': {
    backgroundColor: 'inherit',
    color: theme.palette.text.secondary,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.secondary.main,
  },
}));

export const ImageContainer = styled(Box)({
  height: '10rem',
  width: '10rem',
  borderRadius: '50%',
  overflow: 'hidden',
  marginBottom: '1rem',
});
