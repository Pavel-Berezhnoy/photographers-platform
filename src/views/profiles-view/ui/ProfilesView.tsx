import { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { CardsWrapper, ContentWrapper } from '../styles/profileView';
import AppTabButton from '../../../app-components/app-tab-button';
import AppBackgroundRound from '../../../app-components/app-background-round';
import ProfileItem from './ProfileItem';
import { AccountType } from '../../../constants/types/profile.d';
import { useStore } from '../../../app/store';
import AppLoadingComponent from '../../../app-components/app-loading-component';

function ProfilesView() {
  const [profileTypes, setProfileTypes] = useState<AccountType>(AccountType.PHOTO);
  const {
    usersStore,
  } = useStore();

  useEffect(() => {
    usersStore.fetchUsersByAccountType(profileTypes);
  }, [profileTypes, usersStore]);

  useEffect(() => () => {
    usersStore.clearUsersData();
  }, [usersStore]);

  const setPhotoHandle = () => setProfileTypes(AccountType.PHOTO);
  const setModelHandle = () => setProfileTypes(AccountType.MODEL);

  const changePageHandle = () => {
    usersStore.setUsersPage = usersStore.getUsersData.meta.page + 1;
    usersStore.fetchUsersByAccountType(profileTypes);
  };
  return (
    <Box className="wrapper" paddingBottom="5.5rem">
      <Box marginBottom="1.71rem" display="flex" gap="1rem">
        <AppTabButton
          active={profileTypes === AccountType.PHOTO}
          variant="outlined"
          color="secondary"
          onClick={setPhotoHandle}
        >
          Все фотографы
        </AppTabButton>
        <AppTabButton
          active={profileTypes === AccountType.MODEL}
          variant="outlined"
          color="secondary"
          onClick={setModelHandle}
        >
          Все модели
        </AppTabButton>
      </Box>
      <AppBackgroundRound />
      <ContentWrapper display="flex" gap="11px">
        <AppLoadingComponent isLoading={usersStore.getUsersLoading}>
          {usersStore.getUsersListToView.length
            ? (
              <CardsWrapper color={(theme) => theme.palette.text.secondary}>
                {usersStore.getUsersListToView.map((profile) => (
                  <ProfileItem key={profile.id} profile={profile} />
                ))}
              </CardsWrapper>
            )
            : (
              <Typography variant="h3" textAlign="center" width="100%" fontSize="1.71rem">
                К сожалению, в разделе нет пользователей
              </Typography>
            )}
        </AppLoadingComponent>
      </ContentWrapper>
      {usersStore.getUsersData.users.length !== usersStore.getUsersData.meta.total
        && usersStore.getUsersData.meta.total > usersStore.getUsersData.meta.limit
        && (
          <Box display="flex" justifyContent="flex-end" marginTop="1.42rem" onClick={changePageHandle}>
            <Button color="secondary">
              Смотреть еще..
            </Button>
          </Box>
        )}
    </Box>
  );
}

export default observer(ProfilesView);
