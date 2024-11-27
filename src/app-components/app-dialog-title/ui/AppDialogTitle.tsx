import {
  Box, DialogTitle, IconButton, Typography, DialogTitleProps,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { memo } from 'react';

interface AppDialogTitleProps extends DialogTitleProps {
  title?: string,
  onClose: () => void
}

function AppDialogTitle({ onClose, title, ...props }: AppDialogTitleProps) {
  return (
    <DialogTitle
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0',
        margin: '2.57rem 1.57rem',
        gap: '2rem',
      }}
      {...props}
    >
      <Box width="29.5px" />
      <Typography
        flex="1"
        component="span"
        fontWeight="700"
        fontSize="1.71rem"
        textAlign="center"
      >
        {title}
      </Typography>
      <IconButton size="small" onClick={onClose}>
        <CloseIcon sx={(theme) => ({ color: theme.palette.text.secondary })} />
      </IconButton>
    </DialogTitle>
  );
}

export default memo(AppDialogTitle);
