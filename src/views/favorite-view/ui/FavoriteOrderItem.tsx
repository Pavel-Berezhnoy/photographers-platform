import { useState } from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Box, Button, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppOrderCard from '../../../app-components/app-order-card';
import AppOrderDetailDialog from '../../../app-components/app-order-detail-dialog';
import { IFavoriteOrder } from '../../../constants/types/favorite.d';

interface FavoriteOrderItemProps {
  favoriteOrder: IFavoriteOrder,
}

function FavoriteOrderItem({ favoriteOrder }: FavoriteOrderItemProps) {
  const [toggleOrderDetail, setToggleOrderDetail] = useState(false);

  const toggleOrderDetailHandle = () => setToggleOrderDetail((prevVal) => !prevVal);
  return (
    <AppOrderCard
      key={favoriteOrder.order.title}
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
            {favoriteOrder.order.user.avatar
              ? (
                <img style={{ objectFit: 'cover' }} src={favoriteOrder.order.user.avatar} alt="profile-img" />
              )
              : (
                <AccountCircleIcon sx={{
                  width: '100%', height: '100%',
                }}
                />
              )}
          </Box>
          <Typography fontWeight="bold" textAlign="center">
            {`${favoriteOrder.order.user.name} ${favoriteOrder.order.user.sur_name}`}
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
          {favoriteOrder.order.title}
        </Typography>
      )}
      description={(
        <>
          <Typography color="#D3D3D3" marginBottom=".35rem">
            {`Дата и время: ${new Date(favoriteOrder.order.date).toLocaleDateString()} 
            ${new Date(favoriteOrder.order.date).toLocaleTimeString()}`}
          </Typography>
          <Typography color="#D3D3D3" marginBottom=".71rem">
            {`Продолжительность: ${favoriteOrder.order.duration}`}
          </Typography>
        </>
      )}
      price={(
        <Typography fontWeight="700" fontSize="1.42rem" lineHeight="1.71rem">
          Цена:
          {' '}
          {favoriteOrder.order.price}
          {' '}
          Р.
        </Typography>
      )}
      actions={(
        <>
          <AppOrderDetailDialog
            open={toggleOrderDetail}
            order={favoriteOrder.order}
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

export default FavoriteOrderItem;
