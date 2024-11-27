import {
  useState, ReactNode, MouseEvent, useCallback, useEffect,
} from 'react';
import {
  Box, Avatar, Typography, IconButton, useMediaQuery, useTheme,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { Link, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { LogoLink, NavbarWrapper } from '../styles/navbar';
import Logo from '../../../assets/Logo.svg';
import AppButton from '../../../app-components/app-button';
import NavList from './NavList';
import OrderForm from './OrderForm';
import NavListMobile from './NavListMobile';
import { useStore } from '../../../app/store';
import NavMenu from './NavMenu';

interface NavbarProps {
  children?: ReactNode
}

function Navbar({ children }: NavbarProps) {
  const location = useLocation();
  const { profileStore } = useStore();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isLogin = !!profileStore.getCurrentProfile;

  const [toggleNavMenu, setToggleNavMenu] = useState<HTMLElement | null>(null);
  const [toggleOrderForm, setToggleOrderForm] = useState(false);
  const [activeItem, setActiveItem] = useState<string>(location.pathname);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const toggleOrderFormHandle = useCallback(() => {
    setToggleOrderForm((prevValue) => !prevValue);
  }, []);
  const openNavMenuHandle = (e: MouseEvent<HTMLElement>) => setToggleNavMenu(e.currentTarget);
  const closeNavMenuHandle = () => setToggleNavMenu(null);
  return (
    <>
      <NavbarWrapper sx={{ padding: isMobile ? '.5rem 0' : '3.28rem 0' }} position="static">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
          className="wrapper"
        >
          <Box flex="1">
            <LogoLink to="/" onClick={() => setActiveItem('/')}>
              <img src={Logo} alt="" />
            </LogoLink>
          </Box>
          {isLogin && !isMobile && <NavList activeItem={activeItem} onChangePage={setActiveItem} />}
          <Box
            flex="0 1 30%"
            justifyContent="flex-end"
            display="flex"
            alignItems="center"
            gap="1rem"
          >
            {isLogin
              ? (
                <>
                  <OrderForm open={toggleOrderForm} onClose={toggleOrderFormHandle} />
                  {!isMobile && (
                    <AppButton
                      sx={{ padding: '6px 36px', borderRadius: '7.6px', whiteSpace: 'nowrap' }}
                      size="small"
                      color="secondary"
                      onClick={toggleOrderFormHandle}
                    >
                      Разместить заказ
                    </AppButton>
                  )}
                  <Link to="/canie-chat" onClick={() => setActiveItem('/chats')}>
                    <IconButton color="secondary">
                      <Box display="flex" color={(theme) => theme.palette.secondary.contrastText}>
                        <EmailIcon />
                      </Box>
                    </IconButton>
                  </Link>
                  <Typography component="h3">
                    {profileStore.getCurrentProfile.name}
                  </Typography>
                  <IconButton color="secondary" size="small" onClick={openNavMenuHandle}>
                    <Avatar
                      src={profileStore.getCurrentProfile.avatar}
                      sx={{ width: '2.71rem', height: '2.71rem' }}
                    />
                  </IconButton>
                  <NavMenu
                    anchorEl={toggleNavMenu}
                    onClose={closeNavMenuHandle}
                    onChangePage={setActiveItem}
                  />
                </>
              )
              : (
                <Link to="/login" onClick={() => setActiveItem('/login')}>
                  <AppButton color="secondary" sx={{ padding: '6px 36px', borderRadius: '7.6px' }} size="small">
                    Войти
                  </AppButton>
                </Link>
              )}
          </Box>
          {isLogin && isMobile && (
            <NavListMobile
              activeItem={activeItem}
              onChangePage={setActiveItem}
              toggleOrderFormHandle={toggleOrderFormHandle}
            />
          )}
        </Box>
      </NavbarWrapper>
      {children}
    </>
  );
}

export default observer(Navbar);
