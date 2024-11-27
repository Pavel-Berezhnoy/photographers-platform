import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { checkTokenAndFetchUser } from '../../../services/api/http/authApi';
import { useStore } from '../../store';

function AuthRouter() {
  const [loadingUser, setLoadingUser] = useState(true);
  const { profileStore } = useStore();

  useEffect(() => {
    checkTokenAndFetchUser()
      .then((response) => {
        if (response.status === 200) {
          profileStore.setCurrentProfile = response.data;
        }
        setLoadingUser(false);
      });
  }, [profileStore]);
  if (loadingUser) {
    return (
      <Box sx={{
        display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }
  return <Outlet />;
}

export default observer(AuthRouter);
