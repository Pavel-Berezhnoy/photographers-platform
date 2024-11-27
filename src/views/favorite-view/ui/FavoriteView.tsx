import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import AppTabButton from '../../../app-components/app-tab-button';
import { CardsWrapper } from '../style/favoriteView';
import FavoriteProfileItem from './FavoriteProfileItem';
import FavoriteOrderItem from './FavoriteOrderItem';
import AppBackgroundRound from '../../../app-components/app-background-round';
import { useStore } from '../../../app/store';
import AppLoadingComponent from '../../../app-components/app-loading-component';

type FavoriteType = 'orders' | 'profiles'

function FavoriteView() {
  const [favoriteType, setFavoriteType] = useState<FavoriteType>('profiles');
  const {
    favoriteStore:
    {
      fetchFavoriteOrders,
      fetchFavoriteUsers,
      getFavoriteOrders,
      getFavoriteUsers,
      getFavoriteLoading,
    },
  } = useStore();

  useEffect(() => {
    if (favoriteType === 'profiles') {
      fetchFavoriteUsers();
    }
    if (favoriteType === 'orders') {
      fetchFavoriteOrders();
    }
  }, [favoriteType, fetchFavoriteOrders, fetchFavoriteUsers]);

  const setProfilesTypeHandle = () => setFavoriteType('profiles');
  const setOrdersTypeHandle = () => setFavoriteType('orders');
  return (
    <Box sx={{
      padding: '2rem 16px', maxWidth: '930px', margin: '0 auto', marginTop: '4rem',
    }}
    >
      <AppBackgroundRound />
      <Typography fontSize="2.57rem" fontWeight="bold" textAlign="center">
        Избранное
      </Typography>
      <Box marginBottom="1.71rem" marginTop="4rem" display="flex" gap="1rem">
        <AppTabButton
          active={favoriteType === 'profiles'}
          variant="outlined"
          color="secondary"
          onClick={setProfilesTypeHandle}
        >
          Профили
        </AppTabButton>
        <AppTabButton
          active={favoriteType === 'orders'}
          variant="outlined"
          color="secondary"
          onClick={setOrdersTypeHandle}
        >
          Заказы
        </AppTabButton>
      </Box>
      <AppLoadingComponent isLoading={getFavoriteLoading}>
        {favoriteType === 'profiles' && getFavoriteUsers.length === 0 && (
          <Typography variant="h3" textAlign="center" width="100%" fontSize="1.71rem">
            Вы еще не добавили пользователей в избранное
          </Typography>
        )}
        {favoriteType === 'orders' && getFavoriteOrders.length === 0 && (
          <Typography variant="h3" textAlign="center" width="100%" fontSize="1.71rem">
            Вы еще не добавили заказы в избранное
          </Typography>
        )}
        <CardsWrapper>
          {favoriteType === 'profiles' && getFavoriteUsers.map((profile) => (
            <FavoriteProfileItem key={profile.id} favoriteProfile={profile} />
          ))}
          {favoriteType === 'orders' && getFavoriteOrders.map((order) => (
            <FavoriteOrderItem key={order.id} favoriteOrder={order} />
          ))}
        </CardsWrapper>
      </AppLoadingComponent>
    </Box>
  );
}

export default observer(FavoriteView);
