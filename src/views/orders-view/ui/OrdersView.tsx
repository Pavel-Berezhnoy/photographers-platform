import { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import SideFilter from '../../../widgets/side-filter';
import { CardsWrapper, ContentWrapper } from '../styles/ordersView';
import OrderItem from './OrderItem';
import AppBackgroundRound from '../../../app-components/app-background-round';
import { useStore } from '../../../app/store';
import AppLoadingComponent from '../../../app-components/app-loading-component';

function OrdersView() {
  const {
    ordersStore,
  } = useStore();

  useEffect(() => {
    ordersStore.fetchOrders({ maxPrice: 0, minPrice: 0 });
    return () => {
      ordersStore.clearOrders();
    };
  }, [ordersStore]);

  const changePageHandle = async () => {
    ordersStore.setOrdersPage = ordersStore.getOrders.meta.page + 1;
    ordersStore.fetchOrders({ maxPrice: 0, minPrice: 0 });
  };
  return (
    <Box className="wrapper" paddingBottom="5.5rem">
      <Typography margin="1.71rem 0 4rem" fontSize="2.57rem" fontWeight="bold" textAlign="center">
        Список заказов
      </Typography>
      <AppBackgroundRound />
      <ContentWrapper marginTop="4rem" display="flex" gap="11px">
        <SideFilter />
        <AppLoadingComponent isLoading={ordersStore.getOrdersLoading}>
          <CardsWrapper color={(theme) => theme.palette.text.secondary}>
            {ordersStore.getOrders.orders.map((order) => (
              <OrderItem key={order.id} order={order} />
            ))}
          </CardsWrapper>
        </AppLoadingComponent>
      </ContentWrapper>
      {ordersStore.getOrders.orders.length !== ordersStore.getOrders.meta.total
        && ordersStore.getOrders.meta.total > ordersStore.getOrders.meta.limit
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

export default observer(OrdersView);
