import { useState } from 'react';
import {
  List, ListItem, IconButton, Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { menuList } from '../constants/navList';
import { NavLink, NavListMobileWrapper } from '../styles/navList';
import { LogoLink } from '../styles/navbar';
import Logo from '../../../assets/Logo.svg';
import AppButton from '../../../app-components/app-button';

interface NavListMobileProps {
  activeItem: string,
  onChangePage: (path: string) => void,
  toggleOrderFormHandle: () => void
}

function NavListMobile({ activeItem, onChangePage, toggleOrderFormHandle }: NavListMobileProps) {
  const [toggleNavMobile, setToggleNavMobile] = useState(false);

  const toggleMobileNavHandle = () => setToggleNavMobile((prevToggle) => !prevToggle);
  const changePageHandle = (path: string) => {
    onChangePage(path);
    toggleMobileNavHandle();
  };
  return (
    <>
      <NavListMobileWrapper
        open={toggleNavMobile}
        onClose={toggleMobileNavHandle}
      >
        <Box sx={{ padding: '2rem 1.14rem', display: 'flex', justifyContent: 'space-between' }}>
          <LogoLink to="/" onClick={() => changePageHandle('/')}>
            <img src={Logo} alt="" />
          </LogoLink>
          <IconButton
            sx={(theme) => ({ color: theme.palette.text.secondary })}
            onClick={toggleMobileNavHandle}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          <ListItem
            sx={{
              padding: '0',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}
          >
            <AppButton
              sx={{ padding: '6px 36px', borderRadius: '7.6px' }}
              size="small"
              color="secondary"
              onClick={toggleOrderFormHandle}
            >
              Разместить заказ
            </AppButton>
          </ListItem>
          {menuList.map((navItem) => (
            <ListItem
              sx={{ padding: '0', justifyContent: 'center' }}
              key={navItem.label}
            >
              <NavLink
                className={`${activeItem === navItem.path && 'active'}`}
                to={navItem.path}
                onClick={() => changePageHandle(navItem.path)}
              >
                {navItem.label}
              </NavLink>
            </ListItem>
          ))}
        </List>
      </NavListMobileWrapper>
      <IconButton
        sx={(theme) => ({
          color: theme.palette.text.secondary,
        })}
        onClick={toggleMobileNavHandle}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default NavListMobile;
