import { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChangeProfileForm from './ChangeProfileForm';
import { useStore } from '../../../app/store';
import { MenuLink } from '../styles/navList';
import { removeAccessToken, removeRefreshToken } from '../../../services/token-service';

interface NavMenuProps {
  anchorEl: HTMLElement | null,
  onClose: () => void,
  onChangePage: (path: string) => void
}

function NavMenu({
  anchorEl, onClose, onChangePage,
}: NavMenuProps) {
  const [toggleProfileForm, setToggleProfileForm] = useState(false);
  const { profileStore } = useStore();
  const navigate = useNavigate();

  const toggleProfileFormHandle = () => {
    setToggleProfileForm((prevValue) => !prevValue);
    onClose();
  };
  const linkToProfileHandle = () => {
    onChangePage('/my-profile');
    onClose();
  };
  const logoutHandle = () => {
    removeAccessToken();
    removeRefreshToken();
    navigate('/login');
    profileStore.setCurrentProfile = null;
  };
  return (
    <>
      {profileStore.getCurrentProfile && (
        <ChangeProfileForm
          open={toggleProfileForm}
          onClose={toggleProfileFormHandle}
          profile={profileStore.getCurrentProfile}
        />
      )}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        PaperProps={{
          sx: (theme) => ({
            backgroundColor: '#1F2025',
            color: theme.palette.text.secondary,
          }),
        }}
        open={!!anchorEl}
        onClose={onClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem sx={{ padding: '0', minHeight: 'auto' }} onClick={linkToProfileHandle}>
          <MenuLink to="/my-profile">
            Мой профиль
          </MenuLink>
        </MenuItem>
        <MenuItem sx={{ minHeight: 'auto' }} onClick={toggleProfileFormHandle}>
          Настройки
        </MenuItem>
        <MenuItem sx={{ minHeight: 'auto' }} onClick={logoutHandle}>
          Выход
        </MenuItem>
      </Menu>
    </>
  );
}

export default NavMenu;
