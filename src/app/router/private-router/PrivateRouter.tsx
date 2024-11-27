import { Navigate, Outlet } from 'react-router-dom';
import OverflowWidget from '../../../widgets/overflow-widget';
import Navbar from '../../../widgets/navbar';
import { useStore } from '../../store';

function PrivateRouter() {
  const { profileStore } = useStore();
  if (profileStore.getCurrentProfile) {
    return (
      <Navbar>
        <OverflowWidget><Outlet /></OverflowWidget>
      </Navbar>
    );
  }
  return (<Navigate to="/login" />);
}

export default PrivateRouter;
