import { useEffect, useState } from 'react';
import {
  Box, Button, useMediaQuery, useTheme,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import AppProfile from '../../../app-components/app-profile';
import MoreDialog from '../../../app-components/app-profile-more-dialog';
import { useStore } from '../../../app/store';
import AppLoadingComponent from '../../../app-components/app-loading-component';
import NotFoundWidget from '../../../widgets/not-found-widget';
import AppUserFavoriteButton from '../../../app-components/app-user-favorite-button';

function ProfileView() {
  const [toggleMoreDialog, setToggleMoreDialog] = useState(false);
  const {
    usersStore: {
      getUserProfileLoading,
      getUserProfile,
      fetchUserProfile,
      clearUserProfile,
    },
    favoriteStore: {
      updateFavoriteUsers,
      deleteFavoriteUser,
    },
  } = useStore();
  const theme = useTheme();
  const { id } = useParams();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserProfile(Number(id) || -1);
    return () => {
      clearUserProfile();
    };
  }, [clearUserProfile, fetchUserProfile, id]);

  const linkToChatHandle = () => {
    if (isMobile) {
      navigate(`/canie-chat/${getUserProfile?.id}`);
    } else {
      navigate('/canie-chat');
    }
  };
  const toggleMoreDialogHandle = () => {
    setToggleMoreDialog((prevState) => !prevState);
  };
  const addUserToFavoriteHandle = async () => {
    await updateFavoriteUsers(getUserProfile?.id || -1);
    fetchUserProfile(Number(id) || -1);
  };
  const removeUserFromFavoriteHandle = async () => {
    await deleteFavoriteUser(getUserProfile?.id || -1);
    fetchUserProfile(Number(id) || -1);
  };
  return (
    <AppLoadingComponent isLoading={getUserProfileLoading}>
      <NotFoundWidget isNotFound={!getUserProfile}>
        <MoreDialog
          open={toggleMoreDialog}
          about={getUserProfile?.about}
          link={getUserProfile?.link}
          phone={getUserProfile?.phone}
          onClose={toggleMoreDialogHandle}
        />
        {getUserProfile && (
          <AppProfile
            profile={getUserProfile}
            addMedia
            actions={(
              <Box display="flex" gap="2rem" alignItems="center">
                <AppUserFavoriteButton
                  inFavorite={getUserProfile.in_favorite || false}
                  onAddFavorite={addUserToFavoriteHandle}
                  onDeleteFavorite={removeUserFromFavoriteHandle}
                />
                <Button sx={{ padding: '8px 24px' }} color="secondary" onClick={toggleMoreDialogHandle}>
                  Больше
                </Button>
                <Button
                  sx={{ padding: '8px 24px' }}
                  LinkComponent="a"
                  color="secondary"
                  onClick={linkToChatHandle}
                >
                  Связаться
                </Button>
              </Box>
            )}
          />
        )}
      </NotFoundWidget>
    </AppLoadingComponent>
  );
}

export default observer(ProfileView);
