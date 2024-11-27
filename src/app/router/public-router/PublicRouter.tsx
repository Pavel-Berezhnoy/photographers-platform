import { memo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStore } from '../../store';

function PublicRouter() {
  const { profileStore } = useStore();

  if (profileStore.getCurrentProfile) {
    return <Navigate to="/my-profile" />;
  }
  return <Outlet />;
}

export default memo(PublicRouter);
