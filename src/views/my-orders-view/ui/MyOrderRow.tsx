import {
  Avatar, Box, TableRow, Typography,
} from '@mui/material';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import format from 'date-fns-tz/format';
import OrderCell from './OrderCell';
import AppButton from '../../../app-components/app-button';
import { StatusBlock, StatusBlockType } from '../style/myOrdersView';
import { IOrder, OrderStatuses } from '../../../constants/types/order.d';
import { orderStatusColors } from '../../../constants';
import AppOrderDetailDialog from '../../../app-components/app-order-detail-dialog';

interface MyOrderRowProps {
  order: IOrder,
}

function MyOrderRow({ order }: MyOrderRowProps) {
  const [toggleOrderDetail, setToggleOrderDetail] = useState(false);
  const getStatus = (order: IOrder) => orderStatusColors[order.status];

  const toggleOrderDetailHandle = () => setToggleOrderDetail((prevValue) => !prevValue);
  return (
    <>
      <AppOrderDetailDialog
        open={toggleOrderDetail}
        order={order}
        onClose={toggleOrderDetailHandle}
      />
      <TableRow>
        <OrderCell>
          <Typography component="span" fontSize="1rem">
            {order.id}
          </Typography>
        </OrderCell>
        <OrderCell>
          {order.executant
            ? (
              <Link to={`/profile/${order.executant.id}`}>
                <Box display="inline-flex" gap="16px" alignItems="center">
                  <Avatar
                    src={order.executant.avatar}
                    sx={{ width: '2.71rem', height: '2.71rem' }}
                  />
                  <Typography component="span" fontSize="1rem">
                    {order.executant.name}
                  </Typography>
                </Box>
              </Link>
            )
            : '-'}
        </OrderCell>
        <OrderCell>
          <StatusBlock color={getStatus(order) as StatusBlockType}>
            <Typography color="#000" component="span" textAlign="center">
              {order.status}
            </Typography>
          </StatusBlock>
        </OrderCell>
        <OrderCell>
          <Typography component="span" fontSize="1rem">
            {format(new Date(order.updated_at), 'dd/MM/yyyy')}
          </Typography>
        </OrderCell>
        <OrderCell>
          <Typography
            sx={{
              color: (theme) => theme.palette[getStatus(order) as StatusBlockType].main,
            }}
            component="span"
            fontSize="1rem"
          >
            {`${order.status === OrderStatuses.READY ? '+' : ''} 
          ${order.status === OrderStatuses.CLOSED ? '0 ₽.' : order.price} ₽.`}
          </Typography>
        </OrderCell>
        <OrderCell>
          <AppButton
            sx={{
              padding: '.42rem 1.21rem',
              borderRadius: '5px',
              backgroundColor: '#000',
            }}
            color="secondary"
            onClick={toggleOrderDetailHandle}
          >
            Детали
          </AppButton>
        </OrderCell>
      </TableRow>
    </>
  );
}

export default memo(MyOrderRow);
