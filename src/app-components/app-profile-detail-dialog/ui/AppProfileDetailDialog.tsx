import {
  Box, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ProfileDetail, ProfileDetailContent } from '../style/appProfileDetailDialog';
import { IProfileToView } from '../../../constants/types/profile.d';
import { useStore } from '../../../app/store';
import AppButton from '../../app-button';
import AppDialogTitle from '../../app-dialog-title';
import AppUserFavoriteButton from '../../app-user-favorite-button';
import AppProfileCardRating from '../../app-profile-card-rating';

interface AppProfileDetailDialogProps {
  profile: IProfileToView,
  onClose: () => void,
  open: boolean,
}

function AppProfileDetailDialog({ profile, open, onClose }: AppProfileDetailDialogProps) {
  const {
    profileStore,
    favoriteStore: {
      deleteFavoriteUser,
      updateFavoriteUsers,
    },
    usersStore: {
      fetchUserProfile,
    },
  } = useStore();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const linkToChatHandle = () => {
    onClose();
    if (isMobile) {
      navigate(`/canie-chat/${profile.id}`);
    } else {
      navigate('/canie-chat');
    }
  };
  const addUserToFavoriteHandle = async () => {
    await updateFavoriteUsers(profile.id);
    fetchUserProfile(Number(profile.id));
  };
  const removeUserFromFavoriteHandle = async () => {
    await deleteFavoriteUser(profile.id);
    fetchUserProfile(Number(profile.id) || -1);
  };

  return (
    <ProfileDetail fullScreen={isMobile} open={open} onClose={onClose}>
      <AppDialogTitle onClose={onClose} />
      <ProfileDetailContent>
        <Box sx={{
          marginBottom: '1.42rem',
          width: '100%',
          borderRadius: '.71rem',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          color: (theme) => theme.palette.text.secondary,
        }}
        >
          {profile.avatar
            ? (
              <img
                style={{
                  objectFit: 'fill',
                  maxHeight: '450px',
                  borderRadius: '.71rem',
                }}
                src={profile.avatar}
                alt=""
              />
            )
            : (
              <AccountCircleIcon sx={{
                width: '100%', height: '100%', maxWidth: '300px',
              }}
              />
            )}
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap=".71rem">
          <Typography variant="h3" fontSize="1.71rem" fontWeight="bold">
            {`${profile.name} ${profile.sur_name}`}
          </Typography>
          {profileStore.getCurrentProfile?.id !== profile.id && (
            <Box display="flex" alignItems="center" gap=".71rem">
              <AppUserFavoriteButton
                inFavorite={profile.in_favorite || false}
                onAddFavorite={addUserToFavoriteHandle}
                onDeleteFavorite={removeUserFromFavoriteHandle}
              />
              <AppButton
                sx={{ padding: '.5rem 1.42rem' }}
                LinkComponent="a"
                disableElevation
                size="small"
                color="secondary"
                onClick={linkToChatHandle}
              >
                Связаться
              </AppButton>
              <Link to={`/profile/${profile.id}`}>
                <AppButton
                  sx={{ padding: '.5rem 1.42rem' }}
                  disableElevation
                  size="small"
                  color="secondary"
                  onClick={onClose}
                >
                  Профиль
                </AppButton>
              </Link>
            </Box>
          )}
        </Box>
        <Box marginTop=".71rem" marginBottom="3rem">
          <AppProfileCardRating
            countReviews={profile.count_reviews}
            rating={profile.rating}
          />
        </Box>
        <Typography>
          {profile.about.split('\n').map((row) => (
            <Typography key={row} variant="body2" minHeight="1rem" fontSize="1rem">{row}</Typography>
          ))}
        </Typography>
      </ProfileDetailContent>
    </ProfileDetail>
  );
}

export default AppProfileDetailDialog;
