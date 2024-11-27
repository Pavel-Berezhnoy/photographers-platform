import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { ru } from 'date-fns/locale';
import format from 'date-fns/format';
import { memo } from 'react';
import { IReview } from '../../../../constants/types/reviews.d';

interface ReviewsListProps {
  reviews: IReview[],
}

function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <Box display="flex" alignItems="center" flexDirection="column" gap=".71rem" marginTop="2rem">
      {reviews.map((review) => (
        <Box
          key={review.id}
          sx={{
            borderRadius: '1rem',
            background: 'linear-gradient(165.85deg, rgba(255, 255, 255, 0.06) 5.96%, rgba(193, 193, 193, 0.06) 85.65%)',
            backdropFilter: 'blur(20px)',
            padding: '2rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '2rem',
            maxWidth: '750px',
            width: '100%',
          }}
        >
          <Box sx={{ maxWidth: '10rem' }}>
            {review.reviewer.avatar
              ? (
                <img
                  src={review.reviewer.avatar}
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                  alt=""
                />
              )
              : (
                <AccountCircleIcon sx={{
                  width: '100%', height: '100%',
                }}
                />
              )}
          </Box>
          <Box flex="1">
            <Typography component="h5" fontWeight="bold" fontSize="1.71rem">
              {`${review.reviewer.name} ${review.reviewer.sur_name}`}
            </Typography>
            <Box margin=".71rem 0 1rem 0">
              <Typography fontSize="1rem">
                {review.text}
              </Typography>
            </Box>
            <Box marginTop="1rem" display="flex" flexDirection="column" alignItems="flex-end">
              <Box>
                {[1, 2, 3, 4, 5].map((rating) => (rating <= review.rating
                  ? (
                    <StarIcon
                      key={rating}
                      sx={(theme) => ({
                        color: theme.palette.secondary.main,
                        width: '2rem',
                        height: '2rem',
                      })}
                    />
                  )
                  : (
                    <StarBorderIcon
                      key={rating}
                      sx={(theme) => ({
                        color: theme.palette.secondary.main,
                        width: '2rem',
                        height: '2rem',
                      })}
                    />
                  )))}
              </Box>
              <Typography component="span" fontSize="1rem" marginTop=".71rem">
                {format(new Date(review.created_at), 'dd MMMM yyyy', { locale: ru })}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default memo(ReviewsList);
