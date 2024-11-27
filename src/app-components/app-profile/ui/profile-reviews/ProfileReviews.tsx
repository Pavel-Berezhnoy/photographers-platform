import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import ReviewsList from './ReviewsList';
import CountReviews from './CountReviews';
import { useStore } from '../../../../app/store';

interface AppReviewsProps {
  userRating: number,
  userId: number
}

function AppReviews({ userRating, userId }: AppReviewsProps) {
  const {
    profileStore: { getCurrentProfileToView },
    reviewStore: {
      fetchReviewsByUserId,
      getReviews,
      clearReviews,
    },
  } = useStore();

  useEffect(() => {
    fetchReviewsByUserId(userId);
    return () => {
      clearReviews();
    };
  }, [clearReviews, fetchReviewsByUserId, userId]);

  return (
    <Box margin="3.57rem 0" width="100%">
      <Box display="flex" alignItems="center" justifyContent="center" gap=".71rem">
        {userRating
          ? (
            <>
              <StarIcon sx={(theme) => ({
                color: theme.palette.secondary.main,
                width: '3.57rem',
                height: '3.57rem',
              })}
              />
              <Typography fontWeight="bold" variant="h3" fontSize="4rem">{userRating}</Typography>
            </>
          )
          : (
            <Typography fontWeight="bold" variant="h3" fontSize="1.71rem">
              Отзывов ещё нет
            </Typography>
          )}
      </Box>
      {getCurrentProfileToView?.id !== userId && <CountReviews />}
      <ReviewsList reviews={getReviews} />
    </Box>
  );
}

export default observer(AppReviews);
