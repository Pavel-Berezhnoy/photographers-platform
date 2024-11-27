import {
  Box, Typography, TextField, Checkbox,
} from '@mui/material';
import { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Logo from '../../../assets/Logo.svg';
import {
  LoginLink, AuthContainer, ImageContainer, Agreement,
} from '../styles/registerView';
import { checkTokenAndFetchUser, register } from '../../../services/api/http/authApi';
import { setAccessToken, setRefreshToken } from '../../../services/token-service';
import { schema } from '../validation';
import AppTabButton from '../../../app-components/app-tab-button';
import AppButton from '../../../app-components/app-button';
import { AccountType } from '../../../constants/types/profile.d';
import { useStore } from '../../../app/store';

function LoginView() {
  const navigate = useNavigate();
  const { profileStore } = useStore();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      surname: '',
      license: false,
      accountType: AccountType.PHOTO,
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: schema,
    onSubmit: async (values) => {
      const registerResponse = await register({
        email: values.email,
        password: values.password,
        name: values.name,
        surname: values.surname,
        accountType: values.accountType,
      });
      if (registerResponse.status === 200) {
        setRefreshToken(registerResponse.data.refreshToken);
        setAccessToken(registerResponse.data.accessToken);
        const userResponse = await checkTokenAndFetchUser();
        if (userResponse.status === 200) {
          profileStore.setCurrentProfile = userResponse.data;
        }
        navigate('/my-profile');
      }
    },
  });
  return (
    <Box height="100%" display="flex" position="relative" alignItems="center">
      <AuthContainer onSubmit={formik.handleSubmit}>
        <Box maxWidth="7.64rem">
          <Link to="/"><img src={Logo} alt="logo" /></Link>
        </Box>
        <Box
          color={(theme) => theme.palette.text.secondary}
          flex="1"
          display="flex"
          alignItems="center"
        >
          <Box maxWidth="480px" padding="2rem 0" width="100%" display="flex" flexDirection="column">
            <Box marginBottom="2.14rem">
              <Typography>Регистрация</Typography>
            </Box>
            <Box display="flex" gap="2.14rem">
              <TextField
                sx={{
                  minHeight: '58px',
                  marginBottom: '1.07rem',
                }}
                size="small"
                name="name"
                value={formik.values.name}
                color="secondary"
                placeholder="Имя"
                fullWidth
                onChange={formik.handleChange}
                error={!!formik.errors.name}
                helperText={formik.errors.name}
              />
              <TextField
                sx={{
                  minHeight: '58px',
                  marginBottom: '.5rem',
                }}
                size="small"
                value={formik.values.surname}
                name="surname"
                color="secondary"
                placeholder="Фамилия"
                fullWidth
                onChange={formik.handleChange}
                error={!!formik.errors.surname}
                helperText={formik.errors.surname}
              />
            </Box>
            <TextField
              sx={{
                minHeight: '58px',
                marginBottom: '1.07rem',
              }}
              size="small"
              type="email"
              name="email"
              value={formik.values.email}
              color="secondary"
              placeholder="Электронная почта"
              onChange={formik.handleChange}
              error={!!formik.errors.email}
              helperText={formik.errors.email}
            />
            <TextField
              sx={{ minHeight: '58px' }}
              value={formik.values.password}
              size="small"
              type="password"
              name="password"
              color="secondary"
              placeholder="Придумайте пароль"
              onChange={formik.handleChange}
              error={!!formik.errors.password}
              helperText={formik.errors.password}
            />
            <Box display="flex" justifyContent="center" gap="3.57rem" marginTop="2.07rem">
              <AppTabButton
                active={formik.values.accountType === AccountType.PHOTO}
                color="secondary"
                onClick={() => formik.setFieldValue('accountType', AccountType.PHOTO)}
              >
                Я - фотограф
              </AppTabButton>
              <AppTabButton
                active={formik.values.accountType === AccountType.MODEL}
                color="secondary"
                onClick={() => formik.setFieldValue('accountType', AccountType.MODEL)}
              >
                Я - модель
              </AppTabButton>
            </Box>
            <Box margin="2.85rem 0" display="flex" justifyContent="center">
              <Checkbox
                sx={(theme) => ({
                  color: formik.errors.license
                    ? theme.palette.error.main
                    : theme.palette.text.secondary,
                })}
                checked={formik.values.license}
                name="license"
                size="small"
                onChange={formik.handleChange}
              />
              <Typography component="h5">
                Регистрируясь, вы принимаете условия
                {' '}
                <Agreement href="https://disk.yandex.ru/d/drrow_J0LcMPNg" target="_blank">Пользовательского соглашения</Agreement>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <AppButton
                sx={{
                  padding: '.71rem 2.07rem',
                  marginBottom: '1.42rem',
                }}
                type="submit"
                color="secondary"
              >
                Зарегистрироваться
              </AppButton>
              <Typography>
                Есть аккаунт?
                {' '}
                <LoginLink to="/login">Авторизоваться</LoginLink>
              </Typography>
            </Box>
          </Box>
        </Box>
      </AuthContainer>
      <ImageContainer>
        <img style={{ objectFit: 'cover' }} src="./assets/register-bg.png" alt="" />
      </ImageContainer>
    </Box>
  );
}

export default memo(LoginView);
