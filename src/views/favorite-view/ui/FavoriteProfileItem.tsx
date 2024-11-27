import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import AppProfileCard from '../../../app-components/app-profile-card';
import AppProfileDetailDialog from '../../../app-components/app-profile-detail-dialog';
import { IFavoriteProfile } from '../../../constants/types/favorite.d';
import AppProfileCardRating from '../../../app-components/app-profile-card-rating';

interface FavoriteProfileItemProps {
  favoriteProfile: IFavoriteProfile,
}

function FavoriteProfileItem({ favoriteProfile }: FavoriteProfileItemProps) {
  const [toggleDetailDialog, setToggleDetailDialog] = useState(false);

  const toggleDetailDialogHandle = () => setToggleDetailDialog((prevVal) => !prevVal);
  return (
    <>
      <AppProfileDetailDialog
        open={toggleDetailDialog}
        profile={favoriteProfile.target}
        onClose={toggleDetailDialogHandle}
      />
      <AppProfileCard
        key={favoriteProfile.target.name}
        image={favoriteProfile.target.avatar}
        title={(
          <Typography fontWeight="700" fontSize="1.42rem" lineHeight="1.71rem">
            {`${favoriteProfile.target.name} ${favoriteProfile.target.sur_name}`}
          </Typography>
        )}
        description={(
          <Typography
            sx={{
              maxHeight: '82px',
              display: '-webkit-box',
              WebkitLineClamp: '4',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
            color="#AFAFAF"
          >
            {favoriteProfile.target.about}
          </Typography>
        )}
        actions={(
          <Box display="flex" justifyContent="space-between" alignItems="flex-end">
            <AppProfileCardRating
              countReviews={favoriteProfile.target.count_reviews}
              rating={favoriteProfile.target.rating}
            />
            <Button
              sx={{
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
              }}
              disableElevation
              size="small"
              color="secondary"
              onClick={toggleDetailDialogHandle}
            >
              Подробнее
              <TrendingFlatIcon sx={{ fontSize: '10px', marginLeft: '4px' }} />
            </Button>
          </Box>
        )}
      />
    </>
  );
}

export default FavoriteProfileItem;
