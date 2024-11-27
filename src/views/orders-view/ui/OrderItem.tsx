import { useState } from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Box, Button, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IOrder } from '../../../constants/types/order.d';
import AppOrderCard from '../../../app-components/app-order-card';
import AppOrderDetailDialog from '../../../app-components/app-order-detail-dialog';

interface OrderItemProps {
  order: IOrder,
}

function OrderItem({ order }: OrderItemProps) {
  const [toggleOrderDetail, setToggleOrderDetail] = useState(false);

  const toggleOrderDetailHandle = () => setToggleOrderDetail((prevVal) => !prevVal);
  return (
    <AppOrderCard
      key={order.title}
      user={(
        <>
          <Box sx={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginBottom: '.5rem',
          }}
          >
            {order.user.avatar
              ? (
                <img style={{ objectFit: 'cover' }} src={order.user.avatar} alt="profile-img" />
              )
              : (
                <AccountCircleIcon sx={{
                  width: '100%', height: '100%',
                }}
                />
              )}
          </Box>
          <Typography fontWeight="bold" textAlign="center">
            {`${order.user.name} ${order.user.sur_name}`}
          </Typography>
        </>
      )}
      title={(
        <Typography
          component="h3"
          fontWeight="700"
          fontSize="1.42rem"
          textAlign="center"
          lineHeight="1.71rem"
        >
          {order.title}
        </Typography>
      )}
      description={(
        <>
          <Typography color="#D3D3D3" marginBottom=".35rem">
            {`Дата и время: ${new Date(order.date).toLocaleDateString()} ${new Date(order.date).toLocaleTimeString()}`}
          </Typography>
          <Typography color="#D3D3D3" marginBottom=".71rem">
            {`Продолжительность: ${order.duration}`}
          </Typography>
        </>
      )}
      price={(
        <Typography fontWeight="700" fontSize="1.42rem" lineHeight="1.71rem">
          Цена:
          {' '}
          {order.price}
          {' '}
          Р.
        </Typography>
      )}
      actions={(
        <>
          <AppOrderDetailDialog
            open={toggleOrderDetail}
            order={order}
            onClose={toggleOrderDetailHandle}
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
            onClick={toggleOrderDetailHandle}
          >
            Подробнее
            <TrendingFlatIcon sx={{ fontSize: '10px', marginLeft: '4px' }} />
          </Button>
        </>
      )}
    />
  );
}

export default OrderItem;
