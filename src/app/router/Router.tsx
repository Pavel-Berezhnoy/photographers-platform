import { Suspense, lazy, memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import AuthRouter from './auth-router/AuthRouter';
import LoginView from '../../views/login-view';
import RegisterView from '../../views/register-view';
import Navbar from '../../widgets/navbar';
import OverflowWidget from '../../widgets/overflow-widget';
import PrivateRouter from './private-router/PrivateRouter';
import PublicRouter from './public-router/PublicRouter';
import NotFoundWidget from '../../widgets/not-found-widget';

const OrdersView = lazy(() => import('../../views/orders-view'));
const MyOrdersView = lazy(() => import('../../views/my-orders-view'));
const ProfilesView = lazy(() => import('../../views/profiles-view'));
const MainView = lazy(() => import('../../views/main-view'));
const MyProfileView = lazy(() => import('../../views/my-profile-view'));
const ProfileView = lazy(() => import('../../views/profile-view'));
const ChatsView = lazy(() => import('../../views/chats-view'));
const CurrentChatView = lazy(() => import('../../views/current-chat-view'));
const FavoriteView = lazy(() => import('../../views/favorite-view'));

function Router() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Routes>
      <Route path="/" element={<AuthRouter />}>
        <Route path="/" element={<PublicRouter />}>
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route
            path="/"
            index
            element={(
              <Suspense>
                <Navbar>
                  <OverflowWidget>
                    <MainView />
                  </OverflowWidget>
                </Navbar>
              </Suspense>
            )}
          />
        </Route>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="/profiles" element={<Suspense><ProfilesView /></Suspense>} />
          <Route path="/orders" element={<Suspense><OrdersView /></Suspense>} />
          <Route path="/my-orders" element={<Suspense><MyOrdersView /></Suspense>} />
          <Route path="/my-profile" element={<Suspense><MyProfileView /></Suspense>} />
          <Route path="/canie-chat" element={<Suspense><ChatsView /></Suspense>} />
          <Route path="/profile/:id" element={<Suspense><ProfileView /></Suspense>} />
          <Route path="/favorite" element={<Suspense><FavoriteView /></Suspense>} />
          {isMobile && <Route path="/canie-chat/:id" index element={<Suspense><CurrentChatView /></Suspense>} />}
        </Route>
      </Route>
      <Route path="/*" element={<NotFoundWidget isNotFound />} />
    </Routes>
  );
}

export default memo(Router);
