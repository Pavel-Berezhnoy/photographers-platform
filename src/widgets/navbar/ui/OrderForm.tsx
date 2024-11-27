import {
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
  TextField,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useFormik } from 'formik';
import parse from 'date-fns/parse';
import { observer } from 'mobx-react-lite';
import { OrderDialog, TypeContainer } from '../styles/orderForm';
import { timesList } from '../constants/orderForm';
import { OrderStatuses, ShootingPlaces, ShootingTypes } from '../../../constants/types/order.d';
import AppTabButton from '../../../app-components/app-tab-button';
import { scheme } from '../validation/orderForm';
import AppDialogTitle from '../../../app-components/app-dialog-title';
import { useStore } from '../../../app/store';

interface OrderFormProps {
  open: boolean,
  onClose: () => void,
}

function OrderForm({ open, onClose }: OrderFormProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { profileStore: { createProfileOrder } } = useStore();
  const formik = useFormik({
    initialValues: {
      shoot_type: ShootingTypes.TFP,
      title: '',
      details: '',
      date: '',
      duration: timesList[0],
      location: ShootingPlaces.HOME,
      address: '',
      price: '',
    },
    validationSchema: scheme,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      await createProfileOrder({
        ...values,
        price: Number(values.price),
        date: parse(values.date, 'dd.MM.yyyy HH:mm', new Date()),
        status: OrderStatuses.OPEN,
      });
      onClose();
    },
  });
  return (
    <OrderDialog
      open={open}
      onClose={onClose}
      fullScreen={isMobile}
    >
      <form onSubmit={formik.handleSubmit} style={{ display: 'contents' }}>
        <AppDialogTitle title="Размещение заказа" onClose={onClose} />
        <DialogContent sx={{
          color: (theme) => theme.palette.text.secondary,
        }}
        >
          <Box sx={{
            margin: '0 auto',
            maxWidth: '640px',
            width: '100%',
          }}
          >
            <Box>
              <Typography variant="h3" fontSize="1.5rem" marginBottom="1.42rem">
                Выбор съемки
              </Typography>
              <Box display="flex">
                <TypeContainer>
                  <AppTabButton
                    active={ShootingTypes.TFP === formik.values.shoot_type}
                    disableElevation
                    color="secondary"
                    onClick={() => formik.setFieldValue('shoot_type', ShootingTypes.TFP)}
                  >
                    ТФП
                  </AppTabButton>
                  <AppTabButton
                    active={ShootingTypes.PAYED === formik.values.shoot_type}
                    disableElevation
                    color="secondary"
                    onClick={() => formik.setFieldValue('shoot_type', ShootingTypes.PAYED)}
                  >
                    Оплачиваемая
                  </AppTabButton>
                </TypeContainer>
              </Box>
            </Box>
            <Box>
              <Typography variant="h3" fontSize="1.5rem" marginBottom="1.42rem">
                Описание заказа
              </Typography>
              <Box sx={{
                marginBottom: '1.14rem',
              }}
              >
                <TextField
                  fullWidth
                  size="small"
                  name="title"
                  value={formik.values.title}
                  color="secondary"
                  placeholder="Какое у Вас событие?"
                  sx={{ marginBottom: '.5rem', minHeight: '58px' }}
                  onChange={formik.handleChange}
                  error={!!formik.errors.title}
                  helperText={formik.errors.title}
                />
                <TextField
                  fullWidth
                  size="small"
                  name="details"
                  multiline
                  maxRows={4}
                  value={formik.values.details}
                  color="secondary"
                  placeholder="Детали заказа"
                  sx={{ marginBottom: '.5rem', minHeight: '58px' }}
                  onChange={formik.handleChange}
                  error={!!formik.errors.details}
                  helperText={formik.errors.details}
                />
              </Box>
            </Box>
            <Box>
              <Typography variant="h3" fontSize="1.5rem" marginBottom="1.42rem">
                Дата и время
              </Typography>
              <Box sx={{ marginBottom: '1.14rem' }}>
                <TextField
                  fullWidth
                  size="small"
                  name="date"
                  value={formik.values.date}
                  color="secondary"
                  placeholder="Укажите дату и время события"
                  sx={{ marginBottom: '.5rem', minHeight: '58px' }}
                  onChange={formik.handleChange}
                  error={!!formik.errors.date}
                  helperText={formik.errors.date}
                />
                <TextField
                  fullWidth
                  size="small"
                  name="duration"
                  value={formik.values.duration}
                  color="secondary"
                  placeholder="Продолжительность съемки"
                  select
                  sx={{ marginBottom: '.5rem', minHeight: '58px' }}
                  onChange={formik.handleChange}
                  error={!!formik.errors.duration}
                  helperText={formik.errors.duration}
                >
                  {timesList.map((time) => <MenuItem key={time} value={time}>{time}</MenuItem>)}
                </TextField>
              </Box>
            </Box>
            <Box>
              <Typography variant="h3" fontSize="1.5rem" marginBottom="1.42rem">
                Место
              </Typography>
              <Box sx={{
                marginBottom: '1.14rem',
              }}
              >
                <Box display="flex">
                  <TypeContainer>
                    <AppTabButton
                      active={ShootingPlaces.HOME === formik.values.location}
                      disableElevation
                      color="secondary"
                      onClick={() => formik.setFieldValue('location', ShootingPlaces.HOME)}
                    >
                      {ShootingPlaces.HOME}
                    </AppTabButton>
                    <AppTabButton
                      active={ShootingPlaces.PHOTO_STUDIO === formik.values.location}
                      disableElevation
                      color="secondary"
                      onClick={() => formik.setFieldValue('location', ShootingPlaces.PHOTO_STUDIO)}
                    >
                      {ShootingPlaces.PHOTO_STUDIO}
                    </AppTabButton>
                    <AppTabButton
                      active={ShootingPlaces.NATURE === formik.values.location}
                      disableElevation
                      color="secondary"
                      onClick={() => formik.setFieldValue('location', ShootingPlaces.NATURE)}
                    >
                      {ShootingPlaces.NATURE}
                    </AppTabButton>
                  </TypeContainer>
                </Box>
                <TextField
                  fullWidth
                  size="small"
                  color="secondary"
                  name="address"
                  value={formik.values.address}
                  placeholder="Укажите адрес"
                  sx={{ marginBottom: '.5rem', minHeight: '58px' }}
                  onChange={formik.handleChange}
                  error={!!formik.errors.address}
                  helperText={formik.errors.address}
                />
              </Box>
            </Box>
            <Box>
              <Typography variant="h3" fontSize="1.5rem" marginBottom="1.42rem">
                Бюджет
              </Typography>
              <Box sx={{
                display: 'flex',
                marginBottom: '1.14rem',
                gap: '1rem',
              }}
              >
                <TextField
                  fullWidth
                  name="price"
                  value={formik.values.price}
                  size="small"
                  color="secondary"
                  placeholder="Введите желаемую цену в рублях"
                  sx={{ marginBottom: '.5rem', minHeight: '58px' }}
                  onChange={formik.handleChange}
                  error={!!formik.errors.price}
                  helperText={formik.errors.price}
                />
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', padding: '1rem 0' }}>
          <Button
            sx={{ padding: '.75rem 2.5rem', fontSize: '1rem' }}
            color="secondary"
            type="submit"
            disableElevation
          >
            Опубликовать
          </Button>
        </DialogActions>
      </form>
    </OrderDialog>
  );
}

export default observer(OrderForm);
