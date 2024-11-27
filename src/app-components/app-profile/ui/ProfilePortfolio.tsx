import { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, ImageList } from '@mui/material';
import { observer } from 'mobx-react-lite';
import AppLoadingComponent from '../../app-loading-component';
import { useStore } from '../../../app/store';
import ProfilePortfolioItem from './ProfilePortfolioItem';

interface ProfilePortfolioProps {
  userId: number,
  addMedia: boolean,
  toggleMediaFormHandle: () => void,
}

function ProfilePortfolio({ addMedia, toggleMediaFormHandle, userId }: ProfilePortfolioProps) {
  const {
    usersStore: { getProfileMedias, getMediasLoading, fetchProfileMedias },
  } = useStore();

  useEffect(() => {
    fetchProfileMedias(userId);
  }, [fetchProfileMedias, userId]);

  return (
    <>
      <AppLoadingComponent isLoading={getMediasLoading}>
        <ImageList
          cols={4}
          rowHeight={320}
          sx={{
            marginBottom: '1.42rem',
            display: 'grid',
            width: '100%',
            minHeight: '320px',
            gap: '1rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 303px)) !important',
          }}
        >
          {addMedia && (
            <Button
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '.71rem',
                backgroundColor: '#9177DB',
              }}
              color="secondary"
              onClick={toggleMediaFormHandle}
            >
              <AddIcon sx={{ width: '4.64rem', height: '4.64rem' }} />
            </Button>
          )}
          {getProfileMedias.media.map((img) => (
            <ProfilePortfolioItem key={img.id} img={img} />
          ))}
        </ImageList>
      </AppLoadingComponent>
      {getProfileMedias.media.length !== getProfileMedias.Meta.total
        && getProfileMedias.Meta.total > getProfileMedias.Meta.limit
        && (
          <Box display="flex" justifyContent="flex-end" width="100%" marginBottom="5.42rem">
            <Button sx={{ padding: '.43rem 2.57rem' }} color="secondary">Ещё...</Button>
          </Box>
        )}
    </>
  );
}

export default observer(ProfilePortfolio);
