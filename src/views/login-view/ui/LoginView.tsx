import {
  Box, Typography, TextField, Checkbox, FormControlLabel,
} from '@mui/material';
import { memo, useState, ChangeEvent } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/Logo.svg';
import {
  RegisterLink, AuthContainer, ImageContainer,
} from '../styles/loginView';
import { schema } from '../validation';
import { checkTokenAndFetchUser, login } from '../../../services/api/http/authApi';
import { setAccessToken, setRefreshToken } from '../../../services/token-service';
import AppButton from '../../../app-components/app-button';
import { useStore } from '../../../app/store';

function LoginView() {
  const [rememberLogin, setRememberLogin] = useState<boolean>(false);
  const navigate = useNavigate();
  const { profileStore } = useStore();

  const rememberLoginHandle = (e: ChangeEvent, checked: boolean) => {
    setRememberLogin(checked);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: schema,
    onSubmit: async (values) => {
      const loginResponse = await login({ email: values.email, password: values.password });
      if (loginResponse.status === 200) {
        if (rememberLogin) {
          setRefreshToken(loginResponse.data.refreshToken);
        }
        setAccessToken(loginResponse.data.accessToken);
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
              <Typography>Вход</Typography>
            </Box>
            <TextField
              sx={(theme) => ({
                minHeight: '58px',
                marginBottom: '1.07rem',
              })}
              value={formik.values.email}
              name="email"
              size="small"
              color="secondary"
              placeholder="Электронная почта"
              onChange={formik.handleChange}
              error={!!formik.errors.email}
              helperText={formik.errors.email}
            />
            <TextField
              sx={(theme) => ({
                minHeight: '58px',
                marginBottom: '.5rem',
              })}
              value={formik.values.password}
              name="password"
              type="password"
              size="small"
              color="secondary"
              placeholder="Введите пароль"
              onChange={formik.handleChange}
              error={!!formik.errors.password}
              helperText={formik.errors.password}
            />
            <Box>
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={rememberLogin}
                    color="secondary"
                    size="small"
                    onChange={rememberLoginHandle}
                  />
                )}
                label="Запомнить меня"
              />
            </Box>
            <Box marginTop="1.78rem" display="flex" alignItems="center" flexDirection="column">
              <AppButton
                sx={{
                  padding: '.71rem 6.71rem',
                  marginBottom: '1.42rem',
                }}
                type="submit"
                color="secondary"
              >
                Войти
              </AppButton>
              <Typography>
                Нет аккаунта?
                {' '}
                <RegisterLink to="/register">Зарегистрироваться</RegisterLink>
              </Typography>
            </Box>
          </Box>
        </Box>
      </AuthContainer>
      <ImageContainer>
        <img style={{ objectFit: 'cover' }} src="./assets/login-bg.png" alt="" />
      </ImageContainer>
    </Box>
  );
}

export default memo(LoginView);
