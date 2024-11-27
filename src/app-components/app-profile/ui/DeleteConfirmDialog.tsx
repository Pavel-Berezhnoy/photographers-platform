import { Dialog, DialogActions } from '@mui/material';
import React from 'react';
import AppDialogTitle from '../../app-dialog-title';
import AppButton from '../../app-button';

interface DeleteConfirmDialogProps {
  open: boolean,
  onClose: () => void,
  onConfirm: () => void,
}

function DeleteConfirmDialog({ open, onClose, onConfirm }: DeleteConfirmDialogProps) {
  return (
    <Dialog
      sx={{
        '& .MuiPaper-root': {
          background: 'linear-gradient(165.85deg, rgba(255, 255, 255, 0.06) 5.96%, rgba(193, 193, 193, 0.06) 85.65%)',
          backdropFilter: 'blur(20px)',
          borderRadius: '1.42rem',
          maxWidth: '700px',
          width: '100%',
        },
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(0, 0, 0, .1)',
        },
      }}
      open={open}
      onClose={onClose}
    >
      <AppDialogTitle title="Вы точно хотите удалить эту фотографию?" onClose={onClose} />
      <DialogActions sx={{ justifyContent: 'center', padding: '0 0 5rem 0', gap: '1rem' }}>
        <AppButton color="secondary" onClick={onConfirm}>
          Да
        </AppButton>
        <AppButton
          sx={{
            color: (theme) => theme.palette.text.secondary,
          }}
          color="secondary"
          variant="outlined"
          onClick={onClose}
        >
          Нет
        </AppButton>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteConfirmDialog;
