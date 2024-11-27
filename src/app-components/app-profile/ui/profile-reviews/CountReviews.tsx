import { Box, IconButton } from '@mui/material';
import { memo, useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ReviewForm from './ReviewForm';

function CountReviews() {
  const [hightlightStars, setHightlightStars] = useState<number | null>(null);
  const [toggleReviewForm, setToggleReviewForm] = useState(false);
  const [rate, setRate] = useState<number | null>(null);

  const highlightStarsHandle = (ratingIndex: number) => {
    setHightlightStars(ratingIndex);
  };
  const clearHighlightStarsHandle = () => {
    setHightlightStars(null);
  };
  const toggleReviewFormHandle = () => setToggleReviewForm((prevValue) => !prevValue);
  const openReviewFormHandle = (newRate: number) => {
    toggleReviewFormHandle();
    setRate(newRate);
  };
  const closeReviewFormHandle = () => {
    toggleReviewFormHandle();
    setRate(null);
    setHightlightStars(null);
  };
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <ReviewForm
        rating={rate}
        open={toggleReviewForm}
        onClose={closeReviewFormHandle}
      />
      {[1, 2, 3, 4, 5].map((rating) => (
        <IconButton
          key={rating}
          size="small"
          onMouseOver={() => highlightStarsHandle(rating)}
          onMouseLeave={clearHighlightStarsHandle}
          onClick={() => openReviewFormHandle(rating)}
        >
          {hightlightStars && rating <= hightlightStars
            ? (
              <StarIcon
                sx={(theme) => ({
                  color: theme.palette.secondary.main,
                  width: '2rem',
                  height: '2rem',
                })}
              />
            )
            : (
              <StarBorderIcon
                sx={(theme) => ({
                  color: theme.palette.secondary.main,
                  width: '2rem',
                  height: '2rem',
                })}
              />
            )}
        </IconButton>
      ))}
    </Box>
  );
}

export default memo(CountReviews);
