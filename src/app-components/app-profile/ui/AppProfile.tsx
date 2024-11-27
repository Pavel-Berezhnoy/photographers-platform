import { ReactNode, useState } from 'react';
import { Box, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { observer } from 'mobx-react-lite';
import { IProfileToView } from '../../../constants/types/profile.d';
import AddMediaForm from './AddMediaForm';
import ProfilePortfolio from './ProfilePortfolio';
import AppTabButton from '../../app-tab-button';
import ProfileReviews from './profile-reviews/ProfileReviews';

interface AppProfileProps {
  profile: IProfileToView,
  actions?: ReactNode,
  addMedia?: boolean,
}

type ContentType = 'portfolio' | 'reviews'

function AppProfile({ profile, actions, addMedia = false }: AppProfileProps) {
  const [contentType, setContentType] = useState<ContentType>('portfolio');
  const [toggleMediaForm, setToggleMediaForm] = useState(false);

  const toggleMediaFormHandle = () => {
    setToggleMediaForm((prevMediaForm) => !prevMediaForm);
  };
  const setPortfolioContentTypeHandle = () => setContentType('portfolio');
  const setReviewsContentTypeHandle = () => setContentType('reviews');
  return (
    <Box
      sx={{
        paddingTop: '3.28rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      className="wrapper"
      color={(theme) => theme.palette.text.secondary}
    >
      {addMedia && (
        <AddMediaForm
          userId={profile.id}
          open={toggleMediaForm}
          onClose={toggleMediaFormHandle}
        />
      )}
      {profile.avatar
        ? (
          <Box maxWidth="20rem" minHeight="20rem" width="100%" height="100%" position="relative">
            <img
              src={profile.avatar}
              style={{ objectFit: 'cover', borderRadius: '50%', position: 'absolute' }}
              alt="avatar"
            />
          </Box>
        )
        : (
          <AccountCircleIcon sx={{
            maxWidth: '20rem', maxHeight: '20rem', width: '100%', height: '100%',
          }}
          />
        )}
      <Typography textAlign="center" fontSize="2.57rem" lineHeight="3rem" marginTop="1.42rem" fontWeight="bold">
        {`${profile.name} ${profile.sur_name}`}
      </Typography>
      <Typography color="#B1B1B1" textAlign="center" fontSize="1.42rem" lineHeight="1.57rem" marginTop="1.42rem">
        {profile.user_type}
      </Typography>
      <Typography color="#B1B1B1" textAlign="center" fontSize="1.42rem" lineHeight="1.57rem" marginTop=".71rem">
        {profile.email}
      </Typography>
      <Typography color="#B1B1B1" textAlign="center" fontSize="1.42rem" lineHeight="1.57rem" marginTop=".71rem">
        {profile.location}
      </Typography>
      <Box margin="1.42rem 0 3.57rem 0">
        {actions}
      </Box>
      <Box display="flex" gap="1.42rem" width="100%" marginBottom="1.42rem">
        <AppTabButton
          active={contentType === 'portfolio'}
          variant="outlined"
          color="secondary"
          onClick={setPortfolioContentTypeHandle}
        >
          Портфолио
        </AppTabButton>
        <AppTabButton
          active={contentType === 'reviews'}
          variant="outlined"
          color="secondary"
          onClick={setReviewsContentTypeHandle}
        >
          Отзывы
        </AppTabButton>
      </Box>
      {contentType === 'portfolio' && (
        <ProfilePortfolio
          userId={profile.id}
          addMedia={addMedia}
          toggleMediaFormHandle={toggleMediaFormHandle}
        />
      )}
      {contentType === 'reviews' && (
        <ProfileReviews userId={profile.id} userRating={profile.rating} />
      )}
    </Box>
  );
}

export default observer(AppProfile);
