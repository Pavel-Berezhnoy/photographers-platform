import { memo, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import AppProfileCard from '../../../app-components/app-profile-card';
import { IProfileToView } from '../../../constants/types/profile.d';
import AppProfileDetailDialog from '../../../app-components/app-profile-detail-dialog';
import AppProfileCardRating from '../../../app-components/app-profile-card-rating';

interface ProfileItemProps {
  profile: IProfileToView,
}

function ProfileItem({ profile }: ProfileItemProps) {
  const [toggleDetailDialog, setToggleDetailDialog] = useState(false);

  const toggleDetailDialogHandle = () => setToggleDetailDialog((prevVal) => !prevVal);
  return (
    <AppProfileCard
      key={profile.id}
      image={profile.avatar}
      title={(
        <Typography fontWeight="700" fontSize="1.42rem" lineHeight="1.71rem">
          {`${profile.name} ${profile.sur_name}`}
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
          {profile.about}
        </Typography>
      )}
      actions={(
        <Box display="flex" justifyContent="space-between" alignItems="flex-end">
          <AppProfileDetailDialog
            open={toggleDetailDialog}
            profile={profile}
            onClose={toggleDetailDialogHandle}
          />
          <AppProfileCardRating
            countReviews={profile.count_reviews}
            rating={profile.rating}
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
  );
}

export default memo(ProfileItem);
