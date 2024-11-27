import { Box, Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { memo } from 'react';

interface AppProfileCardRatingProps {
  rating: number,
  countReviews: number,
}

function AppProfileCardRating({ rating, countReviews }: AppProfileCardRatingProps) {
  return (
    <div>
      <Box display="flex">
        {[1, 2, 3, 4, 5].map((rate) => (rate <= Math.round(rating)
          ? (
            <StarIcon
              key={rate}
              color="warning"
              sx={{ '& path': { width: '16px', height: '16px' } }}
            />
          )
          : (
            <StarBorderIcon
              key={rate}
              color="warning"
              sx={{ '& path': { width: '16px', height: '16px' } }}
            />
          )))}
      </Box>
      <Box sx={(theme) => ({ color: theme.palette.warning.main })}>
        <Typography sx={{ color: 'inherit' }} fontSize=".86rem" fontWeight="bold">
          {countReviews}
          {' '}
          reviews
        </Typography>
      </Box>
    </div>
  );
}

export default memo(AppProfileCardRating);
