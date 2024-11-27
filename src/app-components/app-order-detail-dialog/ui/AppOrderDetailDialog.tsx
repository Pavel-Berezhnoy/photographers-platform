import {
  Typography, Box, useTheme, useMediaQuery,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import { OrderDetail, OrderDetailContent, OrderValue } from '../style/appOrderDetailDialog';
import { IOrder } from '../../../constants/types/order.d';
import AppButton from '../../app-button';
import { useStore } from '../../../app/store';
import AppDialogTitle from '../../app-dialog-title';

interface AppOrderDetailDialogProps {
  open: boolean,
  onClose: () => void,
  order: IOrder,
}

function AppOrderDetailDialog({ open, onClose, order }: AppOrderDetailDialogProps) {
  const {
    profileStore, chatStore,
  } = useStore();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const linkToChatHandle = () => {
    if (profileStore.getCurrentProfile) {
      const temporaryChat = {
        id: -1,
        first_user: { ...profileStore.getCurrentProfile },
        second_user: { ...order.user },
      };
      chatStore.setCurrentChat = temporaryChat;
      chatStore.addTempChat(temporaryChat);
    }
    if (isMobile) {
      navigate(`/canie-chat/${order.user.id}`);
    } else {
      navigate('/canie-chat');
    }
  };

  return (
    <OrderDetail fullScreen={isMobile} open={open} onClose={onClose}>
      <AppDialogTitle title={order.title} onClose={onClose} />
      <OrderDetailContent>
        <Box display="flex" marginBottom="1.42rem" gap="1.42rem" flexWrap="wrap">
          <Box sx={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginBottom: '.5rem',
            color: (theme) => theme.palette.text.secondary,
          }}
          >
            {order.user.avatar
              ? (
                <img style={{ objectFit: 'cover' }} src={order.user.avatar} alt="profile-img" />
              )
              : (
                <AccountCircleIcon sx={{ width: '100%', height: '100%' }} />
              )}
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography fontWeight="bold" textAlign="center" fontSize="1.42rem" marginBottom="1rem">
              {`${order.user.name} ${order.user.sur_name}`}
            </Typography>
            <Box display="flex" gap=".71rem">
              {profileStore.getCurrentProfile?.id !== order.user.id && (
                <>
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
                  <Link to={`/profile/${order.user.id}`}>
                    <AppButton
                      sx={{ padding: '.5rem 1.42rem' }}
                      disableElevation
                      size="small"
                      color="secondary"
                    >
                      Профиль
                    </AppButton>
                  </Link>
                </>
              )}
            </Box>
          </Box>
        </Box>
        <Box marginBottom="1.42rem">
          <Typography component="h3" fontSize="1.42rem" fontWeight="bold" marginBottom=".71rem">
            Описание
          </Typography>
          <Box sx={(theme) => ({
            borderRadius: '.71rem',
            border: '1px solid',
            borderColor: theme.palette.secondary.main,
            padding: '.71rem',
          })}
          >
            <Typography>{order.details}</Typography>
          </Box>
        </Box>
        <Box display="flex" flexWrap="wrap" marginBottom="1.42rem">
          <Typography marginRight="8px" component="h3" fontSize="1.42rem" fontWeight="bold">
            Дата и время
          </Typography>
          <OrderValue>
            <Typography>
              {`${new Date(order.date).toLocaleDateString()} ${new Date(order.date).toLocaleTimeString()}`}
            </Typography>
          </OrderValue>
        </Box>
        <Box display="flex" flexWrap="wrap" marginBottom="1.42rem">
          <Typography marginRight="8px" component="h3" fontSize="1.42rem" fontWeight="bold">
            Продолжительность
          </Typography>
          <OrderValue>
            <Typography>
              {order.duration}
            </Typography>
          </OrderValue>
        </Box>
        <Box display="flex" flexWrap="wrap" marginBottom="1.42rem">
          <Typography marginRight="8px" component="h3" fontSize="1.42rem" fontWeight="bold">
            Адрес
          </Typography>
          <OrderValue>
            <Typography>
              {order.address}
            </Typography>
          </OrderValue>
        </Box>
        <Box display="flex" flexWrap="wrap" marginBottom="1.42rem">
          <Typography marginRight="8px" component="h3" fontSize="1.42rem" fontWeight="bold">
            Тип съемки
          </Typography>
          <OrderValue>
            <Typography>
              {order.shoot_type}
            </Typography>
          </OrderValue>
        </Box>
        <Box display="flex" flexWrap="wrap" marginBottom="1.42rem">
          <Typography marginRight="8px" component="h3" fontSize="1.42rem" fontWeight="bold">
            Цена
          </Typography>
          <OrderValue>
            <Typography>
              {order.price}
            </Typography>
          </OrderValue>
        </Box>
        <Box display="flex" flexWrap="wrap" marginBottom="1.42rem">
          <Typography marginRight="8px" component="h3" fontSize="1.42rem" fontWeight="bold">
            Тема съемки
          </Typography>
          <OrderValue>
            <Typography>
              {order.location}
            </Typography>
          </OrderValue>
        </Box>
      </OrderDetailContent>
    </OrderDetail>
  );
}

export default AppOrderDetailDialog;
