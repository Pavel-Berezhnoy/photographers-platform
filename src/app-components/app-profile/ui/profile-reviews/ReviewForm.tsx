import { useState, ChangeEvent as ReactChangeEvent, FormEvent } from 'react';
import {
  Box, DialogActions, DialogContent, TextField, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import { ReviewDialog } from '../../styles/reviewForm';
import AppDialogTitle from '../../../app-dialog-title';
import AppButton from '../../../app-button';
import { useStore } from '../../../../app/store';

interface IReviewForm {
  open: boolean,
  rating: number | null,
  onClose: () => void,
}

function ReviewForm({ onClose, open, rating }: IReviewForm) {
  const [reviewText, setReviewText] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const {
    reviewStore: { createReviewToUser },
    usersStore: { getUserProfile },
    profileStore: { getCurrentProfileToView },
  } = useStore();

  const reviewTextHandle = (e: ReactChangeEvent<HTMLInputElement>) => {
    setReviewText(e.target.value);
  };
  const createReviewHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createReviewToUser({
      rating: rating || 0,
      text: reviewText,
      reviewer_id: getCurrentProfileToView?.id || 0,
      user_id: getUserProfile?.id || 0,
    });
    onClose();
  };
  return (
    <ReviewDialog fullScreen={isMobile} open={open} onClose={onClose}>
      <form style={{ display: 'contents' }} onSubmit={createReviewHandle}>
        <AppDialogTitle title="Хотите оставить отзыв?" onClose={onClose} />
        <DialogContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box paddingBottom="1.14rem" width="100%" maxWidth="500px">
            <Typography component="label">Отзыв</Typography>
            <TextField
              sx={{
                marginTop: '.71rem',
                '& .MuiInputBase-root': {
                  backgroundColor: 'inherit',
                  color: theme.palette.text.secondary,
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.secondary.main,
                },
              }}
              color="secondary"
              fullWidth
              multiline
              rows={7}
              name="about"
              size="small"
              value={reviewText}
              onChange={reviewTextHandle}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ padding: '4rem 2rem', justifyContent: 'center' }}>
          <AppButton
            sx={{ padding: '.71rem 1rem' }}
            color="secondary"
            type="submit"
          >
            Оставить отзыв
          </AppButton>
          <AppButton
            sx={{ padding: '.71rem 1rem' }}
            color="secondary"
            variant="outlined"
            onClick={onClose}
          >
            Нет, спасибо
          </AppButton>
        </DialogActions>
      </form>
    </ReviewDialog>
  );
}

export default ReviewForm;
