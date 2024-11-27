import {
  Box, Table, TableBody, TableHead, TableRow, Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import OrderCell from './OrderCell';
import { useStore } from '../../../app/store';
import AppLoadingComponent from '../../../app-components/app-loading-component';
import { myOrdersHeaders } from '../constants/myOrdersView';
import MyOrderRow from './MyOrderRow';

function MyOrdersView() {
  const {
    profileStore: {
      fetchProfileOrders,
      clearProfileOrders,
      getProfileOrders,
      getProfileOrdersLoading,
    },
  } = useStore();

  useEffect(() => {
    fetchProfileOrders();
    return () => {
      clearProfileOrders();
    };
  }, [clearProfileOrders, fetchProfileOrders]);
  return (
    <Box className="wrapper">
      <Typography
        marginTop="4rem"
        marginBottom="4rem"
        variant="h1"
        textAlign="center"
        fontSize="1.71rem"
      >
        Мои заказы
      </Typography>
      <AppLoadingComponent isLoading={getProfileOrdersLoading}>
        <Table>
          <TableHead>
            <TableRow>
              {myOrdersHeaders.map((orderHead) => (
                <OrderCell key={orderHead}>{orderHead}</OrderCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {getProfileOrders.length
              ? getProfileOrders.map((order) => (
                <MyOrderRow key={order.id} order={order} />
              ))
              : (
                <TableRow>
                  <OrderCell align="center" colSpan={myOrdersHeaders.length}>
                    <Typography component="h5" fontSize="1.42rem">Заказов пока нет</Typography>
                  </OrderCell>
                </TableRow>
              )}
          </TableBody>
        </Table>
      </AppLoadingComponent>
    </Box>
  );
}

export default observer(MyOrdersView);
